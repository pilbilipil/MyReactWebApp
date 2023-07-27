import axios from 'axios';
import React, { useState,useEffect } from 'react'
import AdminPanel from '../layout/AdminPanel'

export default function Organizations() {

  const [organization,setOrg] = useState;

  function Organization() {
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

  function OrgList(orga) {
    return (
        <div className='container'>
            {orga.organization.map(organization => (
                <Organization key={organization.id}/>
            ))}
        </div>
  );
  }

  useEffect(() => {
    axios.get('http://localhost:8081/api/v1/showAllOrgs')
    .then(response => {
      console.log('Posts data:', response.data);
      setOrg(response.data);
    })
    .catch(error => {
      console.error('Error fetching org data:', error);
    });
    }, []);
  
    const token = localStorage.getItem('token');
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };

    axios.get('http://localhost:8081/api/v1/getUser',config).then((response) =>{
      if(response.data.role === 'ADMIN')
      {
        return (
          <div>
            <AdminPanel/>
            <div className='container mt-5 mb-5'><OrgList organization={organization}/></div>
          </div>
        )
      }
    }).catch((error) => {
      console.log('You dont have permission',error);
      window.location.replace('/');
    });

}
 