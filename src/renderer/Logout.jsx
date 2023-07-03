import React  from 'react';

export default function Logout(){
    localStorage.removeItem('token');
    window.location.href = '';
   
    return (
        <div>
            <p>Logging out...</p>
        </div>
    )
}
