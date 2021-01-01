import React from "react";
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";
import course1 from "../assets/images/course-1.jpg";
import course2 from "../assets/images/course-2.jpg";
import course3 from "../assets/images/course-3.jpg";
import course4 from "../assets/images/course-2.jpg";

import team1 from "../assets/images/team-1-1.jpg";
import team2 from "../assets/images/team-1-2.jpg";
import team3 from "../assets/images/team-1-3.jpg";
import team4 from "../assets/images/team-1-4.jpg";
import team5 from "../assets/images/team-1-5.jpg";
import team6 from "../assets/images/team-1-6.jpg";

const CourseOne = () => {
  const params = {
    slidesPerView: 3,
    loop: true,
    speed: 1000,
    spaceBetween: 30,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },

    // Responsive breakpoints
    breakpoints: {
      1024: {
        slidesPerView: 3
      },
      768: {
        slidesPerView: 2
      },
      640: {
        slidesPerView: 2
      },
      320: {
        slidesPerView: 1
      }
    }
  };
  return (
    <div>
      <section className="property-one__top-title home-one">
        <div className="container">
          <div className="block-title mb-0">
            <h2 className="block-title__title">
              Explore our <br />
              Properties
            </h2>
          </div>
        </div>
        <div className="property-one__top-title__curve"></div>
      </section>

      <section className="property-one property-one__teacher-details home-one">
        <div className="container">
          <div className="property-one__carousel">
            <Swiper {...params}>
              <div className="item">
                <div className="property-one__single for-sale">
                  <div className="property-one__image">
                    <img src={course1} alt="" />
                    <i className="far fa-heart"></i>
                  </div>
                  <div className="property-one__content">
                    <a href="#none" className="property-one__category">
                      For Sale
                    </a>
                    <div className="property-one__admin"></div>
                    <h2 className="property-one__title">
                      <a href="/">222 Tucker Street</a>
                    </h2>
                    <div className="property-one__stars">
                      <span className="property-one__stars-wrap">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                      </span>
                      <span className="property-one__count">4.8</span>
                      <span className="property-one__stars-count">250</span>
                    </div>
                    <div className="property-one__meta">
                      <a href="/">
                        <i className="fas fa-bed"></i> 2 Bed
                      </a>
                      <a href="/">
                        <i className="fas fa-bath"></i> 3 Bath
                      </a>
                      <a href="/">1,232 sf</a>
                    </div>
                    <a href="#none" className="property-one__link">
                      See Preview
                    </a>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="property-one__single sold">
                  <div className="property-one__image">
                    <img src={course2} alt="" />
                    <i className="far fa-heart"></i>
                  </div>
                  <div className="property-one__content">
                    <a href="#none" className="property-one__category">
                      Sold
                    </a>
                    <div className="property-one__admin"></div>
                    <h2 className="property-one__title">
                      <a href="/">222 Washington Street</a>
                    </h2>
                    <div className="property-one__stars">
                      <span className="property-one__stars-wrap">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                      </span>
                      <span className="property-one__count">4.8</span>
                      <span className="property-one__stars-count">250</span>
                    </div>
                    <div className="property-one__meta">
                      <a href="/">
                        <i className="fas fa-bed"></i> 2 Bed
                      </a>
                      <a href="/">
                        <i className="fas fa-bath"></i> 3 Bath
                      </a>
                      <a href="/">1,200sf</a>
                    </div>
                    <a href="#none" className="property-one__link">
                      See Preview
                    </a>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="property-one__single for-sale">
                  <div className="property-one__image">
                    <img src={course3} alt="" />
                    <i className="far fa-heart"></i>
                  </div>
                  <div className="property-one__content">
                    <a href="#none" className="property-one__category">
                      For Sale
                    </a>
                    <div className="property-one__admin"></div>
                    <h2 className="property-one__title">
                      <a href="/">222 Market St</a>
                    </h2>
                    <div className="property-one__stars">
                      <span className="property-one__stars-wrap">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                      </span>
                      <span className="property-one__count">4.8</span>
                      <span className="property-one__stars-count">250</span>
                    </div>
                    <div className="property-one__meta">
                      <a href="/">
                        <i className="fas fa-bed"></i> 2 Bed
                      </a>
                      <a href="/">
                        <i className="fas fa-bath"></i> 3 Bath
                      </a>
                      <a href="/">1,200sf</a>
                    </div>
                    <a href="#none" className="property-one__link">
                      See Preview
                    </a>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="property-one__single sold">
                  <div className="property-one__image">
                    <img src={course4} alt="" />
                    <i className="far fa-heart"></i>
                  </div>
                  <div className="property-one__content">
                    <a href="#none" className="property-one__category">
                      Sold
                    </a>
                    <div className="property-one__admin"></div>
                    <h2 className="property-one__title">
                      <a href="/">222 St. Louis Ave</a>
                    </h2>
                    <div className="property-one__stars">
                      <span className="property-one__stars-wrap">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                      </span>
                      <span className="property-one__count">4.8</span>
                      <span className="property-one__stars-count">250</span>
                    </div>
                    <div className="property-one__meta">
                      <a href="/">
                        <i className="fas fa-bed"></i> 2 Bed
                      </a>
                      <a href="/">
                        <i className="fas fa-bath"></i> 3 Bath
                      </a>
                      <a href="/">1,200sf</a>
                    </div>
                    <a href="#none" className="property-one__link">
                      See Preview
                    </a>
                  </div>
                </div>
              </div>
            </Swiper>
          </div>
        </div>
      </section>
    </div>
  );
};
export default CourseOne;
