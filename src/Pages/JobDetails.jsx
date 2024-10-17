import { useParams } from "react-router-dom";
import Template from "../Components/Template.jsx";
import { useEffect, useState } from "react";
import axios from "axios";
import { config } from "../Components/GeneralFunction.jsx";
import cookies from "js-cookies";
import Notify from "../Components/Notify.jsx";
import Swal from "sweetalert2";

function JobDetails() {
  let param = useParams();

  const People_Code = cookies.getItem("code");

  const [job, setJob] = useState();

  const FetchData = () => {
    let url = `http://solidrockschool.com.ng/api/job/info/${param.slug}`;

    axios.get(url, config).then((response) => {
      setJob(response.data.data[0]);
    });
  };

  useEffect(() => {
    FetchData();
  }, []);

  console.log(job);

  const Bookmark = (event) => {
    event.preventDefault();

    Swal.fire({
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/c/c7/Loading_2.gif",
      imageHeight: 100,
      showCloseButton: false,
      showConfirmButton: false,
    });

    const fd = new FormData();
    fd.append("job_code", job.code);
    fd.append("people_code", People_Code);

    let url = "http://solidrockschool.com.ng/api/people/job/bookmark";
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
          // window.location.href = `job-details/${param.slug}`;
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
  };
  return (
    <Template page={"Details"}>
      <section className="job-bg page job-details-page">
        <div className="container">
          <div className="breadcrumb-section">
            <ol className="breadcrumb">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/job-list">{job?.category}</a>
              </li>
            </ol>
            <h2 className="title">{job?.title}</h2>
          </div>
          <div className="banner-form banner-form-full job-list-form">
            <form action="#" className="clearfix">
              <div className="dropdown category-dropdown">
                <a data-toggle="dropdown" href="#">
                  <span className="change-text">Job Category</span>{" "}
                  <i className="fa fa-angle-down"></i>
                </a>
                <ul className="dropdown-menu category-change">
                  <li>
                    <a href="#">Customer Service</a>
                  </li>
                  <li>
                    <a href="#">Software Engineer</a>
                  </li>
                  <li>
                    <a href="#">Program Development</a>
                  </li>
                  <li>
                    <a href="#">Project Manager</a>
                  </li>
                  <li>
                    <a href="#">Graphics Designer</a>
                  </li>
                </ul>
              </div>

              <div className="dropdown category-dropdown language-dropdown">
                <a data-toggle="dropdown" href="#">
                  <span className="change-text">Job Location</span>{" "}
                  <i className="fa fa-angle-down"></i>
                </a>
                <ul className="dropdown-menu category-change language-change">
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
              </div>
              <input
                type="text"
                className="form-control"
                placeholder="Type your key word"
              />
              <button type="submit" className="btn btn-primary" value="Search">
                Search
              </button>
            </form>
          </div>
          <div className="job-details">
            <div className="section job-ad-item">
              <div className="item-info">
                <div className="item-image-box">
                  <div className="item-image">
                    <img
                      src="/images/job/4.png"
                      alt="Image"
                      className="img-fluid"
                    />
                  </div>
                </div>
                <div className="ad-info">
                  <span>
                    <span>
                      <a href="#" className="title">
                        {job?.title}
                      </a>
                    </span>{" "}
                    @ <a href="#"> {job?.company_name}</a>
                  </span>
                  <div className="ad-meta">
                    <ul>
                      <li>
                        <a href="#">
                          <i
                            className="fa fa-map-marker"
                            aria-hidden="true"
                          ></i>
                          {job?.location}
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-clock-o" aria-hidden="true"></i>
                          {job?.employment_type}
                        </a>
                      </li>
                      <li>
                        <i className="fa fa-money" aria-hidden="true"></i>${" "}
                        {job?.min_salary} - $ {job?.max_salary}
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-tags" aria-hidden="true"></i>
                          {job?.website}
                        </a>
                      </li>
                      <li>
                        <i
                          className="fa fa-hourglass-start"
                          aria-hidden="true"
                        ></i>
                        Application Deadline : {job?.closing_date}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="social-media">
                <div
                  className="button"
                  style={{ display: "flex", flexDirection: "rowF" }}
                >
                  <a href="#" className="btn btn-primary">
                    <i className="fa fa-briefcase" aria-hidden="true"></i>Apply
                    For This Job
                  </a>
                  {job && (
                    <form action="" method="post" onSubmit={Bookmark}>
                      <button
                        type="submit"
                        className="btn btn-primary bookmark"
                      >
                        <i className="fa fa-bookmark-o" aria-hidden="true"></i>{" "}
                        Bookmark
                      </button>
                    </form>
                  )}
                </div>
                {/* <ul className="share-social">
                  <li>Share this ad</li>
                  <li>
                    <a href="#">
                      <i
                        className="fa fa-facebook-official"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i
                        className="fa fa-twitter-square"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i
                        className="fa fa-google-plus-square"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i
                        className="fa fa-linkedin-square"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i
                        className="fa fa-pinterest-square"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-tumblr-square" aria-hidden="true"></i>
                    </a>
                  </li>
                </ul> */}
              </div>
            </div>
            <div className="job-details-info">
              <div className="row">
                <div className="col-sm-8">
                  <div className="section job-description">
                    <div className="description-info">
                      <h1>Description</h1>
                      <p>
                        <span>{job?.description}</span>
                      </p>
                      <p>
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo. Nemo
                        enim ipsam voluptatem quia voluptas sit aspernatur aut
                        odit aut fugit, sed quia consequuntur magni।
                      </p>
                    </div>
                    {/* <div className="responsibilities">
                      <h1>Key Responsibilities:</h1>
                      <p>
                        -Execute all visual design stages of website design from
                        concept to final hand-off to development-Create print
                        advertisements, social media advertisements, client
                        collateral & digital resizes according to Client demands
                        With direction of the Creative team, input into new
                        design ideas for client branding-Update & keep all
                        agency collateral materials, including keeping records
                        of Client's logos, fonts, images, etc.{" "}
                      </p>
                    </div>
                    <div className="requirements">
                      <h1>Minimum Requirements</h1>
                      <ul>
                        <li>Bachelor's Degree</li>
                        <li>
                          2-5 years of relevant experience ( or equivalent
                          educational experience)
                        </li>
                        <li>
                          Experience developing in Wordpress and other web
                          design platforms
                        </li>
                        <li>HTML, CSS and JavaScript experience a plus</li>
                        <li>
                          In depth knowledge & technical experience of
                          Photoshop, Illustrator, InDesign, Adobe PDF, Keynote,
                          PowerPoint, Microsoft Word & Excel
                        </li>
                        <li>
                          Exceptional eye for design, deep understanding of
                          creativity and ability to recognize fresh approaches
                          to Advertising{" "}
                        </li>
                        <li>
                          Must be fluent in Spanish; working written and spoken
                          proficiency
                        </li>
                        <li>
                          **All applicants must be eligible to work in the U.S.
                          without sponsorship
                        </li>
                      </ul>
                    </div> */}
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="section job-short-info">
                    <h1>Short Info</h1>
                    <ul>
                      <li>
                        <span className="icon">
                          <i className="fa fa-bolt" aria-hidden="true"></i>
                        </span>
                        Posted: {job?.created_at}
                      </li>
                      <li>
                        <span className="icon">
                          <i className="fa fa-user-plus" aria-hidden="true"></i>
                        </span>{" "}
                        Job poster: <a href="#"> {job?.created_by}</a>
                      </li>
                      <li>
                        <span className="icon">
                          <i className="fa fa-industry" aria-hidden="true"></i>
                        </span>
                        Industry: <a href="#"> {job?.category}</a>
                      </li>
                      <li>
                        <span className="icon">
                          <i
                            className="fa fa-line-chart"
                            aria-hidden="true"
                          ></i>
                        </span>
                        Experience: <a href="#"> {job?.employment_type}</a>
                      </li>
                      <li>
                        <span className="icon">
                          <i className="fa fa-key" aria-hidden="true"></i>
                        </span>
                        Job function: {job?.title}
                      </li>
                    </ul>
                  </div>
                  <div className="section company-info">
                    <h1>Company Info</h1>
                    <ul>
                      <li>
                        Compnay Name: <a href="#"> {job?.company_name}</a>
                      </li>
                      <li>Address: {job?.address}</li>
                      {/* <li>Compnay SIze: 2k Employee</li> */}
                      <li>
                        Industry: <a href="#"> {job?.category}</a>
                      </li>
                      <li>Phone: {job?.telephone}</li>
                      <li>
                        Email:{" "}
                        <a href="#">
                          <span
                            className="__cf_email__"
                            data-cfemail="0960676f66496d7b66796b6671276a6664"
                          >
                            {job?.email}
                          </span>
                        </a>
                      </li>
                      <li>
                        Website: <a href="#"> {job?.website}</a>
                      </li>
                    </ul>
                    {/* <ul className="share-social">
                      <li>
                        <a href="#">
                          <i
                            className="fa fa-facebook-official"
                            aria-hidden="true"
                          ></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i
                            className="fa fa-twitter-square"
                            aria-hidden="true"
                          ></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i
                            className="fa fa-google-plus-square"
                            aria-hidden="true"
                          ></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i
                            className="fa fa-linkedin-square"
                            aria-hidden="true"
                          ></i>
                        </a>
                      </li>
                    </ul> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="something-sell" className="clearfix parallax-section">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 text-center">
              <h2 className="title">
                Add your resume and let your next job find you.
              </h2>
              <h4>
                Post your Resume for free on <a href="#">Jobs.com</a>
              </h4>
              <a href="post-resume.html" className="btn btn-primary">
                Add Your Resume
              </a>
            </div>
          </div>
        </div>
      </section>
    </Template>
  );
}

export default JobDetails;
