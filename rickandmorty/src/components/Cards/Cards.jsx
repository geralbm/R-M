import Card from '../Card/Card';
import style from './Cards.module.css';
const Cards = ({characters, onClose}) => {
   
   return (
   <div className={style.contenedor}>
      {
        characters.map (chara => {
         return <Card
         id={chara.id}
         key={chara.id}
         name={chara.name}
         status={chara.status}
         species={chara.species}
         gender={chara.gender}
         origin={chara.origin.name}
         image={chara.image}
         onClose={onClose}
       
         
         />
        }

        )
      }
      
   </div>
   )
}

export default Cards;