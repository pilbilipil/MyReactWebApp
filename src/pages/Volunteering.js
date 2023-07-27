import React, {useEffect, useState} from 'react'
import Navbar from '../layout/Navbar'
import Navbar_menu from '../layout/Navbar_menu'
import Footer from '../layout/Footer'
import axios from "axios";

function User(usp) {
  return (
      <div className="container-row border-bottom" style={{background:'#FFFFFF',width:'50%',marginTop:'5%', display:'flex', alignItems:'center'}}>
        <img src={require('../Icons/nophoto.png')} alt="Моя картинка" style={{width: '100px', height: '100px',caretColor:'transparent'}} />
        <div className='container' style={{marginLeft:'10px'}}>
          <h2 style={{textAlign:'left',fontFamily:"Livvic",fontSize:'20px',caretColor:'transparent'}}>{usp.firstname} {usp.lastname}</h2>
          <h3 style={{textAlign:'left',fontSize:'15px',color:'#8B8888',caretColor:'transparent'}}>ID: {usp.userId}</h3>
          <p  style={{textAlign:'left',fontFamily:"Livvic",fontSize:'20px',caretColor:'transparent'}}>sometextsometext sometext somtetx textsome textv somtetx textsome text somtetx textsome text</p>
        </div>
      </div>
  );
}

function UserList(usp) {
  return (
      <div className='container'>
        {usp.users.map(user => (
            <User userId={user.id} firstname={user.firstname} lastname={user.lastname} rating={user.rating}/>
        ))}
      </div>
  );
}

