import React, { useState } from "react";
import Header from "./../Components/Header.jsx";
import Footer from "./../Components/Footer.jsx";
import Banner from "./../Components/Banner.jsx";
import Template from "../Components/Template.jsx";
import JobItem from "../Components/JobItem.jsx";

const Index = () => {
  const [results, setResults] = useState([]);
  return (
    <Template page={"Home"}>
      <Banner results={results} setResults={setResults} />
      <div className="page">
        <div className="container">
          <div className="section category-items job-category-items  text-center">
            <ul className="category-list">
              <li className="category-item">
                <a href="/job-list">
                  <div className="category-icon">
                    <img
                      src="images/icon/1.png"
                      alt="images"
                      className="img-fluid"
                    />
                  </div>
                  <span className="category-title">Accounting/Finance</span>
                  <span className="category-quantity">(1298)</span>
                </a>
              </li>
              <li className="category-item">
                <a href="/job-list">
                  <div className="category-icon">
                    <img
                      src="images/icon/2.png"
                      alt="images"
                      className="img-fluid"
                    />
                  </div>
                  <span className="category-title">Education/Training</span>
                  <span className="category-quantity">(76212)</span>
                </a>
              </li>
              <li className="category-item">
                <a href="/job-list">
                  <div className="category-icon">
                    <img
                      src="images/icon/3.png"
                      alt="images"
                      className="img-fluid"
                    />
                  </div>
                  <span className="category-title">Engineer/Architects</span>
                  <span className="category-quantity">(212)</span>
                </a>
              </li>
              <li className="category-item">
                <a href="/job-list">
                  <div className="category-icon">
                    <img
                      src="images/icon/4.png"
                      alt="images"
                      className="img-fluid"
                    />
                  </div>
                  <span className="category-title">Garments/Textile</span>
                  <span className="category-quantity">(972)</span>
                </a>
              </li>
              <li className="category-item">
                <a href="/job-list">
                  <div className="category-icon">
                    <img
                      src="images/icon/5.png"
                      alt="images"
                      className="img-fluid"
                    />
                  </div>
                  <span className="category-title">HR/Org. Development</span>
                  <span className="category-quantity">(1298)</span>
                </a>
              </li>
              <li className="category-item">
                <a href="/job-list">
                  <div className="category-icon">
                    <img
                      src="images/icon/6.png"
                      alt="images"
                      className="img-fluid"
                    />
                  </div>
                  <span className="category-title">Design/Creative</span>
                  <span className="category-quantity">(76212)</span>
                </a>
              </li>
              <li className="category-item">
                <a href="/job-list">
                  <div className="category-icon">
                    <img
                      src="images/icon/7.png"
                      alt="images"
                      className="img-fluid"
                    />
                  </div>
                  <span className="category-title">Research/Consultancy</span>
                  <span className="category-quantity">(1298)</span>
                </a>
              </li>
              <li className="category-item">
                <a href="/job-list">
                  <div className="category-icon">
                    <img
                      src="images/icon/8.png"
                      alt="images"
                      className="img-fluid"
                    />
                  </div>
                  <span className="category-title">Medical/Pharma</span>
                  <span className="category-quantity">(76212)</span>
                </a>
              </li>
              <li className="category-item">
                <a href="/job-list">
                  <div className="category-icon">
                    <img
                      src="images/icon/9.png"
                      alt="images"
                      className="img-fluid"
                    />
                  </div>
                  <span className="category-title">Music & Arts</span>
                  <span className="category-quantity">(212)</span>
                </a>
              </li>
              <li className="category-item">
                <a href="/job-list">
                  <div className="category-icon">
                    <img
                      src="images/icon/10.png"
                      alt="images"
                      className="img-fluid"
                    />
                  </div>
                  <span className="category-title">Marketing/Sales</span>
                  <span className="category-quantity">(1298)</span>
                </a>
              </li>
              <li className="category-item">
                <a href="/job-list">
                  <div className="category-icon">
                    <img
                      src="images/icon/11.png"
                      alt="images"
                      className="img-fluid"
                    />
                  </div>
                  <span className="category-title">Production/Operation</span>
                  <span className="category-quantity">(124)</span>
                </a>
              </li>
              <li className="category-item">
                <a href="/job-list">
                  <div className="category-icon">
                    <img
                      src="images/icon/12.png"
                      alt="images"
                      className="img-fluid"
                    />
                  </div>
                  <span className="category-title">Miscellaneous</span>
                  <span className="category-quantity">(972)</span>
                </a>
              </li>
            </ul>
          </div>
          <JobItem results={results} setResults={setResults} />
          <div className="section workshop-traning">
            <div className="section-title">
              <h4>Workshop Traning</h4>
              <a href="#" className="btn btn-primary">
                See all
              </a>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="workshop">
                  <img
                    src="images/job/5.png"
                    alt="Image"
                    className="img-fluid"
                  />
                  <h3>
                    <a href="#">Business Process Management Training</a>
                  </h3>
                  <h4>Course Duration: 3 Month ( Sat, Mon, Fri)</h4>
                  <div className="workshop-price">
                    <h5>Course instructor: Kim Jon ley</h5>
                    <h5>Course Amount: $200</h5>
                  </div>
                  <div className="ad-meta">
                    <div className="meta-content">
                      <span className="dated">
                        <a href="#">7 Jan 10:10 pm </a>
                      </span>
                    </div>
                    <div className="user-option pull-right">
                      <a href="#">
                        <i className="fa fa-map-marker"></i>{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="workshop">
                  <img
                    src="images/job/6.png"
                    alt="Image"
                    className="img-fluid"
                  />
                  <h3>
                    <a href="#">Employee Motivation and Engagement</a>
                  </h3>
                  <h4>Course Duration: 3 Month ( Sat, Mon, Fri)</h4>
                  <div className="workshop-price">
                    <h5>Course instructor: Kim Jon ley</h5>
                    <h5>Course Amount: $200</h5>
                  </div>
                  <div className="ad-meta">
                    <div className="meta-content">
                      <span className="dated">
                        <a href="#">7 Jan 10:10 pm </a>
                      </span>
                    </div>
                    <div className="user-option pull-right">
                      <a href="#">
                        <i className="fa fa-map-marker"></i>{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section cta cta-two text-center">
            <div className="row">
              <div className="col-md-4">
                <div className="single-cta">
                  <div className="cta-icon icon-jobs">
                    <img
                      src="images/icon/31.png"
                      alt="Icon"
                      className="img-fluid"
                    />
                  </div>
                  <h3>3,412</h3>
                  <h4>Live Jobs</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="single-cta">
                  <div className="cta-icon icon-company">
                    <img
                      src="images/icon/32.png"
                      alt="Icon"
                      className="img-fluid"
                    />
                  </div>
                  <h3>12,043</h3>
                  <h4>Total Company</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="single-cta">
                  <div className="cta-icon icon-candidate">
                    <img
                      src="images/icon/33.png"
                      alt="Icon"
                      className="img-fluid"
                    />
                  </div>
                  <h3>5,798,298</h3>
                  <h4>Total Candidate</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section id="download" className="clearfix parallax-section">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 text-center">
              <h2>Download on App Store</h2>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4">
              <a href="#" className="download-app">
                <img
                  src="images/icon/16.png"
                  alt="Image"
                  className="img-fluid"
                />
                <span className="pull-left">
                  <span>available on</span>
                  <strong>Google Play</strong>
                </span>
              </a>
            </div>

            <div className="col-md-4">
              <a href="#" className="download-app">
                <img
                  src="images/icon/17.png"
                  alt="Image"
                  className="img-fluid"
                />
                <span className="pull-left">
                  <span>available on</span>
                  <strong>App Store</strong>
                </span>
              </a>
            </div>

            <div className="col-md-4">
              <a href="#" className="download-app">
                <img
                  src="images/icon/18.png"
                  alt="Image"
                  className="img-fluid"
                />
                <span className="pull-left">
                  <span>available on</span>
                  <strong>Windows Store</strong>
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </Template>
  );
};

export default Index;
