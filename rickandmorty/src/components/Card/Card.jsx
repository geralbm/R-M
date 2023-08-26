
import {Link} from 'react-router-dom';
import style from './card.module.css';
const Card = ({id, name, status,species,gender,origin,image,onClose})=> {

   return (
      <div className={style.contenedor}>
      
         <Link to={`/detail/${id}`}>
            <button className={style.btn} onClick={()=>{onClose(id)}}>X</button>
            <h2>Name: {name}</h2>
            <h2>Status: {status}</h2>
            <h2>Species: {species}</h2>
            <h2>Gender: {gender}</h2>
            <h2>Origin: {origin}</h2>
            <img className={style.image}src={image} alt= {name}  />
         </Link>
         
      </div>
   );
}

export default Card;