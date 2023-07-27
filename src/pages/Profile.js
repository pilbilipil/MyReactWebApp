import React, { useState } from 'react'
import Navbar from '../layout/Navbar'
import Navbar_menu from '../layout/Navbar_menu'
import Footer from '../layout/Footer'
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Profile() {

  const [userData, setUserData] = useState('');
  const token = localStorage.getItem('token');
  
  if(!token){
    window.location.replace('/signin');
    return(
      <div></div>
    )
  }else{
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };

      axios.get('http://localhost:8081/api/v1/getUser', config)
        .then((response) => {
          console.log('Profile data:', response.data);
          setUserData(response.data);
        })
        .catch((error) => {
          console.error('Error fetching profile data:', error);
        });
      }
  
   
  return (
      <div>
        <Navbar/>
        <Navbar_menu/>
        <div class="container mb-5 mt-5" style={{caretColor:'transparent'}}>
          <div class="row">
            <div class="col-md-6">

              <div class="profile-block border" style={{
                background: 'rgba(217, 217, 217, 0.18)',
                borderColor: '#141414',
                width: '400px',
                height: '600px'
              }}>
                <img src={require('/home/shungus/Рабочий стол/aurora/src/Icons/nophoto.png')} alt="Моя картинка"
                     style={{width: '100px', height: '100px'}}/>
                <h2 class="text-start"
                    style={{fontWeight: 'bold', marginLeft: '5%', marginTop: '5%', fontFamily: 'Livvic'}}>{userData.firstname}</h2>
                <h4 class="text-start"
                    style={{color: 'rgba(139, 136, 136, 1)', marginLeft: '5%', fontFamily: 'Livvic'}}>Volunteer
                  ID:<a>{userData.id}</a></h4>
                <div class="rating">
                  <p class="text-start" style={{fontWeight: 'bold', marginLeft: '5%', fontFamily: 'Livvic'}}>Volunteer
                    Rating</p>
                  <div className="progress" style={{width: '90%', marginLeft: '5%'}}>
                    <div className="progress-bar" role="progressbar" style={{width: '75%'}} aria-valuenow={75}
                         aria-valuemin={0} aria-valuemax={100}>{userData.rating}
                    </div>
                  </div>
                </div>
                <div class="container border-top mt-5"></div>
                <table style={{width:'50%',marginTop:'5%'}}>
                   <tr>
                    <td class="text-start" style={{paddingBottom: '50px',paddingLeft:"15%"}}>
                        <Link to='/profile' class="text-start" style={{fontWeight: 'bold', fontFamily: 'Livvic',textDecoration:'none',color:'#000',fontSize:'20px'}}>
                        My profile
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td  class="text-start" style={{paddingBottom: '50px',paddingLeft:"15%"}}>
                        <Link to='/myproject' class="text-start" style={{fontWeight: 'bold', fontFamily: 'Livvic',textDecoration:'none',color:'#000',fontSize:'20px'}}>
                        My project
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td class="text-start" style={{paddingLeft:"15%"}}>
                       <Link to='/setting' class="text-start" style={{fontWeight: 'bold', fontFamily: 'Livvic',textDecoration:'none',color:'#000',fontSize:'20px'}}>
                       Setting
                        </Link>
                      </td>
                    </tr>
                    </table>

              </div>
            </div>
            <div class="col-md-6">
            <h1 style={{textAlign:'left',fontFamily:'Manrope',fontWeight:'bold'}}>Information</h1>
            <h3 style={{textAlign:'left',fontFamily:'Manrope',color:'#8B8888',fontWeight:'bold'}}>About you</h3>
            <p style={{textAlign:'left'}}>sometext som text text some textssometext som text text some texts  sometext som text text some texts sometext som text text some texts</p>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
  )
}
