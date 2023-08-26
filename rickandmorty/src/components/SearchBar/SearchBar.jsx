import style from './SearchBar.module.css';
import { useState } from 'react';

const SearchBar=({onSearch})=> {
   const [id,setId] = useState('');

   const handleChange = (event) => { //funcion que setea el estado
      setId(event.target.value) //valor que se escribio.
   };

   return (
      <div className={style.contenedor}>
        

         <input className={style.input}type='search' value={id} onChange={handleChange} />
         <button className={style.btn} onClick={()=>onSearch(id)}>Agregar</button>
         
      </div>
   );
}

export default SearchBar;