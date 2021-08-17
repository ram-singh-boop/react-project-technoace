import React from 'react'; 
import { NavLink } from 'react-router-dom';

const Mobileappportfolio = () => {

    return (
   <>

<header> 
  
      <section class="portfolio-listing-block-cat ">
        <div class="container_new">
                <div class="row">
                    <div class="box-with-text">
                    
                                 <h1>MOBILE APP<br />PORTFOLIO</h1>
                     <p>MOBILE APP are the base of any digital asset, whether it's a website, web application or a mobile app. 
                         See some of our aesthetically amazing and functional design portfolios.</p>
            <p class="padding_left">2 Projects under MOBILE APP . </p>        
        
                    
                </div>
            </div>
        </div>
    </section>
 
</header>



<section class="port-listing-blocktop">
  <div class="container_new">
    <div class="row">

<div id="myBtnContainer">
  <NavLink to="/Allportfolios" class="btn "><span class="cat-icons all-icon"></span><br />All Portfolio</NavLink>

   <NavLink to="/Mobileappportfolio"  class="btn  active"><span class="cat-icons uiux-icon"></span><br />Mobile App</NavLink>
    
    <NavLink to="/Ecoomerceportofolio"  class="btn  "><span class="cat-icons port-ecommercs-icon"></span><br />E-Commerce Websites</NavLink>
    
    <NavLink to="/Websiteportfolio"  class="btn  "><span class="cat-icons port-website-icon"></span><br />Websites</NavLink>
    
    {/* <NavLink to="/Webapplications"  class="btn  "><span class="cat-icons webapp-port-icon"></span><br />Web Applications</NavLink>
    
    <NavLink to="/Mobileapps"  class="btn  "><span class="cat-icons port-mobileapps-icon"></span><br />Mobile Apps</NavLink>*/}
    
</div>


</div>

</div>

</section>


<section id="port-section">


    <div class="portFolio-bg portnew-listing-block paddingComm message_box" data-serial-num="1" data-port-num="1252" style={{ background:'#57ad2d', color:'#ffffff' }} >
                             
<div class="container_new">
<div class="portdelails-blockpage">
<div class="home-project home-project--iphone android_portfolio" data-portfolio="1">

                            <div class="home-project__inner">
                             <div class="home-project__clip">
                                    <div class="home-project__phone">
                                      
                                        <div class="phone__responsive">
                                            <div class="phone__responsive__inner">
                                            
                                                <div class="phone__responsive__bg">
                                                    <div class="responsive__bg__wrap" data-reveal-bg="1">
                                            <div class="phone-innerimg">
                                               
                                              <img src="assets/images/2021-04-10.webp" />
                      
                                                    </div>
                          </div>
                                                </div>
                                               
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="wrap slide-hometext slidehometext-listing  ">
                                <div class="left_part">
                                  <h3>DAWA Deal App</h3>
                                  <p class="title_1">DAWADEAL collects information from its users when they register to gain access to our services or at other specific instances when they are requested to provide us with their personal & business information. </p>

                
                                  <a href="/Contact" class="see_portd">See Details</a>
                                  <a href="/Requestqote" class="see_portd see_portd-requestbtn">Request a free quote</a>
                                </div>
                                <div class="rightport_part">
                                  <div class="php_logo_text">

                                   
                                    <h5>Technologies<br /> &amp; TOOLS USED</h5>

                                                        <span class="php-logo-inner">
                  <div class="iconmiddler">
                 <img src="assets/images/php4.png" />
                 <p>Php</p>
                  </div>
                 </span>
                <span class="php-logo-inner">
                  <div class="iconmiddler">
                 <img src="assets/images/js-icon.png" />
                 <p>JS</p>
                  </div>
                 </span>
                <span class="php-logo-inner">
                  <div class="iconmiddler">
                 <img src="assets/images/ios.png" />
                 <p>IOS</p>
                  </div>
                 </span>
                <span class="php-logo-inner">
                  <div class="iconmiddler">
                 <img src="assets/images/android.png" />
                 <p>Android</p>
                  </div>
                 </span>
                          </div>
                      </div>
    </div>
    </div>
    </div>
  
        </div>
        </div>
    </div>


      
             

    
      
           

    
       
   
                <span id="loading_process" class="loading_css fl" style={{display:'none'}}>
        
        <center><h3><p style={{ textTransform:'capitalize' }} > Loading more projects... <img src="assets/images/Preloader_7.gif" /></p></h3></center>
        </span>
        
        <span id="final_result" class="fl" style={{display:'none'}} > </span>
      
         

</section>



</>
    );

};



export default Mobileappportfolio; 
  

