import React from 'react'; 
import { NavLink } from 'react-router-dom';


  function openTab() {
    //window.open('/Allportfolios');
  }

const Navbar = () => {

    return (
   <>


     {/* <div className="navbar-wrapper par desktop-nav">

                                <ul className="navbar navbar-inverse">
                                        <li className="navbar-header">
                                                <NavLink to="/" className="full-logo"><img src="assets/images/red-fi-Technoace02.webp" className="img-responsive" alt="Web Design Company Logo" /></NavLink>
                                                <NavLink to="/" className="mobile-logo"><img src="assets/images/67.png" className="img-responsive" alt="Web Design Company Mobile Logo" /></NavLink>
                                        </li>
                                        <button type="button" className="navbar-toggle" data-toggle="push" data-target="#navbar" ><span className="sr-only">Toggle navigation</span><span className="icon-bar"></span><span className="icon-bar"></span><span className="icon-bar"></span> </button>
                                        <li className="pull-right call-detail">
                                                <div itemscope itemtype="https://schema.org/Organization">
                                                        <span className="topBlueTxt" itemprop="address" itemscope itemtype="https://schema.org/PostalAddress">
                                                                <span itemprop="addressCountry">

	   			India: <a href="tel:9799-992-111" itemprop="telephone" className="cioyun"><strong>+91-9799-992-111</strong></a>

                                                                </span>
                                                        </span>
                                                        <NavLink to="/requestqote" className="raqblc request">Discuss your Project</NavLink>
                                                </div>
                                        </li>

                                        <li className="collapse navbar-collapse pull-left" id="bs-example-navbar-collapse-2">
                                                <ul className="nav navbar-nav navbar-right">

                                                <li className="dropdown"><NavLink to="/services" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown">Services  <i className="entypo-dot hidden-xs"></i></NavLink>
                                             </li>

                                             <li className="dropdown"><NavLink to="/Allportfolios"  target={"_blank"} onClick={openTab} >Portfolios  <i className="entypo-dot hidden-xs"></i></NavLink>
                                             </li>
                                             <li className="dropdown"><NavLink to="/contact" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown">contact us  <i className="entypo-dot hidden-xs"></i></NavLink>
                                             </li>

                                             <li className="dropdown"><NavLink to="/requestqote" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown">Request A Quote   <i className="entypo-dot hidden-xs"></i></NavLink>
                                             </li>
                                             <li className="dropdown"><a href="http://technoace.in/blog/" className="dropdown-toggle"  >blog   <i className="entypo-dot hidden-xs"></i></a>
                                             </li>

 
                                                </ul>
                                        </li>
                                </ul>
                        </div>


*/}

                        {/*****nav add*********** */}



                        <div className="navbar-wrapper par mobile-show push_menu dotsshow">
                                <ul className="navbar navbar-inverse push-nav">

                                        <li className="navbar-header">
                                          <NavLink to="/" className="full-logo"><img src="assets/images/red-fi-Technoace02.webp" className="img-responsive" alt="Web Design Company Logo" /></NavLink>
                                                <NavLink to="/" className="mobile-logo"><img src="assets/images/67.png" className="img-responsive" alt="Web Design Company Mobile Logo" /></NavLink>

                                              


                                        </li>




   






                                        <button type="button" className="navbar-toggle" data-toggle="push" data-target="#navbar" ><span className="sr-only">Toggle navigation</span><span className="icon-bar"></span><span className="icon-bar"></span><span className="icon-bar"></span> </button>
                                        <li className="pull-right call-detail">
                                                <div itemscope itemtype="https://schema.org/Organization">
                                                        <span className="topBlueTxt" itemprop="address" itemscope itemtype="https://schema.org/PostalAddress">
                                                             <span itemprop="addressCountry">

	   			India: <a href="tel:9711339464" itemprop="telephone" className="cioyun"><strong>+91-9799-992-111</strong></a><br />

                                                                </span>
                                                        </span>

                                                        <a href="/Requestqote" className="raqblc request">Discuss your Project</a>
                                                </div>
                                        </li>

                                        <li className="push navbar-push pull-left navbar-push-left" id="navbar">

                                                <ul className="nav navbar-nav navbar-right">

                                                     
                                      
         

         <li className="dropdown"><a href="javascript:void(0)" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown">Digital Marketing <i className="entypo-dot hidden-xs"></i></a>
                                                                <div className="dropdown-menu" role="menu">
                                                                        <div className="fullMenu">
                                                                                <div className="container">
                                                                                        <div className="row">
                                                                                                <div className="col-md-9 col-sm-6 col-xs-12 box-menu-drop">


                                                                                                   <div className="col-xs-12 col-md-3 col-sm-6 menu-align-sec">
                                                                                                                <NavLink to="/Allmarketingservices" className="drop-main-menu">
                                                                                                                        <span className="drop-common-img cust-menu-design"></span>
                                                                                                                        <p>  All Marketing Services</p>
                                                                                                                </NavLink>
                                                                                                        </div>

                                                                                                        
                                                                                                        <div className="col-xs-12 col-md-3 col-sm-6 menu-align-sec">
                                                                                                                <NavLink to="/Websiteaudit" className="drop-main-menu">
                                                                                                                        <span className="drop-common-img cust-menu-design"></span>
                                                                                                                        <p>    Website Audit</p>
                                                                                                                </NavLink>
                                                                                                        </div>

                                                                                                     

                                                                                                     {/*  <div className="col-xs-12 col-md-3 col-sm-6 menu-align-sec">
                                                                                                                <NavLink to="/Seo" className="drop-main-menu">
                                                                                                                        <span className="drop-common-img cust-menu-design"></span>
                                                                                                                        <p>    SEO</p>
                                                                                                                </NavLink>
                                                                                                        </div>*/} 

                                                                                                        <div className="col-xs-12 col-md-3 col-sm-6 menu-align-sec">
                                                                                                                <NavLink to="/smo" className="drop-main-menu">
                                                                                                                        <span className="drop-common-img cust-menu-design"></span>
                                                                                                                        <p>SMO / SMM</p>
                                                                                                                </NavLink>
                                                                                                        </div>
                                                                                                        <div className="col-xs-12 col-md-3 col-sm-6 menu-align-sec">
                                                                                                                <NavLink to="/Ppc" className="drop-main-menu">
                                                                                                                        <span className="drop-common-img cust-menu-design"></span>
                                                                                                                        <p>PPC</p>
                                                                                                                </NavLink>
                                                                                                        </div>
                                                                                                </div>
                                                                                                <div className="col-md-3 col-sm-6 col-xs-12 list-menu-drop">
                                                                                                        <ul className="list-inner-drop">
                                                                                                                <li><NavLink to="/Emailmarketing">Email Marketing</NavLink></li>
                                                                                                        </ul>
                                                                                                        <button className="close-button">&nbsp;</button>
                                                                                                </div>

                                                                                        </div>
                                                                                </div>
                                                                        </div>

                                                                </div>
                                                        </li>

         <li className="dropdown"><a href="javascript:void(0)" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown">IT consultation <i className="entypo-dot hidden-xs"></i></a>
                                                                <div className="dropdown-menu" role="menu">
                                                                        <div className="fullMenu">
                                                                                <div className="container">
                                                                                        <div className="row">
                                                                                                <div className="col-md-9 col-sm-6 col-xs-12 box-menu-drop">
                                                                                                        
                                                                                                        {/*<div className="col-xs-12 col-md-3 col-sm-6 menu-align-sec">
                                                                                                                <NavLink to="/Securityaudit" className="drop-main-menu">
                                                                                                                        <span className="drop-common-img cust-menu-design"></span>
                                                                                                                        <p>       Security Audit (VAPT) </p>
                                                                                                                </NavLink>
                                                                                                        </div>*/}
                                                                                                        <div className="col-xs-12 col-md-3 col-sm-6 menu-align-sec">
                                                                                                                <NavLink to="/Websites" className="drop-main-menu">
                                                                                                                        <span className="drop-common-img cust-menu-design"></span>
                                                                                                                        <p>        Website </p>
                                                                                                                </NavLink>
                                                                                                        </div>

                                                                                                        <div className="col-xs-12 col-md-3 col-sm-6 menu-align-sec">
                                                                                                                <NavLink to="/Mobileapps" className="drop-main-menu">
                                                                                                                        <span className="drop-common-img cust-menu-design"></span>
                                                                                                                        <p>    Mobile Application </p>
                                                                                                                </NavLink>
                                                                                                        </div>


                                                                                                         <div className="col-xs-12 col-md-3 col-sm-6 menu-align-sec">
                                                                                                                <NavLink to="/Ecommerce" className="drop-main-menu">
                                                                                                                        <span className="drop-common-img cust-menu-design"></span>
                                                                                                                        <p>    Ecommerce </p>
                                                                                                                </NavLink>
                                                                                                        </div>

                                                                                                 
                                                                                                </div>

                                                                                               

                                                                                        </div>
                                                                                </div>
                                                                        </div>

                                                                </div>
                                                        </li>


<li className="dropdown"><a href="javascript:void(0)" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown">Technologies <i className="entypo-dot hidden-xs"></i></a>
                                                                <div className="dropdown-menu" role="menu">
                                                                        <div className="fullMenu">
                                                                                <div className="container">
                                                                                        <div className="row">

                                                                                                <div className="col-md-9 col-sm-6 col-xs-12 box-menu-drop">
                                                                                                        
                                                                                                      <div className="col-xs-12 col-md-3 col-sm-6 menu-align-sec">
                                                                                                                <NavLink to="/Meanstack" className="drop-main-menu">
                                                                                                                        <span className="drop-common-img cust-menu-design"></span>
                                                                                                                        <p>  MEAN  </p>
                                                                                                                </NavLink>
                                                                                                        </div>

                                                                                                        <div className="col-xs-12 col-md-3 col-sm-6 menu-align-sec">
                                                                                                                <NavLink to="/Php" className="drop-main-menu">
                                                                                                                        <span className="drop-common-img cust-menu-design"></span>
                                                                                                                        <p>  PHP  </p>
                                                                                                                </NavLink>
                                                                                                        </div>
                                                                                                        
                                                                                                     
                                                                                                </div>

                                                                                               

                                                                                        </div>
                                                                                </div>
                                                                        </div>

                                                                </div>
                                                        </li>





                                             
                                                     <li className="dropdown"><NavLink to="/About">About us <i className="entypo-dot hidden-xs"></i></NavLink></li>

                                                        <li className="dropdown"><NavLink to="/Allportfolios">Portfolio  <i className="entypo-dot hidden-xs"></i></NavLink></li>


                                                        <li className="dropdown"><NavLink to="/contact">contact us <i className="entypo-dot hidden-xs"></i></NavLink></li>

                                                        <li className="dropdown">
                                                                <NavLink to="/requestqote">Request A Quote <i className="entypo-dot hidden-xs"></i>
                                                                </NavLink>
                                                                </li>

                                                        <li className="dropdown"><a href="http://technoace.in/blog/">blog <i className="entypo-dot hidden-xs"></i></a></li>
                                                </ul>
                                                <button id="mobile_close_button" className="close-button navigation-close">&nbsp;</button>
                                        </li>




                                </ul>


<div class="newpositi">

<li className="collapse navbar-collapse pull-left" id="bs-example-navbar-collapse-2 newe-menu" >

                                                <ul className="nav navbar-nav navbar-right">

                                                <li className="dropdown"><NavLink to="/services" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown">Services  <i className="entypo-dot2 hidden-xs"></i></NavLink>
                                             </li>

                                             <li className="dropdown"><NavLink to="/Allportfolios"  target={"_blank"} onClick={openTab} >Portfolios  <i className="entypo-dot2 hidden-xs"></i></NavLink>
                                             </li>
                                             <li className="dropdown"><NavLink to="/contact" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown">contact us  <i className="entypo-dot2 hidden-xs"></i></NavLink>
                                             </li>

                                             <li className="dropdown"><NavLink to="/requestqote" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown">Request A Quote   <i className="entypo-dot2 hidden-xs"></i></NavLink>
                                             </li>
                                             <li className="dropdown"><a href="http://technoace.in/blog/" className="dropdown-toggle"  >blog   <i className="entypo-dot2 hidden-xs"></i></a>
                                             </li>

 
                                                </ul>

                                        </li>   

                        </div>
  </div>


</>
    );

};



export default Navbar; 
  

