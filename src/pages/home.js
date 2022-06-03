import React  from "react";
import {Link} from "react-router-dom";

function Home(){
    return(
<div>
<div class="main_area">

<header class="header_section">
<div class="container-fluid">
  <nav class="navbar navbar-expand-lg custom_nav-container">
    <a class="navbar-brand" href="index.html">
      <span>
        KSDIAN
      </span>
    </a>

    <div class="navbar-collapse" id="">
      <div class="d-none d-lg-flex ml-auto flex-column flex-lg-row align-items-center">
        <ul class="navbar-nav ">
          <li class="nav-item">
            <a class="nav-link" href="index.html">
              <img src="/design/image/login.png" alt="" />
              <span>Login</span></a>
          </li>
          <li class="nav-item">
           <Link to="/reg">
              <img src="/design/image/signup.png"  alt=""/>
              <span>Sign Up</span>
              </Link>
          </li>
        </ul>
        <form class="form-inline my-2 mb-3 mb-lg-0 mr-5">
          <button class="btn  my-2 my-sm-0 nav_search-btn" type="submit"></button>
        </form>
      </div>

      <div class="custom_menu-btn">
        <button onclick="openNavigation()">
          <span class="s-1">

          </span>
          <span class="s-2">

          </span>
          <span class="s-3">

          </span>
        </button>
      </div>
      <div id="myNav" class="overlay">
        <a href="index.html" class="closebtn" onclick="closeNav()">&times;</a> 
        <div class="overlay-content">
          <a href="index.html">HOME</a>
          <a href="index.html">TEAM</a>
          <a href="index.html">PORTFOLIO</a>

          <a href="index.html">CONTACT US</a>

        </div>
      </div>
    </div>
  </nav>
</div>
    </header>

    <section class=" slider_section ">

<div id="carousel-begins" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carousel-begins" data-slide-to="0" class="active">01</li>
    <li data-target="#carousel-begins" data-slide-to="1">02</li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div class="row">
        <div class="col-md-3 offset-md-2">
          <div class="slider_detail">
            <h1>
              INNOVATIVE
              <span>
                SOLUTIONS
              </span>
            </h1>
            <p>
              We find the best solutions for you, we redesign your home and work places.
              Discover why over 5,100 home owners trust initiative
            </p>
            <div>
              <a href="index.html">
                Find More
              </a>
            </div>
          </div>
        </div>
        <div class="col-md-7">
          <div class="slider_img-box">
            <img src="/design/image/slider-img.png"  alt=""/>
          </div>
        </div>
      </div>
    </div>
    <div class="carousel-item">
      <div class="row">
        <div class="col-md-3 offset-md-2">
          <div class="slider_detail">
            <h1>
              INNOVATIVE
              <span>
                SOLUTIONS
              </span>
            </h1>
            <p>
              We find the best solutions for you, we redesign your home and work places.
              Discover why over 5,100 home owners trust initiative
            </p>
            <div>
              <a href="index.html">
                Find More
              </a>
            </div>
          </div>
        </div>
        <div class="col-md-7">
          <div class="slider_img-box">
            <img src="/design/image/slider-img.png" alt=""/>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="carousel_btn-container">
    <a class="carousel-control-prev" href="#carousel-begins" role="button" data-slide="prev">
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carousel-begins" role="button" data-slide="next">
      <span class="sr-only">Next</span>
    </a>
  </div>
</div>

    </section>

</div>


<section class="company layout-padding" >
<div class="container">
  <h1 >WHY INITIATIVE COMPANY</h1>
  <p >It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem.</p>
</div>
<div class="container">
<div class="row layout-padding">
 <div class="about-column col-md-4"  >
  <div class="card text-center"  style={{width: "300", height:"auto"}}>
    <div class="card-body">
      <img src="/design/image/card-img-1.png" class="card-img-top" alt=""/>
      <h3 class="card-title">10 YEARS EXPERIENCE</h3>
      <p class="card-text">Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus.</p>

    </div>
    
  </div>  
  
 <button class="btn btn-lg btn-block " type="button">Read More</button>
</div>

<div class="about-column col-md-4" >
  <div class="card text-center"  style={{width: "300", height:"auto"}}>
    <div class="card-body">
      <img src="/design/image/card-img-2.png" class="card-img-top" alt=""/>
      <h3 class="card-title">A PRO ARCHITECTS TEAM</h3>
      <p class="card-text">Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus.</p>
     
    </div>
  </div>
  <button class="btn btn-lg btn-block " type="button">Read More</button>
</div>


<div class="about-column col-md-4"  >
  <div class="card text-center"  style={{width: "300", height:"auto"}}>
    <div class="card-body">
      <img src="/design/image/card-img-3.png" class="card-img-top" alt=""/>
      <h3 class="card-title">1000+ HAPPY CUSTOMERS</h3>
      <p class="card-text">Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus.</p>
     
    </div>
   
  </div>
  <button class="btn btn-lg btn-block " type="button">Read More</button>
</div>

</div> 





</div>
</section>

<section  class="port layout-padding" >
<div class="container">
<h1>OUR PORTFOLIO</h1>
<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem</p>
</div>
<div class="container layout-padding">
<div class="row ">
<div class=" col-md-8">
  <div class="port-image-box">
    <img   src="/design/image/portfolio-img-1.png" alt="" />
  </div>
</div>
<div class=" col-md-4">
  <div class="port-image-box">
   <img  src="/design/image/portfolio-img-2.jpg" alt=""/>
  </div>
  </div>
<div class=" col-md-4">
  <div class="port-image-box">
    <img src="/design/image/portfolio-img-3.png"  alt=""/>
  </div>
</div>
<div class=" col-md-8" >
  <div class="port-image-box">
    <img   src="/design/image/portfolio-img-4.png" alt=""/> 
  </div>
</div>
</div>
</div>
</section>

<section class="ourteam layout-padding" >
    <div class="container">
        <h2>OUR TEAM</h2>
        <p>It is a long established fact that a reader will be distracted by the readable</p>
    </div>
    <div class="container layout-padding " >
        <div class="row">
            <div class="col-sm-3">
                <div class="card-main">
                    <div class="card-body">
                        <img src="/design/image/team-1.png" class="team-img" alt=""/><br /><br/>
                        <h5>JOHN DOE</h5>
                        <p>CEO - DESIGNER</p>
                        <p>Follows On</p>
                        <div class="content-img">
                            <img src="vimage/facebook-logo-button.png" alt="" />
                            <img src="/design/image/instagram.png" alt=""/>
                            <img src="/design/image/twitter-logo-button.png" alt=""/>
                            <img src="/design/image/linkedin.png" alt=""/>
                        </div>
                    </div>
                </div> 
            </div>
            <div class="col-sm-3">
                <div class="card-main">
                    <div class="card-body">
                        <img src="/design/image/team-2.png" class="team-img" alt=""/><br/><br/>
                        <h5>SANDY DOE</h5>
                        <p>CEO - DESIGNER</p>
                        <p>Follows On</p>
                        <div class="content-img">
                            <img src="/design/image/facebook-logo-button.png" alt=""/>
                            <img src="/design/image/instagram.png" alt=""/>
                            <img src="/design/image/twitter-logo-button.png" alt=""/>
                            <img src="/design/image/linkedin.png" alt=""/>
                        </div>
                    </div> 
                </div>
            </div>
            <div class="col-sm-3">
                <div class="card-main">
                    <div class="card-body">
                        <img src="/design/image/team-3.png" class="team-img" alt=""/><br/><br/>
                        <h5>ALEXI DOE</h5>
                        <p>CEO - DESIGNER</p>
                        <p>Follows On</p>
                        <div class="content-img">
                            <img src="/design/image/facebook-logo-button.png" alt=""/>
                            <img src="/design/image/instagram.png" alt=""/>
                            <img src="/design/image/twitter-logo-button.png" alt=""/>
                            <img src="/design/image/linkedin.png" alt=""/>
                        </div>
                    </div> 
                </div>
            </div>
            <div class="col-sm-3">
                <div class="card-main">
                    <div class="card-body">
                        <img src="/design/image/team-4.png" class="team-img" alt=""/><br/><br/>
                        <h5>JOHN DOE</h5>
                        <p>CEO - DESIGNER</p>
                        <p>Follows On</p>
                        <div class="content-img">
                            <img src="/design/image/facebook-logo-button.png" alt="" />
                            <img src="/design/image/instagram.png" alt=""/>
                            <img src="/design/image/twitter-logo-button.png" alt="" />
                            <img src="/design/image/linkedin.png" alt=""/>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    </div>  
</section>

<hr class="middhr" />

<section class="register layout-padding">
<div class="container text-center">
<p>Don’t Hesitate To Ask</p>
<h2>FREE CONSULTATION</h2>
</div>
<div class="container layout-padding">
<div class="row">
<div class="col-md-6">
  <form action="/">
    <div class="regform-container">
      <div>
        <div>
          <label>name
            <input type="text" />
          </label>
        </div>
        <div>
          <label>email
            <input type="email" />
          </label>
        </div>
        <div>
          <label>phone number
            <input type="text" />
          </label>
        </div>
        <div>
          <label>message
            <textarea cols="30" rows="10"></textarea>
          </label>
        </div>
        <div>
          <button class="btn1" type="submit">Send</button>
        </div>
      </div>
    </div>
  </form>
</div>
<div class="col-md-6">
  <div class="reg-img">
      <img src="/design/image/form-img.png" alt="" />

  </div>
</div>
</div>
</div>
</section>

<section class="chooseus layout-padding">
<div class="container ">
<h2 class="layout-padding">WHY CHOOSE US?</h2>
<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using LoremIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem</p>
</div>

</section>






<section class="layout-padding">
    <div>
        <div class="form">
            <h1>signup Here</h1>
            <div class="sign-form ">
                <form action="signup.js" method="POST"  >
                    <label> Name
                        <input type="text" name="name" />
                    </label>
                    <br/>
                    <label>
                        Email
                        <input type="email" name="email" />
                    </label><br/>

                    <label>Username
                        <input type="text" name="uname" />
                    </label><br/>
                    <label>password
                        <input type="password" name="pword" />
                    </label><br/>

                    <button type="submit" onclick=""> Register</button>
                </form>

            </div>
    
        </div>
    </div>
</section>

</div>

    );
    
}

export default Home;