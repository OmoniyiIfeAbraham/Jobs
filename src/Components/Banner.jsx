import axios from "axios";
import React, { useState } from "react";
import { config } from "./GeneralFunction";
import Notify from "./Notify";
import Swal from "sweetalert2";

const Banner = ({ results, setResults }) => {
  const [query, setQuery] = useState("");

  const Search = (event) => {
    event.preventDefault();

    const fd = new FormData();
    fd.append("search", query);

    Swal.fire({
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/c/c7/Loading_2.gif",
      imageHeight: 100,
      showCloseButton: false,
      showConfirmButton: false,
    });

    const url = "http://solidrockschool.com.ng/api/job/search";

    axios.post(url, fd, config).then((response) => {
      if (response.data.status === 200) {
        setResults(response.data.data);
      } else {
        Notify({
          title: "Error",
          message: `${response.data.message}`,
          type: "danger",
        });
      }
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setQuery(value);
  };
  return (
    <div className="banner-job">
      <div className="banner-overlay"></div>
      <div className="container text-center">
        <h1 className="title">The Easiest Way to Get Your New Job</h1>
        <h3>We offer 12000 jobs vacation right now</h3>
        <div className="banner-form">
          <form action="#" className="clearfix" onSubmit={Search}>
            <input
              type="text"
              className="form-control"
              placeholder="Type your key word"
              name="query"
              value={query}
              onChange={handleChange}
            />
            {/* <div className="dropdown category-dropdown">
              <a data-toggle="dropdown" href="#">
                <span className="change-text">Job Location</span>{" "}
                <i className="fa fa-angle-down"></i>
              </a>
              <ul className="dropdown-menu category-change">
                <li>
                  <a href="#">Location 1</a>
                </li>
                <li>
                  <a href="#">Location 2</a>
                </li>
                <li>
                  <a href="#">Location 3</a>
                </li>
              </ul>
            </div> */}
            <button type="submit" className="btn btn-primary" value="Search">
              Search
            </button>
          </form>
        </div>
        <ul className="banner-socail list-inline">
          <li>
            <a href="#" title="Facebook">
              <i className="fa fa-facebook"></i>
            </a>
          </li>
          <li>
            <a href="#" title="Twitter">
              <i className="fa fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="#" title="Google Plus">
              <i className="fa fa-google-plus"></i>
            </a>
          </li>
          <li>
            <a href="#" title="Youtube">
              <i className="fa fa-youtube"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Banner;
