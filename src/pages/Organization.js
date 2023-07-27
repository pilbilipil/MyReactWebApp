import React, {useEffect, useState} from 'react'
import Navbar from '../layout/Navbar'
import Navbar_menu from '../layout/Navbar_menu'
import Footer from '../layout/Footer'
import axios from "axios";

function Org(usp) {
  return (
      <div className="container-row border-bottom" style={{background:'#FFFFFF',width:'50%',marginTop:'5%', display:'flex', alignItems:'center'}}>
        <img src={require('/home/shungus/Рабочий стол/aurora/src/Icons/nophoto.png')} alt="Моя картинка" style={{width: '100px', height: '100px',caretColor:'transparent'}} />
        <div className='container' style={{marginLeft:'10px'}}>
          <h2 style={{textAlign:'left',fontFamily:"Livvic",fontSize:'20px',caretColor:'transparent'}}>{usp.orgName}</h2>
          <h3 style={{textAlign:'left',fontSize:'15px',color:'#8B8888',caretColor:'transparent'}}>ID: {usp.orgId}</h3>
          <p  style={{textAlign:'left',fontFamily:"Livvic",fontSize:'20px',caretColor:'transparent'}}>sometextsometext sometext somtetx textsome textv somtetx textsome text somtetx textsome text</p>
        </div>
      </div>
  );
}

function showOrgs()
{
  document.getElementById("show-orgs").style.display = "block";
  document.getElementById("show-org-by-id").style.display = "none";
}

function showByID()
{
  document.getElementById("show-orgs").style.display = "none";
  document.getElementById("show-org-by-id").style.display = "block";
}

