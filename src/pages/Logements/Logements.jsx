import React from 'react';
import Collapse from '../../components/Collapse/Collapse.jsx';
import Slideshow from '../../components/Slideshow/Slideshow.jsx';
import Host from '../../components/Host/Host.jsx';
import '../../data/logements.json';


function Logements(props) {
    return (
        <><div className='Slideshow'>
            <Slideshow />
        </div>
            <div className='Logement_Info'>
                <div className='info'>
                    <p className='title'>{props.title}</p>
                    <p className='location'>{props.location}</p>
                    <div className='tags'>
                        {props.tags.map((tag, index) => (
                            <span key={index} className='tag'>{tag}</span>
                        ))}
                    </div>
                </div>
                <div className='Host'>
                    <Host />
                </div>
                <div className='description_equipements'>
                    <Collapse title="Description" content={<p>{props.description}</p>} />
                    <Collapse title="Équipements" content={<ul>
                        {props.equipments.map((equipment, index) => (
                            <li key={index}>{equipment}</li>
                        ))}
                    </ul>} />
                </div>
            </div></>
    )
}

export default Logements