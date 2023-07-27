import axios from 'axios';
import AdminPanel from '../layout/AdminPanel';
import { useState, useEffect } from 'react';

export default function admin() {

  const token = localStorage.getItem('token');
  
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };
  
  if(!token){
    axios.get('http://localhost:8081/api/v1/getUser', config).then((response) => {
       if(response.data.role === 'ADMIN')
       return(
         <div>
         <AdminPanel/>
         </div>
       )   
    }).catch((error) =>{
      console.log('You dont have permission',error);
      window.location.replace('/');
    })
  }
}
