import React from "react";
import HomeBannerPic from '../../assets/DesktopHomeBanner.png';
import './Banner.scss';

function Banner() {
  return (
    <div className="homebanner">
      <img src={HomeBannerPic} alt="homebanner_pic" />
      <h1 className="banner-text">Chez vous, partout et ailleurs</h1>
    </div>
  );
}

export default Banner;