import React, { useState } from 'react';
import './Slideshow.scss';


function Slideshow({ pictures }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
        );

    };

    return (
        <div className='slideshow_container'>
            <img src={pictures[currentIndex]} alt='current_slide_image' className='slide-image' />

            {pictures.length > 1 && (
                <>  <i className='fa-solid fa-chevron-left' onClick={prevSlide}></i>
                    <i className='fa-solid fa-chevron-right' onClick={nextSlide}></i>
                    <p className='imgslide_number'>{`${currentIndex + 1}/${pictures.length}`}</p>
                </>
            )}
        </div>

    );
}

export default Slideshow;