import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import steel from '../../assets/flowers/steel__seria.jpg'
import stone from '../../assets/flowers/stone__seria.jpg'
import wood from '../../assets/flowers/wood__seria.jpg'

import './Slider.css'

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      pauseOnHover: true
    };
    return (
      <div className="slider">
        <Slider {...settings}>
          <div className="slider__image__block"><img className="slider__image" src={steel} alt="" /></div>
          <div className="slider__image__block"><img className="slider__image" src={stone} alt="" /></div>
          <div className="slider__image__block"><img className="slider__image" src={wood} alt="" /></div>
        </Slider>
      </div>
    );
  }
}
