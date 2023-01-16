import React from "react";
import Slider from "react-slick";

const FeaturedSlide = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const meditations = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <Slider {...settings}>
      {meditations.map((m, i) => {
        return (
          <div className="meditation-img" key={i}>
            <img src={`/img/medi${m}.png`} alt={`meditate${m}`} />
          </div>
        );
      })}
    </Slider>
  );
};

export default FeaturedSlide;
