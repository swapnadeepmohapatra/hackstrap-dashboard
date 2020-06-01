import React, { Component } from "react";
import Slider from "react-slick";
import "./stls.css";

export default class Caros extends Component {
  render() {
    const items = ["Startup or Comapny", "Investor", "People", "Incubator"];
    var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className="entrySubmList">
        <Slider {...settings}>
          {items.map(function (item, i) {
            return (
              <li ref={i} className="btn">
                <button>{item}</button>
              </li>
            );
          })}
        </Slider>
      </div>
    );
  }
}
