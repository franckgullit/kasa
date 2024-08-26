import React from 'react';

function Tags({data}) {
    return(
        <div className='tags_container'>
                        {data.tags.map((tag, index) => (
                            <span key={`${tag} - ${index}`} className='tag'>{tag}</span>
                        ))}
                    </div>
    )
}

export default Tags