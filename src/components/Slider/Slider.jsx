import React from "react";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import './Slider.scss'

const Slider = () => {
  return (
    <div className="slider">
      <Splide
        className="my-carousel"
        options={{
          width: "100%",
          height: "100%",
          gap: "1rem",
        }}
        aria-label="Show Views"
        hasTrack={false}
      >
        <SplideTrack>
          <SplideSlide>
            <img src="https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1" alt="" />
          </SplideSlide>
          <SplideSlide>
          <img src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1" alt="" />
          </SplideSlide>
          <SplideSlide>
          
          </SplideSlide>
        </SplideTrack>
        <div className="splide__arrows">
          <button className="splide__arrow splide__arrow--prev">Prev</button>
          <button className="splide__arrow splide__arrow--next">Next</button>
        </div>
      </Splide>
    </div>
  );
};

export default Slider;
