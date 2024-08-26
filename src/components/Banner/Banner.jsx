import React from "react";
import './Banner.scss';

function Banner(props) {
  return (
    <div className="banner">
      <img src={props.bannerImage} alt="banner_pic" />
      <div className='background'>
        <h1>{props.children}</h1>
      </div>
    </div>
  );
}

export default Banner;