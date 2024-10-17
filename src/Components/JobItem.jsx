import axios from "axios";
import React, { useEffect, useState } from "react";
import { config, jobData } from "./GeneralFunction";
import Swal from "sweetalert2";

const JobItem = ({ results, setResults }) => {
  const [content, setContent] = useState(jobData);

  const FetchData = () => {
    let url = "http://solidrockschool.com.ng/api/job/index";

    axios.get(url, config).then((response) => {
      setContent(response.data.data);
    });
  };

  useEffect(() => {
    FetchData();
  }, []);
  return (
    <div className="section latest-jobs-ads">
      <div className="section-title tab-manu">
        <h4>Latest Jobs</h4>

        <ul className="nav nav-tabs" role="tablist">
          <li role="presentation">
            <a href="#hot-jobs" data-toggle="tab">
              Hot Jobs
            </a>
          </li>
        </ul>
      </div>
      <div className="tab-content">
        <div role="tabpanel" className="tab-pane fade in" id="hot-jobs">
          {content &&
            results === null &&
            content.map((list, id) => (
              <div className="job-ad-item" key={id}>
                <div className="item-info">
                  <div className="item-image-box">
                    <div className="item-image">
                      <a href="/job-details">
                        <img
                          src="images/job/4.png"
                          alt="Image"
                          className="img-fluid"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="ad-info">
                    <span>
                      <a href={`/job-details/${list.slug}`} className="title">
                        {list.title}
                      </a>{" "}
                      @ <a href="#">{list.company_name}</a>
                    </span>
                    <div className="ad-meta">
                      <ul>
                        <li>
                          <a href="#">
                            <i
                              className="fa fa-map-marker"
                              aria-hidden="true"
                            ></i>
                            {list.location}{" "}
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-clock-o" aria-hidden="true"></i>
                            {list.employment_type}
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-money" aria-hidden="true"></i>$
                            {list.min_salary} - ${list.max_salary}
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-tags" aria-hidden="true"></i>
                            {list.category}
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="button">
                    <a
                      href={`/job-details/${list.slug}`}
                      className="btn btn-primary"
                    >
                      Apply Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          {results &&
            results.map((list, id) => (
              <div className="job-ad-item" key={id}>
                <div className="item-info">
                  <div className="item-image-box">
                    <div className="item-image">
                      <a href="/job-details">
                        <img
                          src="images/job/4.png"
                          alt="Image"
                          className="img-fluid"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="ad-info">
                    <span>
                      <a href={`/job-details/${list.slug}`} className="title">
                        {list.title}
                      </a>{" "}
                      @ <a href="#">{list.company_name}</a>
                    </span>
                    <div className="ad-meta">
                      <ul>
                        <li>
                          <a href="#">
                            <i
                              className="fa fa-map-marker"
                              aria-hidden="true"
                            ></i>
                            {list.location}{" "}
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-clock-o" aria-hidden="true"></i>
                            {list.employment_type}
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-money" aria-hidden="true"></i>$
                            {list.min_salary} - ${list.max_salary}
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-tags" aria-hidden="true"></i>
                            {list.category}
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="button">
                    <a
                      href={`/job-details/${list.slug}`}
                      className="btn btn-primary"
                    >
                      Apply Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default JobItem;
