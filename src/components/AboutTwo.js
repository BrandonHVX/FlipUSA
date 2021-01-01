import React, { Component } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import about1 from "../assets/images/about-1-1.jpg";
export default class AboutTwo extends Component {
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
      <section className="about-two">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="about-two__content">
                <div className="block-title text-left">
                  <h2 className="block-title__title">
                    Real Estate
                    <br />
                    Investment Community
                  </h2>
                </div>
                <p className="about-two__text">
                  Focusing on enhancing neighborhoods by developing safe and
                  quality homes while creating an enjoyable and prosperous
                  buying experience.
                </p>
                <div className="about-two__single-wrap">
                  <div className="about-two__single">
                    <div className="about-two__single-icon">
                      <i className="kipso-icon-professor"></i>
                    </div>
                    <div className="about-two__single-content">
                      <p className="about-two__single-text">
                        Expert real estate professinals
                      </p>
                    </div>
                  </div>
                  <div className="about-two__single">
                    <div className="about-two__single-icon">
                      <i className="kipso-icon-knowledge"></i>
                    </div>
                    <div className="about-two__single-content">
                      <p className="about-two__single-text">
                        Great investment opportunities
                      </p>
                    </div>
                  </div>
                </div>
                <a href="#none" className="thm-btn">
                  Learn More
                </a>
              </div>
            </div>
            <div className="col-xl-6 d-flex justify-content-xl-end justify-content-sm-center">
              <div className="about-two__image">
                <span className="about-two__image-dots"></span>
                <img src={about1} alt="" />
                <div className="about-two__count">
                  <div className="about-two__count-text">
                    Properties Sold
                    <span className="counter">
                      <VisibilitySensor
                        onChange={this.onVisibilityChange}
                        offset={{ top: 10 }}
                        delayedCall
                      >
                        <CountUp end={this.state.startCounter ? 4890 : 0} />
                      </VisibilitySensor>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
