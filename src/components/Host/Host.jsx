import React from 'react';


function Host({ data }) {
    return (
        <div className='host_container'>
            <div className='host_identity'>
                <p className='name'>{data.host.name}</p>
                <img src={data.host.picture} alt='host_pic' className='host_face' />
            </div>
            <div className="star_rating" >
                {Array.from({length: 5}, (i, index) => {
                    const starClass = index < data.rating ? 'filled' : 'empty';
                    const starClasses = `fa-solid fa-star ${starClass}`;
                    return <i key={index} className={starClasses}></i>;
                })}
            </div>
        </div>
    )
}

export default Host