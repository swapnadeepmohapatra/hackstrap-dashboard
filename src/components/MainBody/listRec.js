import React, { Component } from "react";
import Slider from "react-slick";
import "./stls.css";

export default class Caros extends Component {
  render() {
    const items = [
      "https://firebasestorage.googleapis.com/v0/b/field-scan.appspot.com/o/Annotation%202020-05-27%20224900.png?alt=media&token=eee1cf2d-f55d-4bd0-869d-56fbdc3c13c4",
      "https://firebasestorage.googleapis.com/v0/b/field-scan.appspot.com/o/Annotation%202020-06-01%20185604.png?alt=media&token=fe140bd7-9c8e-43a3-b933-98b70cbac462",
    ];
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
              <li ref={i}>
                <img className="img-cards" src={item} alt="" />
              </li>
            );
          })}
        </Slider>
      </div>
    );
  }
}
