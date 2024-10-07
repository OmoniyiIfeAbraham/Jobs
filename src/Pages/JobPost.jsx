import React, { useState } from "react";
import Template from "./../Components/Template.jsx";
import axios from "axios";
import { config } from "../Components/GeneralFunction.jsx";
import Notify from "../Components/Notify.jsx";
import Swal from "sweetalert2";

function JobPost() {
  const [jobDetails, setJobDetails] = useState({
    slug: "",
    category_code: "",
    company_code: "",
    job_type: "",
    experience: "",
    description: "",
    fees: "",
    staff: "",
    location: "",
    min_salary: "",
    max_salary: "",
    closing_date: "",
    title: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setJobDetails({ ...jobDetails, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    Swal.fire({
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/c/c7/Loading_2.gif",
      imageHeight: 100,
      showCloseButton: false,
      showConfirmButton: false,
    });

    const fd = new FormData();
    fd.append("slug", `${jobDetails.title - jobDetails.category_code}`);
    fd.append("category_code", jobDetails.category_code);
    fd.append("company_code", jobDetails.company_code);
    fd.append("job_type", jobDetails.job_type);
    fd.append("experience", jobDetails.experience);
    fd.append("description", jobDetails.description);
    fd.append("fees", jobDetails.fees);
    fd.append("staff", jobDetails.staff);
    fd.append("location", jobDetails.location);
    fd.append("min_salary", jobDetails.min_salary);
    fd.append("max_salary", jobDetails.max_salary);
    fd.append("closing_date", jobDetails.closing_date);
    fd.append("title", jobDetails.title);

    let url = "http://solidrockschool.com.ng/api/job/add";
    axios.post(url, fd, config).then((response) => {
      if (response.data.status == 200) {
        Notify({
          title: "Saved",
          message: response.data.message,
          type: "success",
        });
        window.location.href = "/job-list";
      } else {
        Notify({
          title: "Error",
          message: response.data.message,
          type: "danger",
        });
      }
    });
  };

  return (
    <Template page={"post"}>
      <section className=" job-bg ad-details-page">
        <div className="container">
          <div className="breadcrumb-section">
            <ol className="breadcrumb">
              <li>
                <a href="/">Home</a>
              </li>
              <li>Job Post </li>
            </ol>
            <h2 className="title">Post Your Job</h2>
          </div>
          <div className="job-postdetails">
            <div className="row">
              <div className="col-lg-8">
                <form action="#" onSubmit={handleSubmit}>
                  <fieldset>
                    <div className="section postdetails">
                      <h4>
                        Post Your Job
                        <span className="pull-right">* Mandatory Fields</span>
                      </h4>
                      <div className="row form-group add-title">
                        <label className="col-sm-3 label-title">
                          Job Category
                        </label>
                        <div className="col-sm-9">
                          <select
                            className="form-control"
                            name="category_code"
                            value={jobDetails.category_code}
                            onChange={handleChange}
                            required
                          >
                            <option selected disabled>
                              Select a category
                            </option>
                            <option value="Software Engineer">
                              Software Engineer
                            </option>
                            <option value="Program Development">
                              Program Development
                            </option>
                            <option value="Project Manager">
                              Project Manager
                            </option>
                            <option value="Graphics Designer">
                              Graphics Designer
                            </option>
                          </select>
                        </div>
                      </div>
                      <div className="row form-group">
                        <label className="col-sm-3">
                          Job Type<span className="required">*</span>
                        </label>
                        <div className="col-sm-9 user-type">
                          <input
                            type="radio"
                            name="job_type"
                            value="full-time"
                            onClick={handleChange}
                            id="full-time"
                          />{" "}
                          <label for="full-time">Full Time</label>
                          <input
                            type="radio"
                            name="job_type"
                            value="part-time"
                            onClick={handleChange}
                            id="part-time"
                          />{" "}
                          <label for="part-time">Part Time</label>
                          <input
                            type="radio"
                            name="job_type"
                            value="freelance"
                            onClick={handleChange}
                            id="freelance"
                          />{" "}
                          <label for="freelance">Freelance</label>
                          <input
                            type="radio"
                            name="job_type"
                            value="contract"
                            onClick={handleChange}
                            id="contract"
                          />{" "}
                          <label for="contract">Contract</label>
                        </div>
                      </div>
                      <div className="row form-group">
                        <label className="col-sm-3 label-title">
                          Title for your job<span className="required">*</span>
                        </label>
                        <div className="col-sm-9">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="ex, Human Resource Manager"
                            value={jobDetails.title}
                            name="title"
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="row form-group item-description">
                        <label className="col-sm-3 label-title">
                          Description<span className="required">*</span>
                        </label>
                        <div className="col-sm-9">
                          <textarea
                            className="form-control"
                            id="textarea"
                            placeholder="Write few lines about your jobs"
                            rows="8"
                            value={jobDetails.description}
                            name="description"
                            onChange={handleChange}
                            required
                          ></textarea>
                        </div>
                      </div>
                      {/* <div className="row characters">
                        <div className="col-sm-9 col-sm-offset-3">
                          <p>5000 characters left</p>
                        </div>
                      </div> */}
                      {/* <div className="row form-group">
                        <label className="col-sm-3 label-title">
                          Fees<span className="required">*</span>
                        </label>
                        <div className="col-sm-9">
                          <input
                            type="number"
                            className="form-control"
                            placeholder="100"
                            value={jobDetails.fees}
                            name="fees"
                            onChange={handleChange}
                          />
                        </div>
                      </div> */}
                      <div className="row form-group">
                        <label className="col-sm-3 label-title">
                          Staff<span className="required">*</span>
                        </label>
                        <div className="col-sm-9">
                          <input
                            type="number"
                            className="form-control"
                            placeholder="200"
                            value={jobDetails.staff}
                            name="staff"
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="row form-group add-title location">
                        <label className="col-sm-3 label-title">
                          Location<span className="required">*</span>
                        </label>
                        <div className="col-sm-9">
                          <select
                            className="form-control"
                            name="location"
                            value={jobDetails.location}
                            onChange={handleChange}
                            required
                          >
                            <option selected disabled>
                              Select Country, State
                            </option>
                            <option value="Argentina, State 1">
                              Argentina, State 1
                            </option>
                            <option value="Australia, State 2">
                              Australia, State 2
                            </option>
                            <option value="Belgium, State 3">
                              Belgium, State 3
                            </option>
                            <option value="Brazil, State 4">
                              Brazil, State 4
                            </option>
                            <option value="Cambodia, State 4">
                              Cambodia, State 4
                            </option>
                            <option value="Nigeria, Lagos">
                              Nigeria, Lagos
                            </option>
                          </select>
                        </div>
                      </div>
                      <div className="row form-group select-price">
                        <label className="col-sm-3 label-title">
                          Salary<span className="required">*</span>
                        </label>
                        <div className="col-sm-9">
                          <label>$USD</label>
                          <input
                            type="number"
                            className="form-control"
                            placeholder="Min"
                            value={jobDetails.min_salary}
                            name="min_salary"
                            onChange={handleChange}
                            required
                          />
                          <span>-</span>
                          <input
                            type="number"
                            className="form-control"
                            placeholder="Max"
                            value={jobDetails.max_salary}
                            name="max_salary"
                            onChange={handleChange}
                            required
                          />
                          <input
                            type="radio"
                            name="fees"
                            value="negotiable"
                            id="negotiable"
                            onClick={handleChange}
                          />
                          <label for="negotiable">Negotiable </label>
                        </div>
                      </div>
                      <div className="row form-group">
                        <label className="col-sm-3 label-title">
                          Closing Date<span className="required">*</span>
                        </label>
                        <div className="col-sm-9">
                          <input
                            type="date"
                            className="form-control"
                            placeholder="ex, Human Resource Manager"
                            value={jobDetails.closing_date}
                            name="closing_date"
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                      {/* <div className="row form-group add-title">
                        <label className="col-sm-3 label-title">
                          Salary Type<span className="required">*</span>
                        </label>
                        <div className="col-sm-9">
                          <div className="dropdown category-dropdown">
                            <a
                              data-toggle="dropdown"
                              href="#"
                              aria-expanded="false"
                            >
                              <span className="change-text">Per Hour</span>{" "}
                              <i className="fa fa-angle-down pull-right"></i>
                            </a>
                            <ul className="dropdown-menu category-change">
                              <li>
                                <a href="#">Per Hour</a>
                              </li>
                              <li>
                                <a href="#">Daily</a>
                              </li>
                              <li>
                                <a href="#">Monthly</a>
                              </li>
                              <li>
                                <a href="#">Yearly</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div> */}
                      <div className="row form-group add-title">
                        <label className="col-sm-3 label-title">
                          Exprience<span className="required">*</span>
                        </label>
                        <div className="col-sm-9">
                          <select
                            className="form-control"
                            name="experience"
                            value={jobDetails.experience}
                            onChange={handleChange}
                            required
                          >
                            <option value="Entry Level">Entry Level</option>
                            <option value="Mid Level">Mid Level</option>
                            <option value="Mid-Senior Level">
                              Mid-Senior Level
                            </option>
                            <option value="Top Level">Top Level</option>
                          </select>
                        </div>
                      </div>
                      {/* <div className="row form-group brand-name">
                        <label className="col-sm-3 label-title">
                          Job Function<span className="required">*</span>
                        </label>
                        <div className="col-sm-9">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="human, reosurce, job, hrm"
                          />
                        </div>
                      </div> */}
                    </div>
                    <div className="section company-information">
                      <h4>Company Information</h4>
                      {/* <div className="row form-group">
                        <label className="col-sm-3 label-title">
                          Industry<span className="required">*</span>
                        </label>
                        <div className="col-sm-9">
                          <input
                            type="text"
                            name="name"
                            className="form-control"
                            placeholder="Marketing and Advertising"
                          />
                        </div>
                      </div> */}
                      <div className="row form-group">
                        <label className="col-sm-3 label-title">
                          Company Name<span className="required">*</span>
                        </label>
                        <div className="col-sm-9">
                          <input
                            type="text"
                            name="company_code"
                            className="form-control"
                            placeholder="ex, Jhon Doe"
                            value={jobDetails.company_code}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                      {/* <div className="row form-group">
                        <label className="col-sm-3 label-title">Email ID</label>
                        <div className="col-sm-9">
                          <input
                            type="email"
                            name="email"
                            className="form-control"
                            placeholder="ex, jhondoe@mail.com"
                          />
                        </div>
                      </div> */}
                      {/* <div className="row form-group">
                        <label className="col-sm-3 label-title">
                          Mobile Number<span className="required">*</span>
                        </label>
                        <div className="col-sm-9">
                          <input
                            type="text"
                            name="mobileNumber"
                            className="form-control"
                            placeholder="ex, +912457895"
                          />
                        </div>
                      </div> */}
                      {/* <div className="row form-group address">
                        <label className="col-sm-3 label-title">
                          Address<span className="required">*</span>
                        </label>
                        <div className="col-sm-9">
                          <input
                            type="text"
                            name="address"
                            className="form-control"
                            placeholder="ex, alekdera House, coprotec, usa"
                          />
                        </div>
                      </div> */}
                    </div>
                    {/* <div className="section">
                      <h4>Make Your Post Premium</h4>
                      <p>
                        More replies means more interested buyers. With lots of
                        interested buyers, you have a better chance of selling
                        for the price that you want.<a href="#">Learn more</a>
                      </p>
                      <ul className="premium-options">
                        <li className="premium">
                          <input
                            type="radio"
                            name="premiumOption"
                            value="day-one"
                            id="day-one"
                          />
                          <label for="day-one">Regular Post</label>
                          <span>$20.00</span>
                        </li>
                        <li className="premium">
                          <input
                            type="radio"
                            name="premiumOption"
                            value="day-two"
                            id="day-two"
                          />
                          <label for="day-two">Regular Post</label>
                          <span>$30.00</span>
                        </li>
                        <li className="premium">
                          <input
                            type="radio"
                            name="premiumOption"
                            value="day-three"
                            id="day-three"
                          />
                          <label for="day-three">Top Post for 7 days</label>
                          <span>$50.00</span>
                        </li>
                        <li className="premium">
                          <input
                            type="radio"
                            name="premiumOption"
                            value="day-four"
                            id="day-four"
                          />
                          <label for="day-four">Daily Bump Up for 7 days</label>
                          <span>$100.00</span>
                        </li>
                      </ul>
                    </div> */}
                    <div className="checkbox section agreement">
                      {/* <label for="send">
                        <input type="checkbox" name="send" id="send" />
                        You agree to our <a href="#">Terms of Use</a> and{" "}
                        <a href="#">Privacy Policy</a> and acknowledge that you
                        are the rightful owner of this item and using Jobs to
                        find a genuine buyer.
                      </label> */}
                      <button type="submit" className="btn btn-primary">
                        Post Your Job
                      </button>
                    </div>
                  </fieldset>
                </form>
              </div>

              <div className="col-lg-4">
                <div className="section quick-rules">
                  <h4>Quick rules</h4>
                  <p className="lead">
                    Posting an ad on <a href="#">jobs.com</a> is free! However,
                    all ads must follow our rules:
                  </p>
                  <ul>
                    <li>Make sure you post in the correct category.</li>
                    <li>
                      Do not post the same ad more than once or repost an ad
                      within 48 hours.
                    </li>
                    <li>Do not upload pictures with watermarks.</li>
                    <li>
                      Do not post ads containing multiple items unless it's a
                      package deal.
                    </li>
                    <li>
                      Do not put your email or phone numbers in the title or
                      description.
                    </li>
                    <li>Make sure you post in the correct category.</li>
                    <li>
                      Do not post the same ad more than once or repost an ad
                      within 48 hours.
                    </li>
                    <li>Do not upload pictures with watermarks.</li>
                    <li>
                      Do not post ads containing multiple items unless it's a
                      package deal.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Template>
  );
}

export default JobPost;
