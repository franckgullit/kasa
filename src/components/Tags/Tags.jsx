import React from 'react';
import'./Tags.scss';

function Tags({data}) {
    return(
        <div className='tags_container'>
                        {data.tags.map((tag, index) => (
                            <button key={`${tag} - ${index}`} className='tag'>{tag}</button>
                        ))}
                    </div>
    )
}

export default Tags