import './Card.scss';
import '../../data/logements.json';

function Card (props) {
    return(
        <div className="cardInfo">
            <img src={props.cover} alt="cardImg" className="CardImage" />
            <p className="CardTitle">{props.title}</p>
        </div>
    )
}

export default Card