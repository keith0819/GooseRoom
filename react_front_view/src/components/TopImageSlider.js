import React from "react";
import Slider from "react-slick";
import ImageCard from "./ImageCard";

class TopImageSlider extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      centerPadding: 0,
      centerMode: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            initialSlide: 3
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          }
        }
      ]
    }
    

    return (
      <div className="top-image-slider">
        <Slider {...settings}>
          <div className="item">
          <img width="100px" src={require('../images/one.jpg')} className="image-card" />
          <p className="box-card">Vancouver</p>
          </div>
          <div className="item">
          <img src={require('../images/one.jpg')} className="image-card" />
          <p className="box-card">Burnavy</p>
          </div>
          <div className="item">
          <img src={require('../images/one.jpg')} className="image-card" />
          <p className="box-card">Richmond</p>
          </div>
          <div className="item">
          <img src={require('../images/one.jpg')} className="image-card" />
          <p className="box-card">Surrey</p>
          </div>
          <div className="item">
          <img src={require('../images/north-shore.jpg')} className="image-card" />
          <p className="box-card">North shore</p>
          </div>
        </Slider>
      </div>
    );
  }
}

export default TopImageSlider