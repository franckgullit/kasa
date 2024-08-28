import React, { useState } from 'react';
import './Collapse.scss';

function Collapse(props) {
    const [isCollapsed, setIsCollapsed] = useState(true);

    return isCollapsed ? (
        <div className='collapse_menu'>
            <button onClick={() => setIsCollapsed(false)}>
                <h2>{props.title}</h2>
                <i className="fa-solid fa-chevron-up"></i>
            </button>
        </div>
    ) : (
        <div className='collapsed_menu'>
        <><button onClick={() => setIsCollapsed(true)}>
            <h2>{props.title}</h2>
            <i className="fa-solid fa-chevron-down"></i>
        </button>
            <div className='collapsed_content'><p>{props.content}</p></div>
        </>
        </div>
    )
}

export default Collapse