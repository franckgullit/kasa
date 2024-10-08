import React from 'react';
import AproposBannerPic from '../../assets/DesktopAproposBanner.png';
import Banner from '../../components/Banner/Banner.jsx';
import Collapse from '../../components/Collapse/Collapse.jsx';
import './Apropos.scss';


function Apropos() {
    return (
        <>
            <div className='Apropos_body'>
                <div className='Apropos_banner'>
                    <Banner bannerImage={AproposBannerPic} alt='Apropos_banner_pic'></Banner>
                </div><div className='dropdown_menus'>
                    <Collapse className='apropos_content' title="Fiabilité" content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes." />
                    <Collapse className='apropos_content' title="Respect" content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." />
                    <Collapse className='apropos_content' title="Service" content="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question." />
                    <Collapse className='apropos_content' title="Sécurité" content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes." />
                </div></div></>

    )
}

export default Apropos