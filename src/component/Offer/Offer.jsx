import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import scss from "./Offer.module.scss";
import next_a from "../../assets/next_a.svg";
import next_b from "../../assets/next_b.svg";
import banner from "../../assets/banner_7.svg";
import banner_a from "../../assets/banner_8.svg";
import banner_b from "../../assets/banner_9.svg";

const images = [banner, banner_a, banner_b,banner_a,];

const Offer = () => {
  const sliderRef = useRef(null);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true, 
    autoplaySpeed: 2500, 
    pauseOnHover: true, 
    responsive: [
      {
        breakpoint: 875,
        settings: {
          slidesToShow: 3,
          variableWidth: false, 
        },
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 3,
          variableWidth: false, 
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          variableWidth: false,
        },
      },
      {
        breakpoint: 360,
        settings: {
          slidesToShow: 1,
          variableWidth: false,
        },
      },
    ],
  };

  const nextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const prevSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  return (
    <section className={scss.Offer}>
      <div className={scss.container}>
        <div className={scss.logo}>
          <h1>
            ПРЕДЛОЖЕНИЯ <br /> ОТ КОМПАНИИ
          </h1>
          <hr />
        </div>
        <Slider ref={sliderRef} {...settings} className={scss.reklam}>
          {images.map((img, index) => (
            <div key={index}>
              <img
                className={scss.reklamo}
                src={img}
                alt={`Offer ${index + 1}`}
              />
            </div>
          ))}
        </Slider>
        <div className={scss.next}>
          <button className={scss.b} onClick={prevSlide}>
            <img src={next_b} alt="Previous" />
          </button>
          <button className={scss.a} onClick={nextSlide}>
            <img src={next_a} alt="Next" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Offer;
