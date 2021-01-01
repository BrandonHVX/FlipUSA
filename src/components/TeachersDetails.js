import React from "react";
import certificate1 from "../assets/images/certificate-1-1.png";
import certificate2 from "../assets/images/certificate-1-2.png";
import teamd1 from "../assets/images/hibb.png";

const TeachersDetails = () => {
  return (
    <section className="team-details ">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-5">
            <div className="team-details__content">
              <h2 className="team-details__title">
                Benefits of learning with Flip USA
              </h2>
              <p className="team-details__text">
                Lorem Ipsum is simply dummy text of the printing and type
                industry. Lorem Ipsum has been the standard dummy text ever
                since the when an unknown was popularised. It has survived not
                only five centuries, but also the leap into electronic
                typesetting remaining unchanged.
              </p>
              <div className="team-details__single-wrap">
                <div className="team-details__single">
                  <i className="kipso-icon-strategy"></i>
                  <p className="team-details__single-text">
                    Professional Courses
                  </p>
                </div>
                <div className="team-details__single">
                  <i className="kipso-icon-training"></i>
                  <p className="team-details__single-text">Live Learning</p>
                </div>

                <div className="team-details__single">
                  <i className="kipso-icon-human-resources"></i>
                  <p className="team-details__single-text">Expert Teachers</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="team-one__single">
              <div className="team-one__image">
                <img src={teamd1} alt="" />
              </div>
              <div className="team-one__content">
                <h2 className="team-one__name">
                  <a href="/team-details">Derrick Hibbler</a>
                </h2>
                <p className="team-one__designation">
                  Real Estate Entrepreneur
                </p>
              </div>
              <div className="team-one__social">
                <a href="#none">
                  <i className="fab fa-twitter "></i>
                </a>
                <a href="#none">
                  <i className="fab fa-facebook-square "></i>
                </a>
                <a href="#none">
                  <i className="fab fa-pinterest-p"></i>
                </a>
                <a href="#none">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeachersDetails;
