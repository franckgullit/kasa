import React from 'react';
import AproposBannerPic from '../../assets/DesktopAproposBanner.png';
import './AproposBanner.scss';


function AproposBanner() {
    return (
        <div className="proposbanner">
            <img src={AproposBannerPic} alt="proposbanner_pic" />
        </div>
    );
}

export default AproposBanner