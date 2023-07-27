import axios from 'axios';
import React from 'react';
import AdminPanel from '../layout/AdminPanel';
import { useState, useEffect } from 'react';


export default function Volunteers() {

  const [users, setUsers] = useState('');

  function User() {
    return (
      <div className="container-row border-bottom" style={{background:'#FFFFFF',width:'50%',marginTop:'5%', display:'flex', alignItems:'center'}}>
        <img src={require('/home/shungus/Рабочий стол/aurora/src/Icons/nophoto.png')} alt="Моя картинка" style={{width: '100px', height: '100px',caretColor:'transparent'}} />
        <div className='container' style={{marginLeft:'10px'}}>
          <h2 style={{textAlign:'left',fontFamily:"Livvic",fontSize:'20px',caretColor:'transparent'}}>Name Lastname</h2>
          <h3 style={{textAlign:'left',fontSize:'15px',color:'#8B8888',caretColor:'transparent'}}>ID:3</h3>
          <p  style={{textAlign:'left',fontFamily:"Livvic",fontSize:'20px',caretColor:'transparent'}}>sometextsometext sometext somtetx textsome textv somtetx textsome text somtetx textsome text</p>
        </div>
      </div> 
    );
  }

  function UserList(usp) {
    return (
        <div className='container'>
            {usp.users.map(user => (
                <User key={user.id} firstname={user.firstname} lastname={user.lastname} rating={user.rating}/>
            ))}
        </div>
  );
  }
  
  


  useEffect(() => {
  axios.get('http://localhost:8081/api/v1/showAllUser')
  .then(response => {
    console.log('Posts data:', response.data);
    setUsers(response.data);
  })
  .catch(error => {
    console.error('Error fetching users data:', error);
  });
  }, []);

  const token = localStorage.getItem('token');
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };

  axios.get('http://localhost:8081/api/v1/getUser',config).then((response) =>{
    console.log('data',response.data);
    
    if(response.data.role === 'ADMIN')
    {
      return (
        <div>
          <AdminPanel/>
          <div className='container mt-5 mb-5'><UserList users={users}/></div>
        </div>
      )
    }
  }).catch((error) =>{
    console.log('You dont have perrmission',error);
    window.location.replace('/');
  });

}
