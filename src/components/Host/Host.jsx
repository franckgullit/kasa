import React from 'react';


function Host(props) {
    return (
        <div className='host_container'>
            <div className='identity'>
                <p className='name'>{props.host.name}</p>
                <img src={props.host.picture} alt='host_pic' className='host_face' />
            </div>
            <div className='star_rating'>
                <span>{props.rating}<i className="fa-solid fa-star"></i></span>
            </div>
        </div>
    )
}

export default Host