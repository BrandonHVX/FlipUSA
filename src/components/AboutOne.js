import React, { Component } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import ClientStripe from "../assets/images/circle-stripe.png";
import aboutImage1 from "../assets/images/home-about.jpg";
import aboutImage2 from "../assets/images/deal-about.jpg";

class AboutOne extends Component {
  constructor() {
    super();
    this.state = {
      startCounter: false
    };
  }

  onVisibilityChange = isVisible => {
    if (isVisible) {
      this.setState({ startCounter: true });
    }
  };

  render() {
    return (
      <section className="about-one ">
        <img src={ClientStripe} className="about-one__circle" alt="" />
        <div className="container text-center">
          <div className="block-title text-center">
            <h2 className="block-title__title">
              Real Estate
              <br />
              Investment Community
            </h2>
          </div>
          <div className="about-one__img">
            <div className="row">
              <div className="col-lg-6">
                <img src={aboutImage1} alt="" />
              </div>
              <div className="col-lg-6">
                <img src={aboutImage2} alt="" />
              </div>
            </div>
            <div className="about-one__review">
              <p className="about-one__review-count counter">
                <VisibilitySensor
                  onChange={this.onVisibilityChange}
                  offset={{ top: 10 }}
                  delayedCall
                >
                  <CountUp end={this.state.startCounter ? 88750 : 0} />
                </VisibilitySensor>
              </p>
              <div className="about-one__review-stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <p className="about-one__review-text">properties sold</p>
            </div>
          </div>
          <p className="about-one__text">
            Focusing on enhancing neighborhoods by developing safe and quality
            homes while creating an enjoyable and prosperous buying experience.
          </p>
          <a href="#none" className="thm-btn about-one__btn">
            Get Started
          </a>
        </div>
      </section>
    );
  }
}

export default AboutOne;
