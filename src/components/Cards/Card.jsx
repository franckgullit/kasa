import './Card.scss';
import '../../data/logements.json';
import { useNavigate } from 'react-router-dom';

function Card(props) {
  const navigate = useNavigate();

  const ImageClick = () => {
    navigate(`/Logements/${props.id}`);
  };
  return (
    <div className="cardInfo" onClick={ImageClick}>
      <img src={props.cover} alt="cardImg" className="CardImage" />
      <div className="CardTitle">
        <p >{props.title}</p>
      </div>
    </div>
  )
}

export default Card