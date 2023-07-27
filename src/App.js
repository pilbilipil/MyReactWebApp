import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from './pages/Main';
import News from './pages/News';
import About from './pages/About';
import Contacts from './pages/Contacts';
import Profile from './pages/Profile';
import Signin from './pages/Signin';
import Volunteering from './pages/Volunteering';
import OrganizationProfile from './pages/OrganizationProfile';
import Registration from './pages/Registration';
import Organization from './pages/Organization';
import BgColorContext from './pages/BgColorContext';
import { useState } from 'react';
import Project from './pages/Project';
import Setting from './pages/Setting';
import Admin from './pages/Admin';
import OrganizationsAdmin from './adminPages/OrganizationsAdmin';
import PostAdmin from './adminPages/PostAdmin';
import VolunteersAdmin from './adminPages/VolunteersAdmin';
import PostDetails from './pages/PostDetails';
import Addpost from './adminPages/Addpost';
import AddPostOrg from './pages/AddPostOrg';
import { LanguageProvider } from './pages/language';

function App() {

  const [bgColor, setBgColor] = useState('#ffffff');
  
  return (
    <Router>
      <LanguageProvider>
      <div className="App">
        <Routes>
          <Route path='/addPostOrganization' element={<AddPostOrg/>}/>
          <Route path='/addPost' element={<Addpost/>}/>
          <Route path='/admin' element={<Admin/>}/>
          <Route path='/setting' element={<Setting/>}/>
          <Route path='/myproject' element={<Project/>}/>
          <Route exact path="/" element={<Main/>}/>
          <Route path="/news" element={<News/>} />
          <Route path="/registration" element={<Registration/>} />
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contacts" element={<Contacts/>}/>
          <Route path="/*" element={<DefaultLayout />} />
          <Route path="/signin" element={<Signin/>}/>
          <Route path="/volunteering" element={<Volunteering/>}/>
          <Route path="/organization" element={<Organization/>}/>
          <Route path="/organizationprofile" element={<OrganizationProfile/>}/>
          <Route path="/PostAdmin" element={<PostAdmin/>}/>
          <Route path="/OrganizationAdmin" element={<OrganizationsAdmin/>}/>
          <Route path="/VolunteersAdmin" element={<VolunteersAdmin/>}/>
          <Route path="/posts/:postId" component={PostDetails}/>
        </Routes>
      </div>
      </LanguageProvider>
    </Router>
  );
}

function DefaultLayout() {
  return (
    <>
      <div className="Content">
        <Routes>
          <Route path="/*" element={<NotFound/>}/>
        </Routes>
      </div>
    </>
  );
}

function NotFound() {
  return (
    <div className="App">
      <h1 class="pt-5 pb-5">404 pages NotFound</h1>
    </div>    
  );
}

export default App;