export default function Volunteering() {

  const [users, setUsers] = useState([]);
  const [usersbyID,setUsersbyID] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8081/api/v1/showAllUsers')
        .then(response => {
          console.log('Posts data:', response.data);
          setUsers(response.data);
        })
        .catch(error => {
          console.error('Error fetching posts data:', error);
        });
  }, []);

  function showByID()
  {
    document.getElementById("show-orgs").style.display = "none";
    document.getElementById("show-org-by-id").style.display = "block";
    const ids = document.getElementById('search-input').value;
    axios.get(`http://localhost:8081/api/v1/getUser`)
        .then(response => {
          console.log('Response:', response.data);
        })
        .catch(error => {
          console.error('Error fetching org data:', error);
        });
  }

  return (
    <div>
    <Navbar/>
    <Navbar_menu/>
    <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between",marginBottom:'5%',marginTop:'5%'}}>
    <div style={{ width: "15%",background:'rgba(217, 217, 217, 0.18)',marginLeft:'15%'}}>
    <div>
  <h5>Region</h5>
  <select className="form-control mr-2" id="region" style={{width:'50%',marginLeft:'25%',background:'#D9D9D9'}}>
      <option value="Almaty">Almaty</option>
      <option value="Astana">Astana</option>
      <option value="Shymkent">Shymkent</option>
      {/* Добавьте остальные варианты регионов здесь */}
    </select>
    <h5 style={{marginTop:'5%'}}>From of organization</h5>
  <div class="text text-start" style={{ display: "flex", flexDirection: "column" }}>
    <label><input type="checkbox" style={{marginLeft:'15%',marginTop:'5%'}}/><a style={{marginLeft:'5%'}}>Public Association</a></label>
    <label><input type="checkbox" style={{marginLeft:'15%',marginTop:'5%'}}/><a style={{marginLeft:'5%'}}>Public Foundation</a></label>
    <label><input type="checkbox" style={{marginLeft:'15%',marginTop:'5%'}}/><a style={{marginLeft:'5%'}}>Charity Fund</a></label>
    <label><input type="checkbox" style={{marginLeft:'15%',marginTop:'5%'}}/><a style={{marginLeft:'5%'}}>Volunteer movement</a></label>
    <label><input type="checkbox" style={{marginLeft:'15%',marginTop:'5%'}}/><a style={{marginLeft:'5%'}}>Initiative</a></label>
    <label><input type="checkbox" style={{marginLeft:'15%',marginTop:'5%'}}/><a style={{marginLeft:'5%'}}>group</a></label>
  </div>  
  <h5 style={{marginTop:'5%'}}>Direction</h5>
  <div class="text text-start" style={{ display: "flex", flexDirection: "column" }}>
    <label><input type="checkbox" style={{marginLeft:'15%',marginTop:'5%'}}/><a style={{marginLeft:'5%'}}>Volunteering in medicine</a></label>
    <label><input type="checkbox" style={{marginLeft:'15%',marginTop:'5%'}}/><a style={{marginLeft:'5%'}}>Environmental volunteering</a></label>
    <label><input type="checkbox" style={{marginLeft:'15%',marginTop:'5%'}}/><a style={{marginLeft:'5%'}}>Social volunteering</a></label>
    <label><input type="checkbox" style={{marginLeft:'15%',marginTop:'5%'}}/><a style={{marginLeft:'5%'}}>Media volunteering</a></label>
    <label><input type="checkbox" style={{marginLeft:'15%',marginTop:'5%'}}/><a style={{marginLeft:'5%'}}>Event volunteering</a></label>
    <label><input type="checkbox" style={{marginLeft:'15%',marginTop:'5%'}}/><a style={{marginLeft:'5%'}}>Help animals</a></label>
    <label><input type="checkbox" style={{marginLeft:'15%',marginTop:'5%'}}/><a style={{marginLeft:'5%'}}>Emergency volunteering</a></label>
    <label><input type="checkbox" style={{marginLeft:'15%',marginTop:'5%'}}/><a style={{marginLeft:'5%'}}>Cultural volunteering</a></label>
    <label><input type="checkbox" style={{marginLeft:'15%',marginTop:'5%'}}/><a style={{marginLeft:'5%'}}>Donorship</a></label>
    <label><input type="checkbox" style={{marginLeft:'15%',marginTop:'5%'}}/><a style={{marginLeft:'5%'}}>Sports volunteering</a></label>
    <label><input type="checkbox" style={{marginLeft:'15%',marginTop:'5%'}}/><a style={{marginLeft:'5%'}}>Pro bono volunteering</a></label>
    <label><input type="checkbox" style={{marginLeft:'15%',marginTop:'5%'}}/><a style={{marginLeft:'5%'}}>Corporate volunteering</a></label>
    <label><input type="checkbox" style={{marginLeft:'15%',marginTop:'5%'}}/><a style={{marginLeft:'5%'}}>Online volunteering</a></label>
    <label><input type="checkbox" style={{marginLeft:'15%',marginTop:'5%'}}/><a style={{marginLeft:'5%'}}>Ethno – volunteering</a></label>
  </div>
  <h5 style={{marginTop:'5%'}}>Sorting</h5>
  <hr />
  <div>By ranking</div>
</div>
    </div>
  <div style={{ width: "70%" }}>
  <div class="input-group mb-3" style={{width:'50%',marginLeft:'25%'}}>
  <input id="search-input" type="text" class="form-control" placeholder="Find by Name or ID" aria-label="Username" aria-describedby="basic-addon1"/>
  <div class="input-group-append">
    <button class="btn btn-outline-secondary" onClick={showByID()} type="button">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
      </svg>
    </button>
  </div>
    </div>
    <div className="container border-bottom mb-5 mt-5" style={{marginLeft: '5%', width: '80%',display:'yes'}}><UserList users={users}/></div>
    <div className="container border-bottom mb-5 mt-5" style={{marginLeft: '5%', width: '80%',display:'none'}}>
      <h2 style={{textAlign:'left',fontFamily:"Livvic",fontSize:'20px',caretColor:'transparent'}}>{usersbyID.username}</h2>
      <h3 style={{textAlign:'left',fontSize:'15px',color:'#8B8888',caretColor:'transparent'}}>ID: {usersbyID.id}</h3>
    </div>
  </div>
</div>
    <Footer/>
    </div>
  )
}
