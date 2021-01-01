import React from "react";
import footer1 from "../assets/images/footer-1-1.png";
import footer2 from "../assets/images/footer-1-2.png";
import footer3 from "../assets/images/footer-1-3.png";
import footer4 from "../assets/images/footer-1-4.png";
import footer5 from "../assets/images/footer-1-5.png";
import footer6 from "../assets/images/footer-1-6.png";

const Footer = () => {
  function scrollTop() {
    window.scrollTo(0, 0);
  }
  return (
    <div>
      <footer className="site-footer">
        <div className="site-footer__upper">
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-lg-6 col-sm-12">
                <div className="footer-widget footer-widget__contact">
                  <h2 className="footer-widget__title">Courses</h2>
                  <ul className="list-unstyled footer-widget__course-list">
                    <li>
                      <h2>
                        <a href="course-details.html">
                          Introduction Real Estate
                        </a>
                      </h2>
                      <p>Derrick Hibbler</p>
                    </li>
                    <li>
                      <h2>
                        <a href="course-details.html">
                          {" "}
                          Learning Property Management{" "}
                        </a>
                      </h2>
                      <p>Derrick Hibbler</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-sm-12">
                <div className="footer-widget footer-widget__link">
                  <h2 className="footer-widget__title">Explore</h2>
                  <div className="footer-widget__link-wrap">
                    <ul className="list-unstyled footer-widget__link-list">
                      <li>
                        <a href="#none">Properties</a>
                      </li>
                      <li>
                        <a href="#none">Overview</a>
                      </li>
                      <li>
                        <a href="#none">Courses</a>
                      </li>
                      <li>
                        <a href="#none">News</a>
                      </li>
                      <li>
                        <a href="#none">Videos</a>
                      </li>
                    </ul>
                    <ul className="list-unstyled footer-widget__link-list">
                      <li>
                        <a href="#none">Help </a>
                      </li>
                      <li>
                        <a href="#none">Contact</a>
                      </li>
                      <li>
                        <a href="#none">Register Now</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-sm-12"></div>
              <div className="col-xl-3 col-lg-6 col-sm-12">
                <div className="footer-widget footer-widget__about">
                  <h2 className="footer-widget__title">About</h2>
                  <p className="footer-widget__text">
                    Lorem ipsum dolor sit ametcon, sectetur adipiscing elit.
                    Phasellus vehic sagittis euismod.
                  </p>
                  <div className="footer-widget__btn-block">
                    <a href="#none" className="thm-btn">
                      Contact
                    </a>
                    <a href="#none" className="thm-btn">
                      Purchase
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="site-footer__bottom">
          <div className="container">
            <p className="site-footer__copy">
              &copy; Copyright 2020 by <a href="#none">Flip USA</a>
            </p>
            <div className="site-footer__social">
              <div
                onClick={scrollTop}
                onKeyDown={scrollTop}
                role="button"
                tabIndex={0}
                className="scroll-to-target site-footer__scroll-top"
              >
                <i className="kipso-icon-top-arrow"></i>
              </div>

              <a href="#none">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#none">
                <i className="fab fa-facebook-square"></i>
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
      </footer>

      <div className="search-popup">
        <div className="search-popup__overlay custom-cursor__overlay search-overlay"></div>
        <div className="search-popup__inner">
          <form action="#" className="search-popup__form">
            <input
              type="text"
              name="search"
              placeholder="Type here to Search...."
            />
            <button type="submit">
              <i className="kipso-icon-magnifying-glass"></i>
            </button>
            <div className="cancel"></div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Footer;
