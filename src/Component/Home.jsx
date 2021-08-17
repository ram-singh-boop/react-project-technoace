import React from 'react'; 
import CreativeServices from './CreativeServices';
import Sdata from './Sdata';
import { NavLink } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import Bloglist from './Bloglist';
import Imds from '../img/company-header-image.webp';

const Home = () => {

    return (
   <>



{/*-- banner home trigger modal --*/}
<div id="page-content"></div>
<header id="page1" class="par">
  <div class="banner_div">
    <div class="container relative">
      <div class="row">
        <div class="col-md-4 col-sm-5 col-xs-12  banner_left center-responsive">
          <h1>digital experience agency...</h1>

<br />
         <p class="jennaFnt"> <Typewriter
  options={{
    strings: ['stunning ui/ux ', 'better conversion', 'amazing results'],
    autoStart: true,
    loop: true,
  }}
/></p>
          {/*<span id="demo-home" class="jennaFnt home-text-rotate">stunning ui/ux | better conversion | amazing results</span>*/}
         <br /> <p>Achieve higher ROI with our web, mobile and  marketing services in 2021.</p>
        </div>
        <div class="banner_right col-md-8 col-sm-7 col-xs-12">

          <div class="specs-guy">
            <img src={Imds}
alt="Web Design Agency Header Image"
            class="img-responsive" 
            height="589"
             width="547" />
             </div>

          <div class="pencilheader">
            <ul class="pencil-sec">
              <li class="first-nip-pencil"><img src="assets/images/pencil-icon.png" alt="Pencil Icon" height="98" width="96" /></li>
              <li class="dark-orange-bg"></li>
              <li class="dark-green-bg"></li>
              <li class="dark-red-bg"></li>
              <li class="dark-blue-bg"></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</header>

{/*-- banner homemodal --*/}



<div class="clearfix"></div>

{/*--client gallery section start--*/}

  <div class="container hidden1 visible1 animated fadeInUp">
    <div class="row padding-home-logos">
      <div class="col-md-3 col-sm-12 col-xs-12 home-member-btn">
      <NavLink to="/requestqote" class="redbtn newbtn arrowrgt"> Request A Quote </NavLink>
      </div>
      <div class="col-md-9 col-sm-12 col-xs-12 pull-right">
        <ul class="member-logo-comm">
        <li><img src="assets/images/New Clutch Tagline logo.png" width="120" alt="clutch logo" /></li>
         <li><img src="assets/images/ima-logo.png" alt="IMA Logo" /></li>
         <li><img src="assets/images/Google-review-and-rating.png" alt="Google Review And Rating"/> </li>
         <li><img src="assets/images/goodfirms-top-company-badge.png" alt="Good Firms Top Web Development Company  Badge" /></li>  
          <li><img src="assets/images/msme-logo.png" alt="MSME Logo" /></li>    
          <li><img src="assets/images/iso-certified-company-logo.png" alt="ISO Certified Web Design Company Logo" /></li>             
        </ul>
      </div>
    </div>
  </div>
{/*--client gallery section start--*/}


{/*--body container start--*/}
<div class="clearfix"></div>
<section id="page2"  class="videoBlock paddingComm par">
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-sm-12 col-xs-12">
        <h2>We&acute;re the Best in IT Business Consultation</h2>
        <p>TechnoAce India is a reputable mobile and web development firm with offices in
India. Over the last ten years, we&#39;ve served hundreds of companies and
startups in 21 countries to understand the true value of their digital investments. We&#39;ve assisted many
people in turning their ideas into successful online businesses. That&#39;s why our clients keep coming back
to us for custom web design, complex web application creation, mobile app development, internet
marketing, and digital consulting. We&#39;ve evolved and generated reusable awareness and value for our
stakeholders and prospects for each project. We enjoy learning about new concepts, cultures,
technology, attitudes, and tactics. In the truest sense, TechnoAce is an ISO 27001 Certified IT Business Consultancy
Company.</p>
      <div class="own-tag"> <span>TechnoAce India <span class="or"></span></span></div>
        
        <div class="clearfix"></div>
        <NavLink to="./ITconsultation" class="greyBtn newbtn">Read More</NavLink> <NavLink to="./Allportfolios" class="greyBtn newbtn">See Portfolio</NavLink>
         </div>
      <div class="col-md-6 col-sm-12 col-xs-12">
        <div class="home-video"> <img src="assets/images/explainer-video-cover.webp" height="318" width="570" alt="Web Design Company Explainer Video Cover" class="img-responsive" /> 
        <a class="fancybox videoIcon videoIcon-Home" href="https://www.youtube.com/watch?v=fStWI5Rkpn0&ab_channel=TechnoAceIndia">Watch Video... <i class="fa fa-play-circle-o"></i></a> </div>
      </div>
    </div>
  </div>
</section>

<div class="clearfix"></div>


<section id="page3" class="paddingComm par">
  <div class="container">
    <div class="row relative">
      <div class="col-md-5 col-sm-6 col-xs-12 padding-right-40">
        <h2 class="text-right comFontSz font-black-trans">We Build Brands with 360°<br />
        <span class="jennaFntsm redTxtClr solutionTxt line-height-cust">solutions</span></h2>
      </div>
      <div class="col-md-7 col-sm-6 col-xs-12 headiing_div padding-left-40">
        <h3>Strategic &amp; Creative Services <br />to grow your brand online</h3>
        <p>A high-level overview of TechnoAce&#39;s various IT, Digital Marketing &amp; Sales Services...</p>
      </div>
      <div class="clearfix"></div>
      <ul class="col-md-12 margin_top_36" >
        
  

 
 {Sdata.map((val, ind) => {
    return <CreativeServices key={ind} 
      imgsrc={val.imgsrc}
      title={val.title}
      description={val.description}
      links_url={val.links_url}
    />
  })}        
      
     
      </ul>
    </div>
  </div>
</section>


<div class="clearfix"></div>
<section id="page4"  class="ribben_div padding_top par">
  <div class="container">
    <div class="row relative">
      <div class="col-md-6 col-sm-6 col-xs-12 padding-right-40 headiing_div_1">
        <h2 class="text-right comFontSz">CHOOSING TECHNOACE OVER OTHERS IS  <br />
        <span class="jennaFntsm solutionTxt line-height-cust">easy</span></h2>
      </div>
      <div class="col-md-6 col-sm-6 col-xs-12 padding-left-40 home-beauty-part">
        <p><span class="jennaFntsm">A beautifully designed website</span> has the ability to emotionally bind, but this isn&#39;t enough. The websites and applications we create are
the most accurate representations of your value proposition, with the right tools to engage prospects
and promote higher conversion. These are some important factors to consider when selecting the best
website design agency for your project.</p>
      </div>
      <div class="col-md-12 col-sm-12 speak_listing ">
        <div class="col-md-8 col-sm-12 col-xs-12 ">
          <div class="row">
          
            <div class="col-md-6">
              <ul>
              <li> <span class="first_icon chose-icon-comon brand-icon"></span>
                  <div class="text_bar">
                    <h3>Certified in ISO 27001</h3>
                    <p>TechnoAce has recently received ISO 27001 certification for information security management. We are
India&#39;s most accredited IT business consultancy company, and we protect every piece of information and asset that is
critical to both our clients and ourselves.</p>
                  </div>
                </li>
                <li> <span class="first_icon chose-icon-comon speak-icon"></span>
                  <div class="text_bar">
                    <h3>Conversion is the Core</h3>
                    <p>We know the language to design and develop websites that attract, engage, and convert visitors.</p>
                  </div>
                </li>
                <li> <span class="first_icon chose-icon-comon essential-icon"></span>
                  <div class="text_bar">
                    <h3>6 Essential Elements</h3>
                    <p>We created a perfect blend of six essential elements for highly effective websites and applications.</p></div>
                </li>
                <li> <span class="first_icon chose-icon-comon proven-icon"></span>
                  <div class="text_bar">
                    <h3>Goal Driven Methodology</h3>
                    <p>We adapt the goal-based methodology to produce efficient results.</p>
                  </div>
                </li>
                <li> <span class="first_icon chose-icon-comon years-icon"></span>
                  <div class="text_bar">
                    <h3>7+ years of growth</h3>
                    <p>We value the 7+ years of mutual growth and success.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div class="col-md-6">
              <ul>
                <li> <span class="first_icon chose-icon-comon brand-icon"></span>
                  <div class="text_bar">
                    <h3>Quality Certified Agency</h3>
                    <p>Our design and development process is constantly evolving. It&#39;s just become more obvious with
9001:2015 certification.</p>
                  </div>
                </li>
                <li> <span class="first_icon chose-icon-comon inboundFocus-icon"></span>
                  <div class="text_bar">
                    <h3>Inbound Focused</h3>
                    <p>We're obsessed with <a href="">inbound methodology</a> and implement it with the right strategy.</p>
                  </div>
                </li>
                <li> <span class="first_icon chose-icon-comon happy-icon"></span>
                  <div class="text_bar">
                    <h3>Success Stories</h3>
                    <p>Our biggest payout is to see our clients growing. Read some <a href="">client's testimonials</a> here.</p>
                  </div>
                </li>
                <li> <span class="first_icon chose-icon-comon months-icon"></span>
                  <div class="text_bar">
                    <h3>12 Months Awesome Support</h3>
                    <p>Our awesome support is available even after the project is complete. You´re never left alone with a problem.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-sm-6 col-xs-12 text-center min_photo hidden-xs hidden-sm"> <img src="assets/images/marketing-professional.webp" height="520" width="307" alt="Web Design Agency Marketing Professional" class="img-responsive"/> </div>
      </div>
    </div>
  </div>
</section>
<div class="clearfix"></div>
<section class="ctaBlk button_center paddingComm1">
  <div class="container">
    <div class="">
      <div class="col-md-9 col-sm-12 col-xs-12 right_text">
        <h3>Already intrigued to know, if we can help you?<br/>Let's quickly schedule a consultation for you.</h3>
      </div>
      <div class="right_text"> <NavLink to="./contact" class="redbtn newbtn arrowrgt speatExprt">Speak to our Expert</NavLink> </div>
    </div>
  </div>
</section>
<div class="clearfix"></div>
<section id="page5" class="gray_box_div paddingComm par">
  <div class="container relative">
    <div>
      <h2>Leverage our Strategic approach</h2><h3 class="text-center">4 ingredients to building successful online business</h3>
      <div class="gray_box_listing">
        <div class="col-sm-3 box_1"> <span class="numeric-number">1</span>
          <h4>Increase Traffic</h4>
          <p>We've mastered the ever-changing art of organic traffic delivery. We understand that
traffic is the lifeblood of your website, and you don&#39;t want to sabotage it in any way.
          </p>
          </div>
        <div class="col-sm-3 box_1"> <span class="numeric-number">2</span>
          <h4>Brand Visibility</h4>
          <p>The first step in establishing brand loyalty is to increase brand visibility. Start using
TechnoAce&'s value-driven digital marketing services to raise brand awareness on the internet.</p>
          </div>
        <div class="col-sm-3 box_1">  <span class="numeric-number">3</span>
          <h4>Lead Generation</h4>
          <p>Stop squandering your time on the road. We deliver the right audience for your
website as part of our digital marketing strategy, allowing you to turn more visitors into leads. To rapidly increase the number of leads, we establish successful A/B testing landing pages, content marketing, and
other digital strategies.</p>
          </div>
        <div class="col-sm-3 box_1 last_child">  <span class="numeric-number">4</span>
          <h4>Conversion Optimization</h4>
          <p>If you haven't paid attention to your conversion rate, you&#39;re losing out on a
big opportunity for your business. We provide companies with the tools and digital strategies they need
to turn website visits and leads into customers, resulting in a significantly higher conversion rate.</p>
          </div>
      </div>
      <div class="clearfix"></div>
      <div class="leverage-button">
      <NavLink to="./Digitalmarketingconsultingagency" class="newbtn arrowrgt greyarrow">Read More</NavLink> 
      
      <a href="https://calendly.com/piyush-17/30min?month=2021-04"  class="newbtn transBtnraq arrowrgt greyarrow">Schedule a Meeting</a></div>
    </div>
  </div>
</section>
<div class="clearfix"></div>
<section id="page6" class="map_div padding_bottom_40 padding_top par happycustomer-div">
  <div class="container">
    <div class="row relative">
      <div class="col-md-5 col-sm-5 col-xs-12 padding-right-40">
        <h2 class="text-right comFontSz font-black-trans">
          Happy<br/>Customer <span class="jennaFntsm solutionTxt">testimonials</span></h2>
      </div>
      <div class="col-md-7 col-sm-6 col-xs-12 headiing_div padding-left-40">
        <h3>Don’t take our word, see what our clients have to say about us...</h3>
      </div>
      <div class="clearfix"></div>
      <div class="margin_top_40"></div>
      <div class="clearfix"></div>
      <div class="col-md-6 col-sm-12 col-xs-12">
        <div class="col-md-12" data-wow-delay="0.2s">
          <div class="carousel slide" data-ride="carousel" id="quote-carousel"> 
         
            <ol class="carousel-indicators">
                            <li data-target="#quote-carousel" data-slide-to="0" class="active"> <img class="img-responsive" height="157" width="155" alt="David Durrif, Founder, MyMum" src="assets/manager/uploads/testimonial_author/client-testimonial-mymum.jpg" /> </li>
                           </ol>
            {/*-- Carousel Slides / Quotes --*/}
            <div class="carousel-inner text-center"> 
           
                            <div class="item active">
                <blockquote>
                  <p>TechnoAce Consultancy Services managed IT services for our company, I truly appreciate the way their team is working collaboratively to make things happen before time and delivered with quality.
                     I recommend TechnoAce for their amazing analytical, management and implementation skills in IT &amp; Digital Marketing</p>
                  <small>Mr. Pushpendra Tiwari<br/>
                  <span>
                  Founder, BPS INDIA</span></small> </blockquote>
              </div>
                           
                           
                          </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-sm-12 col-xs-12">
        <div class="testimonials-video">
                    <img src="assets/images/testimonial_author/video-testimonial-cover.webp"
                     height="318" width="570" alt="Client Testimonial Video Cover" class="img-responsive" /> 
                     <a class="fancybox videoIcon videoIcon-Home" href="https://www.youtube.com/watch?v=uXsIkE64o4I&ab_channel=TechnoAceIndia">Watch Video... 
                     <i class="fa fa-play-circle-o"></i></a> </div>
      </div>
      <div class="clearfix"></div>

      <NavLink to="/Testimonials" class="testimonialLink arrowrgt-black" > Click to see more testimonials </NavLink>
</div>

  </div>
</section>
<div class="clearfix"></div>
  <div class="container">
    <div class="row">
    <div class="csrcoll">
      <ul class="logo_div">
        <li><span class=" "><img src="assets/images/bpsit.png" /></span></li>
        <li><span class=" "><img src="assets/images/2-Dubai-CBTF_Small_03-1.png" /> </span></li>
        <li><span class=" "><img src="assets/images/Dawa_Deal_325x104.png" /></span></li>
        <li><span class=" "><img src="assets/images/hearder logo-512x210.png" /></span></li>
        <li><span class=" "><img src="assets/images/12.webp" /></span></li>
        <li><span class=""></span></li>
        <li><span class=" "></span></li>
      </ul>
    </div>
      </div>
  </div>

<div class="clearfix"></div>







<section style={{position:'relative'}}>

 <div id="portfolioList" class="home-projects">
                         <div class="home-project home-project--iphone mobile_portfolio" data-portfolio="1">
                            <div class="home-project__inner" style={{ backgroundColor:'#002135', color:'#ffffff' }}>
                             <div class="home-project__clip">
                                    <div class="home-project__phone">
                                        <div class="phone__responsive">
                                            <div class="phone__responsive__inner">
                                                <div class="phone__responsive__bg">
                                                    <div class="responsive__bg__wrap" data-reveal-bg="1">
                                            <div class="phone-innerimg">

                                              <img src="assets/images/2021-04-10.webp" />
                                           {/* <video autoplay="" id="video--1" class="back_video">
                                              <source src="assets/manager/uploads/video/fieldtripfriend-mobile.mp4" type="video/mp4" />

</video>*/}
                      </div></div></div>
                                            <div class="phone__reveal">
										<div class="phone__reveal__wrap" data-reveal-wrap="1">
											
										</div></div></div></div>
                                        <div class="right_part_port">
                                <div class="logo-recentport">
                                <img src="assets/images/Dawa_Deal_325x104.png"/>
                                <h6 class="block__title" data-copy="our recent porfolios">our recent<br /> <span>portfolios</span></h6>
                                </div></div></div></div>
                                <div class="wrap slide-hometext">
                                <div class="left_part">
                                <h4>our work</h4>
    <h2>DAWA Deal App</h2>
    <p>DAWADEAL collects information from its users when they register to gain access to our services or at other specific instances when they are requested to provide us with their personal & business information. </p>
    <p> During registration, we ask the users for their name, email address, business information and other personal details. Once a user registers, the user is no longer anonymous to DAWADEAL and it is deemed that the user has given DAWADEAL the right to publish the desired business & personal details throughout its website and app.</p>
	    <div class="clearfix"></div>
    <ul class="php_text">
            <li><span> <img alt="" src="assets/images/services-icon/ios.png" />  </span></li>
            <li><span> <img alt="" src="assets/images/services-icon/android.png" /> </span></li>
            <li><span> <img alt="" src="assets/images/services-icon/json-icon.png" /> </span></li>
      </ul>                          <div class="clearfix"></div>
      <a href="/Allportfolios" class="webport-seemore-btn">View Project</a>
      <div class="clearfix"></div>
             </div></div></div></div>
</div>






<div id="portfolioList" class="home-projects">

 <div class="home-project home-project--iphone web_portfolio" data-portfolio="3">

 <div class="home-project__inner" style={{background:'#395554', color:'#ffffff' }}>

 <div class="home-project__clip"><div class="home-project__phone">
 <div class="phone__responsive"><div class="phone__responsive__inner">


 <div class="phone__responsive__bg">

 <div class="responsive__bg__wrap" data-reveal-bg="1">

 <div class="phone-innerimg">

 <img src="assets/images/portfolio/rsm.webp" />

 </div>
 </div>
 </div>
 </div>
 </div>

 <div class="right_part_port">
<div class="logo-recentport">
 <img src="https://www.vocso.com/manager/uploads/video/krabi-logo.png" />
 <h6 class="block__title" data-copy="our recent porfolios">our recent<br />  <span>
 portfolios</span></h6></div>

 </div>
 </div>
 </div>
 <div class="wrap slide-hometext"><div class="left_part"><h4>our work</h4>
 <h2>RSM Jaipur | Eduction Trust</h2><p>RSM JAipur is a education trust situated at the core of the Jaipur City. They are building truly professional and trained education specialists in association with Rajasthan Education Board. </p>
 <div class="clearfix">
 </div>
 <ul class="php_text">
 <li><span> <img alt="" src="assets/images/jquery-icon.png" /> </span></li>

 <div class="clearfix"></div><a href="http://rsmjaipur.com/" class="webport-seemore-btn">View Project</a><div class="clearfix"></div>
 </ul>
 </div>
 </div></div></div>  

</div>




</section>





<div class="clearfix"></div>





<section class="ctaBlk button_center grey-home-button paddingComm1">
  <div class="container hidden1 visible1 animated fadeInUp">
    <div class="">
      <div class="col-md-9 col-sm-12 col-xs-12 right_text">
        <h3>Already intrigued to know, if we can help you?<br/>Let's quickly schedule a consultation for you.</h3>
      </div>
      <div class="right_text"> <NavLink to="/contact" class="redbtn newbtn arrowrgt speatExprt">Speak to our Expert</NavLink> </div>
    </div>
  </div>
</section>
<div class="clearfix"></div>
 <section id="page8" class="blog-section paddingComm5 mobileapp-blog-block">
  <div class="container_new">

    <div class="row">
    <h2 class="homeblog-font">Latest Blog Posts from TechnoAce India</h2>

   <Bloglist />
    


<div class="clearfix"></div>

      <div class="text-center"> 
      <a class="newbtn newbtn-small-noarow margin_top_27" href="http://technoace.in/blog/" title="blog page" rel="bookmark"> VIEW ALL </a> </div>
    </div>
  </div>
</section>



<div class="clearfix"></div>

{/*--footer start--*/}


</>
    );

};



export default Home; 
  

