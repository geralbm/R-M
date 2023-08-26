
import { useEffect } from "react";
import { useState } from "react";
import validation from "./validation";


const Forms = ({login})=>{

    const [userData, setUserData] = useState({
        email:'',
        password:''
    });

    const handlerSubmit = (event)=>{
        event.preventDefault();
        login(userData)
    };
   
    const handleChange= (event)=> {
        setErrors(validation({...userData, [event.target.name]: event.target.value}))
        setUserData ({ ...userData,[event.target.name]: event.target.value})
    };

    const [errors, setErrors] = useState({

    });
    
    return (
       <div>
            <form>
            {/* Email */}
            <label htmlFor="email">Email: </label>
            <input 
                onChange={handleChange} 
                value={userData.email}
                type="text" 
                name ="email" 
                placeholder="Ingrese email"
            />
            {/* Validacion de inputs del email - Errors */}
            {errors.el ? (<p>{errors.el}</p>)
                :errors.el2 ? (<p>{errors.el2}</p>) 
                : (<p>{errors.el3}</p>)
            }

            
             {/* Password */}
             <label htmlFor="password">Password: </label>
            <input 
                onChange={handleChange}
                value={userData.password}
                type="text" name ="password" 
                placeholder="Ingrese password"
            />
        
             {/* Validacion de inputs del Password - Errors */}
             {
                errors.p1 ? (<p>{errors.p1}</p>) : (<p>{errors.p2}</p>) 
             }
            
        
            <br />
            {/* Boton enviar info. */}
            <button onClick={handlerSubmit}type="submit">Submit</button>

           
            
           

            </form>

       </div>
    )
};

export default Forms;