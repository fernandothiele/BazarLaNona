import React  from 'react';

export default function Logout(){
    
    function cerrar(){
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('tipo_cuenta');
        window.location.href = '';
    }
   
    return (
        <>
        <button onClick={cerrar} id='cerrar_session'>Cerrar Session</button>
        </>
    )
}
