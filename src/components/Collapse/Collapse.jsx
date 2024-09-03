import React, { useState } from 'react'; 
import './Collapse.scss'; 

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false); 

  const toggleCollapse = () => {
    setIsOpen(!isOpen); 
  };

  return (
    <div className={`collapse ${isOpen ? 'open' : ''}`}> 
      <div className="collapse_header" onClick={toggleCollapse}> 
        <h2>{title}</h2> 
        <i className={`chevron_icon fa-solid fa-chevron-up ${isOpen ? 'open' : ''}`}></i> 
      </div>
      <div className={`collapse_content ${isOpen ? 'open' : ''}`}> 
        {content} 
      </div>
    </div>
  );
}

export default Collapse; 