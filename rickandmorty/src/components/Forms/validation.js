export default(data) =>{
    let errors ={};
    if(!data.email.includes('@')){
        errors.el ='El formato del mail es invalido';
    }

    if (!data.email){
        errors.el2 = 'Ingrese Email';
    }

    if (data.email.length > 35){
        errors.el3= 'El email debe tener hasta 35 caracteres'
    }

    if(!/\d/.test(data.password)){
        errors.p1 = 'Al menos debe contener un numero'
    }

    if (data.password.length < 6 || data.password.length > 10){
        errors.p2 = 'Al menos debe contener 6 caracteres y menor a 10'
    }

    return errors
};