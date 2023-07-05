import React  from 'react';

export default function Logout(){
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('tipo_cuenta');
    window.location.href = '';
   
    return (
        <div>
            <p>Logging out...</p>
        </div>
    )
}
