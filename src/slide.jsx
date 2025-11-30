import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageCardSlider = () => {

  const images = [
    { src: "/bsDegineTop2.jpg"},
    { src: "/circul.jpg", },
    { src: "/image-1.jpg", },
    { src: "/SustainableDegine.jpg", },
    { src: "/bsDegineTop.jpg", },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    centerMode: true,
    centerPadding: "0px",
    arrows: false,
    responsive: [
      {
        breakpoint: 1024, // tablet
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640, // mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full py-10 flex justify-center bg-gray-100">
      <div className="w-[95%] sm:w-[85%] md:w-[70%]">
        <Slider {...settings}>
          {images.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="p-2"
            >
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-44 sm:h-52 object-cover"
                />
                <div className="p-3 text-center">
                  <h3 className="text-base font-semibold text-gray-800">
                    {item.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ImageCardSlider;
