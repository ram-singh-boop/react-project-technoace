
import React from "react";
import { NavLink } from 'react-router-dom';

const Footer = () => {

  return (

  <>

{/*--footer start--*/} 
  

<section className="helpyou paddingComm">
    <div className="container_new">
        <div className=" col-md-offset-6 col-md-6 col-sm-12 col-xs-12 helpyou-right">
            <h3><span><i className="fa fa-heart" aria-hidden="true"></i></span>We can help</h3>
            <h2>Now is the time, you start getting more online</h2>
            <p>Do you have a project you want to discuss or you simply are looking for marketing & strategic advice, just write to us...</p>
            <NavLink className="helpbuton" to="/Requestqote">Request a Free Quote</NavLink>
            
         </div>
    </div>
</section>

<div className="clearfix"></div>



<div className="greylogos">
    <div className="container_new hidden1 visible1 animated fadeInUp">
        <div className="row paddingComm4">
            <div className="col-md-12 col-sm-12 col-xs-12">
                <div className="helpingman">
                    <img src="assets/images/Untitled-1.webp" alt="" />
                </div>
            </div>
            <div className="col-md-12 col-sm-12 col-xs-12 pull-right">
                <div className="member-logo-comm member-logo-footer">

                    <ul className="listsi">
                    <li><img src="assets/images/New-Clutch-Tagline-logo.png" alt="" /></li>
                        <li><img src="assets/images/Google-review-and-rating-footer.webp" alt="" /> </li>
        				<li className="goodfirm-padding"><a target="_blank" href="" rel="nofollow">
                        <img src="assets/images/top-web-development-company-logo.png" 
                        alt="" /></a>
                        </li>                          
                        <li><img src="assets/images/dakks-certification-logo.webp" alt="" /></li>
                        <li><img src="assets/images/mobile-web-award.png" alt="" /></li>
                        <li><img src="assets/images/google-adwords2-certified-badge-footer.webp" alt="" /></li>
                        <li><img src="assets/images/ima-logo-footr.png" alt="" /></li>
                        <li><img src="assets/images/msme-logo-footr.png" alt="" /></li>                      
                    </ul>
</div>      </div>
        </div>
    </div>
</div>

<div className="clearfix"></div>




<div id="paymentEnquiryForm" className="modal paymentEnquiryForm fade" role="dialog">
  <div className="modal-dialog paymentEnquiryFormPopup">

    {/*-- Modal content--*/}

    <div className="modal-content">
		<form action="" id="payment_form_new" name="payment_form_new" method='POST'>
            <div className="modal-content">
               <div className="paymentstep-one_new">
               <div className="modal-header">
                   <button type="button" className="close" data-dismiss="modal">×</button>
                   
                </div>
                <div className="modal-body"> 
                 <h4>Send Your Enquiry</h4>
                    <div className="raq_top_part form-right-sec">
                        <div className="step1">
                            
                            <div className="form-group paymentmethod paymentmethod-label" id="">
                               <label for="sel1" className="top-gap" id="package_type_lbl_new"></label>
                               <select className="select-field" id="package_type_drp_new" name="pack_name"></select>
                            </div>
                                                      
                            <p>Enter these details so we can contact you to discuss further.</p> 
                            <div className="req_input form-group paymentform-bottom">
                                <div className="cover">
                                    
                                    <input type="text" className="input_check form-control" placeholder="Name"  name="billing_name" id="billing_name" value="" />
                                    <label for="Your Full Name">Your full name</label>
                                </div>
                                <div className="error"></div>
                            </div>
                            
                            <div className="req_input form-group paymentform-bottom">
                                <div className="cover">
                                    
                                    <input type="text" className="input_check form-control" placeholder="Email" id="billing_email" name="billing_email" value="" />
                                    <label for="Email Address">Email Address</label>
                                </div>
                                <div className="error"></div>
                            </div>
                            
                            <div className="req_input form-group paymentform-bottom">
                                <div className="cover"> 
                                    
                                    <input type="text" className="input_check form-control" placeholder="Phone" id="billing_tel" name="billing_tel" value="" />
                                    <label for="Your Mobile/Phone">Phone</label>
                                </div>
                                <div className="error"></div>
                            </div>
                            
                            <div className="req_input form-group paymentform-bottom">
                               <div className="g-recaptcha" data-sitekey="6Lf2AlUUAAAAADFBbo5dLjAt5PCHzxOUu9_hWJlt"></div>
                            </div>
                            
                        </div>


                    </div>
                   
                </div>
               <div className="modal-footer"><input type="submit" className="paymentpop-btn" value="Submit Enquiry" name="sbmt_enq"/></div>
               </div>
    </div>
    </form>


    </div>

  </div>
</div>






<footer id="page9" className="par">


<div className="bottom_part">
        <a href="index.html" className="footer-toplogo"><img src="assets/images/footerlogo.png"
         alt="Web Design Company Footer Logo" className="img-responsive" /></a>
        <div className="container_new">
            <div className="row">
               

                <div className="col-md-12 col-sm-12 col-lg-12 col-xs-12 ">
                    <div className="row">
                        <div className="connettwus">
                            
                            <ul>
                                <li><a target="_blank" rel="nofollow" href="https://www.facebook.com/technoace/" className="mytooltip" data-toggle="tooltip" title="Facebook" data-placement="top"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                <li><a target="_blank" rel="nofollow" href="https://twitter.com/technoace1" className="mytooltip" data-toggle="tooltip" title="Twitter" data-placement="top"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                <li><a target="_blank" rel="nofollow" href="https://in.linkedin.com/company/technoace-india" className="mytooltip" data-toggle="tooltip" title="Linkedin" data-placement="top"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                 <li><a target="_blank" rel="nofollow" href="https://www.instagram.com/thetechnoace/" className="mytooltip" data-toggle="tooltip" title="Instagram" data-placement="top"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                                
                                 <li><a target="_blank" rel="nofollow" href="https://www.youtube.com/channel/UC2SQ1ISqilHMB_zGginDNsA" className="mytooltip" data-toggle="tooltip" title="Youtube" data-placement="top"><i className="fa fa-youtube" aria-hidden="true"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="clearfix"></div>

                <div className="addressBlock justify-content-center">
                 
                    <div className="offset-sm-2 col-md-6 col-sm-6 addressblk contact-cards">
                        
                        <fieldset>
                            <legend><img src="assets/images/india-flags.svg" /> &nbsp;india</legend>
                            <div className="addresspdding">
                                <div itemscope="" itemtype="https://schema.org/Organization">
                                <h3>
                                    <span itemprop="name">TechnoAce Consultancy Services Private Limited</span>&nbsp;                                    
                                </h3><br />
                                 <div itemprop="address" itemscope="" itemtype="https://schema.org/PostalAddress">
                                <p><span itemprop="streetAddress">Jaipur, Rajasthan ,</span><span itemprop="addressCountry">India</span>
                                <span itemprop="postalCode"> - 302020</span><br /><br />
                                <i className="fa fa-envelope"></i>    <span itemprop="email">info@technoace.in | </span>
                     <i className="fa fa-skype"></i> <span itemprop="skype">piyushjoshi.pj </span>
                                </p>
                            </div></div></div>
                            <div className="mobilecomm" itemscope="" itemtype="https://schema.org/Organization">
                            <i className="fa fa-2x fa-phone"></i>&nbsp;  <a href="tel:+91-9799-992-111"><p> <span itemprop="telephone">+91-9799-992-111</span></p></a>
                                </div>
                        </fieldset>
                            
                    </div>
                    <div className="col-md-4 col-sm-6 addressblk">

                 

                    </div>
                </div>
         </div>
        </div>
  </div>





<div className="copyrightftr-block paddingComm1">
        <div className="container_new">
            <div className="col-md-6 col-sm-12 col-lg-6 col-xs-12 copywhiteftr-left">
                <p>&copy; Copyright 2021 ,TechnoAce Consultancy Services Private Limited. All Rights Reserved</p>     
            </div>
            <div className="col-md-6 col-sm-12 col-lg-6 col-xs-12 copywhiteftr-right">
            <p>
            <NavLink to="/services">Our Services</NavLink>
            
           <NavLink className="slash-vertical" to="/blog">Blog</NavLink>             

            <NavLink className="slash-vertical" to="/contact">Contact Us</NavLink>

            <NavLink className="slash-vertical" to="/PrivacyPolicy">Privacy Policy	</NavLink>

             
            </p>
            </div>            
        </div>               
    </div>





</footer>





</>

 );

};


export default  Footer;