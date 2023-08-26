import {Routes, Route, useLocation, useNavigate} from 'react-router-dom';
import style from './App.module.css';
import Cards from './components/Cards/Cards';
import NavBar from './components/NavBar/NavBar';
import { useState,useEffect} from 'react';
import axios from 'axios';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Forms from './components/Forms/Forms';
const EMAIL = 'geralbm@gmail.com';
const PASSWORD = 'asd123';

function App() {

         const [characters, setCharacters] = useState([]);
         // Me traigo el path - donde esta parado el usuario
         const{pathname} =useLocation(); 

         
         const navigate = useNavigate();
         const [access, setAccess] = useState(false);
         
         
         function login(userData) {
            if (userData.password === PASSWORD && userData.email === EMAIL) {
               setAccess(true);
               navigate('/home');
            }
         };
         // No deja entrar al /home porque no hay nadie logueado
         useEffect(() => {
            !access && navigate('/');
         }, [access]);


         const onSearch = (id) =>{
            axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
               if (data.name) {
                  setCharacters((oldChars) => [...oldChars, data]);
               } else {
                  window.alert('¡No hay personajes con este ID!');
               }
            });
         };

         const onClose = (id)=>{
            setCharacters(
               characters.filter(char => {
                  return char.id !== Number(id)
               })
            )
         };

   return (
      <div className={style.App}>
         <h1 className={style.Titulo}>RICK AND MORTY</h1>

         {/* Si donde esta el usuario, es distinto a barra => mostrar el NavBar */}
         {pathname !== '/' && <NavBar onSearch={onSearch}/>}

         <Routes>
            <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>
             <Route path='/about' element={<About/>}/>
             <Route path='/detail/:id' element={<Detail/>}/>
             <Route path='/' element={<Forms login={login}/>}/>
            
         </Routes>


      </div>
   // <div className={style.App}> 
   //     <h1 className={style.Titulo}>RICK AND MORTY</h1> */
   //    <NavBar onSearch={onSearch}/>
   //    <Cards characters={characters} onClose={onClose} />
   // </div>
         
    
      
      
   );
}

export default App;
