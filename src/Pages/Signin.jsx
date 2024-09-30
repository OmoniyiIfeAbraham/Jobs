import React, { useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Template from "../Components/Template";
import { config } from "../Components/GeneralFunction";
import axios from "axios";
import Notify from "../Components/Notify";
import cookies from "js-cookies";

function Signin() {
  const [user, setUser] = useState({
    email_address: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const fd = new FormData();
    fd.append("email_address", user.email_address);
    fd.append("password", user.password);

    let url = "http://solidrockschool.com.ng/api/people/applicant/login";
    axios.post(url, fd, config).then((response) => {
      if (response.data.status == 200) {
        Notify({
          title: "Saved",
          message: `${response.data.message}`,
          type: "success",
        });
        cookies.setItem("token", response.data.token);
      } else {
        Notify({
          title: "Error",
          message: `${response.data.message}`,
          type: "danger",
        });
      }
    });
  };
  return (
    <Template page={"signin"}>
      <section className="clearfix job-bg user-page">
        <div className="container text-center">
          <div className="user-account-content">
            <div className="user-account">
              <h2>User Login</h2>

              <form action="#" onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Email"
                    name="email_address"
                    onChange={handleChange}
                    value={user.email_address}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    name="password"
                    onChange={handleChange}
                    value={user.password}
                  />
                </div>
                <button type="submit" className="btn">
                  Login
                </button>
              </form>

              <div className="user-option">
                <div className="checkbox pull-left">
                  <label for="logged">
                    <input type="checkbox" name="logged" id="logged" /> Keep me
                    logged in{" "}
                  </label>
                </div>
                <div className="pull-right forgot-password">
                  <a href="#">Forgot password</a>
                </div>
              </div>
            </div>
            <a href="#" className="btn-primary">
              Create a New Account
            </a>
          </div>
        </div>
      </section>
    </Template>
  );
}

export default Signin;
