import React from 'react'
import Navbar from '../layout/Navbar'
import Navbar_menu from '../layout/Navbar_menu'
import Footer from '../layout/Footer'
import BgColorContext from './BgColorContext'
import { useContext } from 'react'


export default function Main() {
  const { bgColor } = useContext(BgColorContext);  
  return (
    <div style={{background:bgColor}}>
      <Navbar/>
      <Navbar_menu/>
      <div id="carouselExample" class="carousel slide pt-5 pb-5" style={{width:'100%'}}>
      <div class="carousel-inner" >
      
      <div class="carousel-item active">
      <img src="https://www.stonyplain.com/en/live/resources/b-volunteering.jpg" class="d-block w-100" alt="..."></img>
      <div class="carousel-caption">
      <h1 style={{marginBottom:'14%',fontFamily:'Manrope',caretColor:'transparent'}}>VOLUNTEERING WITH US</h1>
      </div>
      </div>
      <div class="carousel-item">
      <img src="https://d13kjxnqnhcmn2.cloudfront.net/AcuCustom/Sitename/DAM/052/Business_volunteers_main.png" class="d-block w-100" alt="..."></img>
      <div class="carousel-caption">
        <h1 style={{marginBottom:'14%',fontFamily:'Manrope',caretColor:'transparent'}}>BE VOLUNTEER</h1>
      </div>
      </div>
      <div class="carousel-item">
      <img src="https://blogs.volunteermatch.org/hubfs/Imported_Blog_Media/Volunteering-2.jpg/keepProtocol" class="d-block w-100" alt="..."></img>
      <div class="carousel-caption">
        <h1 style={{marginBottom:'14%',fontFamily:'Manrope',caretColor:'transparent'}}>BE TOGETHER</h1>
      </div>
      </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
      </button>
      </div>

      <div class="container mt-5">
      <div class="row">
      <div class="col-md-8 offset-md-2 text-center">
      <h2 style={{caretColor:'transparent'}}>Volunteering: Giving Back to Your Community</h2>
      <p class="lead" style={{caretColor:'transparent'}}>Volunteering is a great way to give back to your community, meet new people, and learn new skills. Whether you're interested in working with children, the elderly, or animals, there's a volunteering opportunity out there for you. You can volunteer at a local food bank, animal shelter, or hospital, or you can help out at a community event or fundraiser. Volunteering not only helps others, but it can also be good for your mental health and well-being. It can provide a sense of purpose and fulfillment, reduce stress and anxiety, and improve your self-esteem. So why not give it a try?</p>
      </div>
      </div>
      </div>
      
      <div class="container mt-5 mb-5">
      <div class="row">
      <div class="col-md-12 text-center">
      <a href="/registration" class="btn btn-light" style={{fontSize: '30px', color: '#006BA8',background:'#FFF',borderColor:'#006BA8'}}>GET STARTED</a>
      </div>
      </div>
      </div>

    <div class="container mt-5 mb-5">
    <div class="row">

    <div class="col-md-6">
    <div class="row border pb-4 pt-4" style={{marginRight:'10px'}}>
    <div class="col-md-6">
    <h2 style={{textAlign:'left',marginLeft:'20px',caretColor:'transparent'}}>Want to become a volunteer?</h2>
    <p style={{textAlign:'left',marginLeft:'20px',caretColor:'transparent'}}>If you are ready to provide free assistance to a project or organisation then here </p>
    </div>
    <div class="col-md-6">
    <img src="https://www.bluezones.com/wp-content/uploads/2019/07/volunteering-best-things-for-your-health.jpg" alt="Картинка 1" class="img-fluid" style={{caretColor:'transparent'}}/>
    </div>
    <a href="/registration" class="btn btn-primary mr-md-2" style={{width:'150px',marginLeft:'30px',color: '#006BA8',background:'#FFF',borderColor:'#006BA8'}}>I want to help</a>
    </div>
    </div>

    <div class="col-md-6">
    <div class="row border pb-4 pt-4" style={{marginLeft:'10px'}}>
    <div class="col-md-6">
    <h2 style={{textAlign:'left',marginLeft:'20px',caretColor:'transparent'}}>Need volunteers?</h2>
    <p style={{textAlign:'left',marginLeft:'20px',caretColor:'transparent'}}>If you are an organisation that needs the help of volunteers, then here you are</p>
    </div>
    <div class="col-md-6">
    <img src="https://pikwizard.com/pw/small/d998346b94fa9209df36f6d2ec822379.avif" alt="Картинка 2" class="img-fluid" style={{caretColor:'transparent'}}/>
    </div>
    <a href="/registration" class="btn btn-primary mr-md-2" style={{width:'150px',marginLeft:'30px',color: '#006BA8',background:'#FFF',borderColor:'#006BA8'}}>Find volunteers</a>
    </div>   
    </div>

    </div>
    </div>


    <div className="container mt-5 mb-5">
    <div className="row">
  
    <div className="col-md-4 mb-4"> {/* Блок 1 */}
    <img src="https://treeclicks4.objects.frb.io/blogs/plant-a-tree.jpg" alt="Картинка 1" className="img-fluid" style={{caretColor:'transparent'}}/>
      <div className="border border-dark pb-4" style={{marginLeft: "0px"}}>
        <h3 style={{textAlign: "left",marginTop:'40px',marginBottom:'200px',marginLeft:'5%',caretColor:'transparent'}}>Almaty started planting trees</h3>
        <div class="container-row" style={{float:'left',marginLeft:'5%',caretColor:'transparent'}}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
              <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
              <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
              </svg>
              <a style={{fontSize:'15px',marginLeft:'15px',fontFamily:'Livvic',caretColor:'transparent'}}>Almaty</a>
              </div>
      </div>
    </div>
    
    <div className="col-md-4 mb-4"> {/* Блок 2 */}
    <img src="https://npr.brightspotcdn.com/dims4/default/923df82/2147483647/strip/true/crop/768x512+0+0/resize/880x587!/quality/90/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2Flegacy%2Fsites%2Fwuga%2Ffiles%2F202104%2Fblood_donation.jpg" alt="Картинка 2" className="img-fluid" style={{caretColor:'transparent'}}/>
      <div className="border border-dark pb-4" style={{marginLeft: "0px"}}>
    
        <h3 style={{textAlign: "left",marginTop:'40px',marginBottom:'200px',marginLeft:'5%',caretColor:'transparent'}}>Need blood donations</h3>
        <div class="container-row" style={{float:'left',marginLeft:'5%'}}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
              <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
              <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
              </svg>
              <a style={{fontSize:'15px',marginLeft:'15px',fontFamily:'Livvic',caretColor:'transparent'}}>Almaty</a>
              </div>
      </div>
    </div>
    
    <div className="col-md-4 mb-4"> {/* Блок 3 */}
    <img src="https://st2.depositphotos.com/1017986/11140/i/950/depositphotos_111409656-stock-photo-volunteers-with-garbage-bags-cleaning.jpg" alt="Картинка 1" className="img-fluid" style={{caretColor:'transparent'}}/>
      <div className="border border-dark pb-4" style={{marginLeft: "0px"}}>
        <h3 style={{textAlign: "left",marginTop:'40px',marginBottom:'200px',marginLeft:'5%',caretColor:'transparent'}}>Shimkent started cleaning</h3>
        <div class="container-row" style={{float:'left',marginLeft:'5%'}}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
              <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
              <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
              </svg>
              <a style={{fontSize:'15px',marginLeft:'15px',fontFamily:'Livvic',caretColor:'transparent'}}>Almaty</a>
              </div>
      </div>
    </div>
    
  </div>
</div>

<div className="container mb-5" style={{width:'1000px'}}>
<h1 style={{textAlign: "center", marginTop:'40px',fontSize:'60px',caretColor:'transparent'}}><strong>About Our Volunteers</strong></h1>
  <div className="row mt-5">
    <div className="col-md-6">
      <p style={{textAlign: "left",fontSize:'25px',fontFamily:'Manrope',caretColor:'transparent'}}>
      <strong>
      Our volunteers are the backbone of our organization. Without their dedication, we would not be able to achieve our mission of making a difference in the lives of those we serve. Our volunteers come from all walks of life, but they share a common goal: to help those in need.
      </strong>
      </p>
    </div>
    <div className="col-md-6">
      <img src="https://pikwizard.com/pw/small/a534ddf4eda48807a64daf8722bb6122.avif" alt="Картинка" className="img-fluid" style={{float: "right",caretColor:'transparent'}} />
    </div>
  </div>
</div>
  
    <Footer/>
    </div>
  )
}
