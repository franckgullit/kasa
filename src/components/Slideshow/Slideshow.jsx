import React, { useState } from 'react';
import './Slideshow.scss';


function Slideshow({ pictures }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === pictures.length - 1 ? 0  : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className='slideshow_container'>
            <i className='fa-solid fa-chevron-left' onClick={prevSlide}></i>
            <img src={pictures[currentIndex]} alt='current_slide_image'className='slide-image' />
            <i className='fa-solid fa-chevron-right' onClick={nextSlide}></i>
        </div>
    );
}

export default Slideshow;