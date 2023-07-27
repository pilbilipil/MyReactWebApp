import React from 'react'
import Navbar from '../layout/Navbar'
import Navbar_menu from '../layout/Navbar_menu'
import Footer from '../layout/Footer'
import axios from 'axios';

export default function Addpost() {

    const token = localStorage.get('token');
    const config = {
         headers: { Authorization: `Bearer ${token}` }
    }

    axios.get('http://localhost:8081/api/v1/getUser',config).then((response) =>{
        console.log('Data', response.data);
        if(response.data.role === 'ADMIN')
        {
            return (
                <div>
                    <Navbar/>
                    <Navbar_menu/>
                    <div className='container mt-5 mb-5'><h1>Add post</h1></div>
                    {/*
                    input lable for all params
                    */}
                    <div className='container'>    
                    </div>
                    <Footer/>
                </div>
              ) 
        }
        else{
            console.log('You dont have permission');
            window.location.replace('/');
        }
    }).catch((error) =>{
        console.log(error);
    })
}
