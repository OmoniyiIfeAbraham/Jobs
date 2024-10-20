import React, { useState } from "react";
import Template from "../Components/Template";
import axios from "axios";
import { config } from "../Components/GeneralFunction";
import Swal from "sweetalert2";
import Notify from "../Components/Notify";
import Select from "react-select";
import cookies from "js-cookies";

function Signup() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirm_password: "",
    city: "",
    telephone: "",
  });

  const [error, setError] = useState({
    name: "",
    email: "",
    password: "",
    confirm_password: "",
    city: "",
    telephone: "",
  });
  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let is_valid = true;
    let err = error;
    if (user.password.length < 8) {
      is_valid = false;
      err.password = "Please enter a minimum of 8 characters";
    }

    if (user.password !== user.confirm_password) {
      is_valid = false;
      err.password = "Password does not match";
      err.confirm_password = "Password does not match";
    }

    setError(err);

    if (is_valid) {
      const fd = new FormData();
      fd.append("fullname", user.name);
      fd.append("email_address", user.email);
      fd.append("password", user.password);
      fd.append("confirm_password", user.confirm_password);
      fd.append("telephone", user.telephone);
      fd.append("city", user.city);

      let url = "http://solidrockschool.com.ng/api/people/application/create";
      axios
        .post(url, fd, config)
        .then((response) => {
          if (response.data.status == 200) {
            Notify({
              title: "Saved",
              message: `${response.data.message}`,
              type: "success",
            });
            Swal.close();
          } else {
            Notify({
              title: "Error",
              message: `${response.data.message}`,
              type: "danger",
            });
            Swal.close();
          }
        })
        .catch((error) => {
          Swal.close();
          alert(error);
        });
    }
  };

  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  const Alert = () => {
    // Swal.fire({
    //   title: "The Internet?",
    //   text: "That thing is still around?",
    //   icon: "question",
    // });
    // Notify({
    //   title: "Goodjob",
    //   message: "Data saved successfully",
    //   type: "success",
    // });
    cookies.setItem("username", "badejohnar");
    Notify({
      title: "Goodjob",
      message: "Cookies stored",
      type: "default",
    });
  };
  return (
    <Template page={"signup"}>
      <section className="job-bg user-page">
        <div className="container  text-center">
          <div className="user-account-content">
            <div className="user-account job-user-account">
              <h2>Create An Account</h2>
              <ul className="nav nav-tabs text-center" role="tablist">
                <li role="presentation">
                  <a
                    className="active"
                    href="#find-job"
                    aria-controls="find-job"
                    role="tab"
                    data-toggle="tab"
                  >
                    Find A Job
                  </a>
                </li>
              </ul>
              <div className="tab-content">
                <div
                  role="tabpanel"
                  className="tab-pane active show"
                  id="find-job"
                >
                  <form action="#" onSubmit={handleSubmit}>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="FirstName"
                        name="name"
                        value={user.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email Id"
                        name="email"
                        value={user.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        name="password"
                        value={user.password}
                        onChange={handleChange}
                        required
                      />
                      <span>{error?.password}</span>
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Confirm Password"
                        name="confirm_password"
                        value={user.confirm_password}
                        onChange={handleChange}
                        required
                      />
                      <span>{error?.confirm_password}</span>
                    </div>
                    <div className="form-group">
                      <input
                        type="number"
                        className="form-control"
                        placeholder="Mobile Number"
                        name="telephone"
                        value={user.telephone}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <select
                      className="form-control"
                      name="city"
                      value={user.city}
                      onChange={handleChange}
                      required
                    >
                      <option value="#">Select City</option>
                      <option value="#">London UK</option>
                      <option value="#">Newyork, USA</option>
                      <option value="#">Seoul, Korea</option>
                      <option value="#">Beijing, China</option>
                    </select>

                    {/* <Select
                      defaultValue={selectedOption}
                      onChange={setSelectedOption}
                      options={options}
                    /> */}
                    <div className="checkbox">
                      <label className="pull-left checked" for="signing">
                        <input type="checkbox" name="signing" id="signing" /> By
                        signing up for an account you agree to our Terms and
                        Conditions{" "}
                      </label>
                    </div>
                    {/* <button className="btn" onClick={() => Alert()}>
                      Test Alert
                    </button> */}
                    <button type="submit" className="btn">
                      Registration
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Template>
  );
}

export default Signup;