function OrgList(usp) {
  return (
      <div className='container'>
        {usp.orgs.map(org => (
            <Org orgId={org.id} orgName={org.organizationName} />
        ))}
      </div>
  );
}
export default function Organization() {

  const [orgs, setOrgs] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8081/api/v1/showAllOrgs')
        .then(response => {
          console.log(response.data);
          setOrgs(response.data);
        })
        .catch(error => {
          console.error('Error fetching posts data:', error);
        });
  }, []);

  return (
    <div>
    <Navbar/>
    <Navbar_menu/>  
    <img src={require('https://d13kjxnqnhcmn2.cloudfront.net/AcuCustom/Sitename/DAM/052/Business_volunteers_main.png')} alt="Моя картинка" style={{width: '70%', height: '50%'}}/>
    <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between",marginBottom:'5%',marginTop:'5%'}}>
    <div style={{ width: "15%",background:'rgba(217, 217, 217, 0.18)',marginLeft:'15%'}}>
    <div>
  <h5 style={{fontFamily:'Livvic'}}>Region</h5>
  <select className="form-control mr-2" id="region" style={{width:'50%',marginLeft:'25%',background:'#D9D9D9'}}>
      <option value="Almaty">Almaty</option>
      <option value="Astana">Astana</option>
      <option value="Shymkent">Shymkent</option>
      {/* Добавьте остальные варианты регионов здесь */}
    </select>
    <h5 style={{marginTop:'5%',fontFamily:'Livvic'}}>From of organization</h5>
  <div class="text text-start" style={{ display: "flex", flexDirection: "column" }}>
    <label><input type="checkbox" style={{marginLeft:'15%',marginTop:'5%'}}/><a style={{marginLeft:'5%',fontFamily:'Livvic'}}>Public Association</a></label>
    <label><input type="checkbox" style={{marginLeft:'15%',marginTop:'5%'}}/><a style={{marginLeft:'5%',fontFamily:'Livvic'}}>Public Foundation</a></label>
    <label><input type="checkbox" style={{marginLeft:'15%',marginTop:'5%'}}/><a style={{marginLeft:'5%',fontFamily:'Livvic'}}>Charity Fund</a></label>
    <label><input type="checkbox" style={{marginLeft:'15%',marginTop:'5%'}}/><a style={{marginLeft:'5%',fontFamily:'Livvic'}}>Volunteer movement</a></label>
    <label><input type="checkbox" style={{marginLeft:'15%',marginTop:'5%'}}/><a style={{marginLeft:'5%',fontFamily:'Livvic'}}>Initiative</a></label>
    <label><input type="checkbox" style={{marginLeft:'15%',marginTop:'5%'}}/><a style={{marginLeft:'5%',fontFamily:'Livvic'}}>group</a></label>
  </div>  
  <h5 style={{marginTop:'5%',fontFamily:'Livvic'}}>Direction</h5>
  <div class="text text-start" style={{ display: "flex", flexDirection: "column" }}>
    <label><input type="checkbox" style={{marginLeft:'15%',marginTop:'5%'}}/><a style={{marginLeft:'5%',fontFamily:'Livvic'}}>Volunteering in medicine</a></label>
    <label><input type="checkbox" style={{marginLeft:'15%',marginTop:'5%'}}/><a style={{marginLeft:'5%',fontFamily:'Livvic'}}>Environmental volunteering</a></label>
    <label><input type="checkbox" style={{marginLeft:'15%',marginTop:'5%'}}/><a style={{marginLeft:'5%',fontFamily:'Livvic'}}>Social volunteering</a></label>
    <label><input type="checkbox" style={{marginLeft:'15%',marginTop:'5%'}}/><a style={{marginLeft:'5%',fontFamily:'Livvic'}}>Media volunteering</a></label>
    <label><input type="checkbox" style={{marginLeft:'15%',marginTop:'5%'}}/><a style={{marginLeft:'5%',fontFamily:'Livvic'}}>Event volunteering</a></label>
    <label><input type="checkbox" style={{marginLeft:'15%',marginTop:'5%'}}/><a style={{marginLeft:'5%',fontFamily:'Livvic'}}>Help animals</a></label>
    <label><input type="checkbox" style={{marginLeft:'15%',marginTop:'5%'}}/><a style={{marginLeft:'5%',fontFamily:'Livvic'}}>Emergency volunteering</a></label>
    <label><input type="checkbox" style={{marginLeft:'15%',marginTop:'5%'}}/><a style={{marginLeft:'5%',fontFamily:'Livvic'}}>Cultural volunteering</a></label>
    <label><input type="checkbox" style={{marginLeft:'15%',marginTop:'5%'}}/><a style={{marginLeft:'5%',fontFamily:'Livvic'}}>Donorship</a></label>
    <label><input type="checkbox" style={{marginLeft:'15%',marginTop:'5%'}}/><a style={{marginLeft:'5%',fontFamily:'Livvic'}}>Sports volunteering</a></label>
    <label><input type="checkbox" style={{marginLeft:'15%',marginTop:'5%'}}/><a style={{marginLeft:'5%',fontFamily:'Livvic'}}>Pro bono volunteering</a></label>
    <label><input type="checkbox" style={{marginLeft:'15%',marginTop:'5%'}}/><a style={{marginLeft:'5%',fontFamily:'Livvic'}}>Corporate volunteering</a></label>
    <label><input type="checkbox" style={{marginLeft:'15%',marginTop:'5%'}}/><a style={{marginLeft:'5%',fontFamily:'Livvic'}}>Online volunteering</a></label>
    <label><input type="checkbox" style={{marginLeft:'15%',marginTop:'5%'}}/><a style={{marginLeft:'5%',fontFamily:'Livvic'}}>Ethno – volunteering</a></label>
  </div>
  <h5 style={{marginTop:'5%',fontFamily:'Livvic'}}>Sorting</h5>
  <hr />
  <div style={{fontFamily:'Livvic'}}>By ranking</div>
</div>
    </div>
  <div style={{ width: "70%" }}>
  <div class="input-group mb-3" style={{width:'50%',marginLeft:'25%'}}>
  <input type="text" class="form-control" placeholder="Find ( by organization’s name or ID)" aria-label="Username" aria-describedby="basic-addon1"/>
  <div class="input-group-append">
    <button class="btn btn-outline-secondary" onClick={() => showByID()} type="button">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
      </svg>
    </button>
  </div>
    </div>

    <div id="show-orgs" className="container border-bottom mb-5 mt-5" style={{marginLeft: '5%', width: '80%'}}><OrgList orgs={orgs}/></div>
    <div id="show-org-by-id" className="container mb-5 mt-5">find by id org</div>

  

  </div>
  </div>
    <Footer/>  
    </div>
  )
}
