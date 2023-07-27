import React from 'react'
import Navbar from '/home/shungus/Рабочий стол/aurora/src/layout/Navbar.js'
import Navbar_menu from '../layout/Navbar_menu'
import Footer from '../layout/Footer'
import { useState, useEffect } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'


function Post(props) {
  return (
      <div className="container-row" style={{background:'#FFFFFF',border:'1px solid #006BA8',width:'30%'}}>
          <h2 className='text-center'>{props.title}</h2>
          <p className='text-center'>{props.content}</p>
          <p>{props.timeAndPlace},{props.rating},{props.countPeople}</p>
          <Link to={`/posts/${props.postID}`}>
          <button>Join</button>
          </Link>
      </div>
  );
}
 
function PostList(props) {
  return (
      <div className='container'>
          {props.posts.map(post => (
              <Post key={post.id} title={post.title} content={post.description} countPeople = {post.count} timeAndPlace ={post.timeAndPlace}
              rating = {post.ratingOfVolunteer} postID={post.id}/>
          ))}
      </div>
  );
}

export default function News() {

  const [posts, setPosts] = useState('');


  useEffect(() => {
    axios.get('http://localhost:8081/api/v1/getAllPosts')
      .then(response => {
        console.log('Posts data:', response.data);
        setPosts(response.data);
      })
      .catch(error => {
        console.error('Error fetching posts data:', error);
      });
  }, []);



  return (
    <div>
    <Navbar/>
    <Navbar_menu/>
    <div class="container">
    <h1 style={{textAlign: "center", marginTop:'40px',fontSize:'80px',color: '#006BA8', fontFamily:"Playfair Display"}}><strong>Inspiration in Action</strong></h1>
    <div class="btn" style={{display: "flex", justifyContent: "center", marginTop: "20px",background:'#FFF',borderColor:'#FFF'}}>
    <div class="btn" style={{marginRight: "10px",borderColor:'#FFF',color:'#006BA8'}}>All</div>
    <div class="btn" style={{marginRight: "10px",borderColor:'#FFF'}}>News</div>
    <div class="btn" style={{marginRight: "10px",borderColor:'#FFF'}}>Success</div>
    <div class="btn" >Volunteers</div>
    </div>
    <div class="input-group mb-3 mt-5">
    <div class="input-group-prepend">
    <button class="input-group-text" id="basic-addon1"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
    </svg>
    </button>
    </div>
    <input type="text" class="form-control" placeholder="Fulltext search" aria-label="Username" aria-describedby="basic-addon1"/>
    </div>
    </div>

    <div className="container mt-5 mb-5" id="show-all-volunteer"><PostList posts={posts}/></div>
  

      <div class="container mt-5 mb-5">
      <div class="row">
      <div class="col-md-12 text-center">
      <a href="" class="btn btn-light" style={{fontSize: '30px', color: '#006BA8',background:'#FFF',borderColor:'#006BA8'}}>See all</a>
      </div>
      </div>
      </div>
      <Footer/>
    </div>
  )
}


