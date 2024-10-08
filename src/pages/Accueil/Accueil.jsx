import React from 'react'
import Banner from '../../components/Banner/Banner.jsx';
import HomeBannerPic from '../../assets/DesktopHomeBanner.png';
import logements from '../../data/logements.json';
import Card from '../../components/Cards/Card.jsx';
import './Accueil.scss';


function Accueil() {
    return (
        <div>
            <div>
                <Banner bannerImage={HomeBannerPic} alt="Home Banner Pic"> Chez vous, partout et ailleurs</Banner>
            </div>
            <div className="cardContainer">
                {
                    logements.map((logement) =>
                        <Card
                            key={logement.id}
                            id={logement.id}
                            title={logement.title}
                            cover={logement.cover}
                        />
                    )
                }
            </div>
        </div>
    )
}

export default Accueil