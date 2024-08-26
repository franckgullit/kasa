import React from 'react';
import Collapse from '../../components/Collapse/Collapse.jsx';
import Slideshow from '../../components/Slideshow/Slideshow.jsx';
import Host from '../../components/Host/Host.jsx';
import Tags from'../../components/Tags/Tags.jsx';
import logements from '../../data/logements.json';
import { useParams } from 'react-router-dom';


function Logements() {
    const { id } = useParams();
    const logement = logements.find((data) => data.id === id)
    return (
        <><div className='Slideshow'>
            <Slideshow pictures={logement.pictures} />
        </div>
            <div className='Logement_Info'>
                <div className='info'>
                    <p className='title'>{logement.title}</p>
                    <p className='location'>{logement.location}</p>
                    <div className='tagss'>
                        <Tags data={logement} />
                    </div>
                </div>
                <div className='Host'>
                    <Host data={logement} />
                </div>
                <div className='description_equipements'>
                    <Collapse title="Description" content={<p>{logement.description}</p>} />
                    <Collapse title="Équipements" content={<ul>
                        {logement.equipments.map((equipment, index) => (
                            <li key={`${equipment} - ${index}`} >{equipment}</li>
                        ))}
                    </ul>} />
                </div>
            </div></>
    )
}

export default Logements