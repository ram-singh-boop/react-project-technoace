import React from 'react'; 
import Servicescards from './Servicescards';


const Services = () => {

    return (
   <>

<header>

  <div class="servicesBanner servicesBanner_new">
    <div class="container_new relative">
      <div class="col-lg-12">
        <div class="row"><div class="col-lg-5 col-sm-5 bannerAlign padding-right-40">
            <div class="row">
              <div class="build_text"><h1>We Build<br />Business with<br /> 360° Solutions </h1></div></div></div>
          <div class="col-lg-7 col-sm-7 bannerAlign headiing_div padding-left-40">
            <h3>Creative web, mobile, and marketing services for online brand growth</h3>
            <p>Our niche services range from professional web design &amp; maintenance to upscaled 
                integrated web/mobile development. This has benefitted several existing &amp; business startups globally.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</header>
   
<section class="whyandroid-app popular-appblockgreen androidwhychoose webdesignServices paddingComm5">
    <div class="container_new hidden1 visible1 animated fadeInUp">
      <div class="row">

        <div class="clearfix"></div>

        <div class="perfect-team-middletxt-right android-services-box">


        <Servicescards 
        
        title="Technology"
        desc="TechnoAce provides complete web design and development services at the most 
        competitive prices. For businesses, we offer fully responsive and mobile-optimized websites that convert visitors into customers."
        path="/"
        />

<Servicescards 
        
        title="CRM"
        desc="TechnoAce provides complete web design and development services at the most 
        competitive prices. For businesses, we offer fully responsive and mobile-optimized websites that convert visitors into customers."
        path="/"
        />
           <Servicescards 
        
        title="IT Consultant"
        desc="TechnoAce provides complete web design and development services at the most competitive prices. For businesses, we offer fully responsive and mobile-optimized websites that convert visitors into customers."
        path="/"
        />
           <Servicescards 
        
        title="Digital Marketing"
        desc="TechnoAce provides complete web design and development services at the most competitive prices. For businesses, we offer fully responsive and mobile-optimized websites that convert visitors into customers."
        path="/"
        />

<Servicescards 
        
        title="Sales"
        desc="TechnoAce provides complete web design and development services at the most competitive prices. For businesses, we offer fully responsive and mobile-optimized websites that convert visitors into customers."
        path="/"
        />



        

              </div>
       
      </div>
    </div>
  </section>


</>
    );

};



export default Services; 
  

