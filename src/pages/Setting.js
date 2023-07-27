import React from 'react'
import Navbar from '../layout/Navbar'
import Navbar_menu from '../layout/Navbar_menu'
import Footer from '../layout/Footer'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Setting() {

    const token = localStorage.getItem('token');
  
    /*Место для хранение данных после получение json формате*/
    const [userData, setUserData] = useState('');

    const [dayOfBirth, setDay] = useState('');
    const [gender,setGender] = useState('');
    const [region,setRegion] = useState('');
    const [expiriance,setExp] = useState('');

   
  async function update(event)

  {

    event.preventDefault();

    try

    {

      await axios.post("http://localhost:8081/api/v1/updateUser",

          {
          dayOfBirth: dayOfBirth,

          gender: gender,

          region: region,

          expiriance: expiriance
          });

      alert("Update Successfully");

      setDay("");
      
      setGender("");

      setRegion("");

      setExp("");
    }

    catch(err)

    {

      alert("User Registation Failed");

    }

  }
    
    /*{
      "id": 4,
      "firstname": "Ellias",
      "lastname": "Mussayev",
      "email": "glhf_2000@mail.ru",
      "city": "Almaty",
      "phone": "87878787",
      "image": null,
      "password": "$2a$10$3.x0mIv7KQvFnANiaT17Ge1HrD1i3DvlE/yiIrVcXestE9u.I6QOW",
      "rating": 90,
      "role": "ADMIN",
      "enabled": true,
      "username": "glhf_2000@mail.ru",
      "authorities": [
          {
              "authority": "ADMIN"
          }
      ],
      "accountNonExpired": true,
      "accountNonLocked": true,
      "credentialsNonExpired": true
  }*/
  
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    
  
    axios.get('http://localhost:8081/api/v1/getUser', config)
        .then(response => {
          console.log('Profile data:', response.data);
          setUserData(response.data);
        })
        .catch(error => {
          console.error('Error fetching profile data:', error);
        });

        
  
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
  
                <div className="settings-menu">
                  <h3 className='text-start' style={{fontWeight: 'bold', fontFamily: 'Livvic'}}>Personal Information</h3>
                  <div className="form-group d-flex align-items-center" style={{marginTop: '8%'}}>
                    <label htmlFor="dayOfBirth" className="mr-2" style={{fontWeight: 'bold', fontFamily: 'Livvic'}}>Day Of
                      Birth:</label>
                    <div className="d-flex">
                      <input type="number" className="form-control mr-2" id="dayOfBirth" placeholder="Day"
                             style={{width: '100px', marginLeft: '20%', background: '#D9D9D9'}}/>
                      <input type="number" className="form-control mr-2" id="monthOfBirth" placeholder="Month"
                             style={{width: '150px', marginLeft: '17%', background: '#D9D9D9'}}/>
                      <input type="number" className="form-control" id="yearOfBirth" placeholder="Year"
                             style={{width: '100px', marginLeft: '18%', background: '#D9D9D9'}}/>
                    </div>
                  </div>
                  <div className="form-group d-flex align-items-center" style={{marginTop: '8%'}}>
                    <label htmlFor="gender" className="mr-2"
                           style={{fontWeight: 'bold', fontFamily: 'Livvic'}}>Gender:</label>
                    <div className="form-check mr-2" style={{marginLeft: '17%'}}>
                      <input type="radio" className="form-check-input" id="female" name="gender"/>
                      <label className="form-check-label" htmlFor="female"
                             style={{fontWeight: 'bold', fontFamily: 'Livvic'}}>Female</label>
                    </div>
                    <div className="form-check" style={{marginLeft: '17%'}}>
                      <input type="radio" className="form-check-input" id="male" name="gender"/>
                      <label className="form-check-label" htmlFor="male"
                             style={{fontWeight: 'bold', fontFamily: 'Livvic'}}>Male</label>
                    </div>
                  </div>
                  <div class="container border-top mt-5"></div>
                  <div className="form-group d-flex align-items-center" style={{marginTop: '8%'}}>
                    <label htmlFor="region" className="mr-2"
                           style={{fontWeight: 'bold', fontFamily: 'Livvic'}}>Region:</label>
                    <select className="form-control mr-2" id="region"
                            style={{width: '600px', marginLeft: '17.5%', background: '#D9D9D9'}}>
                      <option value="Almaty">Almaty</option>
                      <option value="Astana">Astana</option>
                      <option value="Shymkent">Shymkent</option>
                      {/* Добавьте остальные варианты регионов здесь */}
                    </select>
                  </div>
                  <div className="form-group d-flex align-items-center" style={{marginTop: '8%'}}>
                    <label htmlFor="direction" className="mr-2"
                           style={{fontWeight: 'bold', fontFamily: 'Livvic'}}>Direction:</label>
                    <select className="form-control mr-2" id="direction"
                            style={{width: '600px', marginLeft: '15%', background: '#D9D9D9'}}>
                      <option value="Option1">Option 1</option>
                      <option value="Option2">Option 2</option>
                      <option value="Option3">Option 3</option>
                      {/* Добавьте остальные варианты направлений здесь */}
                    </select>
                  </div>
                  <div className="form-group d-flex align-items-center" style={{marginTop: '8%'}}>
                    <label htmlFor="experience" className="mr-2"
                           style={{fontWeight: 'bold', fontFamily: 'Livvic'}}>Experience:</label>
                    <input type="number" className="form-control" id="experience" placeholder="Years of Experience"
                           style={{width: '600px', marginLeft: '13%', background: '#D9D9D9'}}/>
                  </div>
                  <div class="container border-top mt-5"></div>
                  <div class="container" style={{marginTop: '5%', marginLeft: '10%'}}>
                    <button className="btn btn-light" style={{marginLeft: '50%'}}>Cancel</button>
                    <button className="btn"
                            style={{background: '#006BA8', fontFamily: 'Livvic', color: '#FFF', marginLeft: '10%'}}>Save
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer/>
        </div>
    )
  }
