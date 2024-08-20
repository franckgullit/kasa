import './Card.scss';
import '../../data/logements.json';

function Card (props) {
    return(
        <div className="cardInfo">
            <img src={props.cover} alt="cardImg" className="CardImage" />
            <h1 className="CardTitle">{props.title}</h1>
        </div>
    )
}

export default Card