import React, { useState } from 'react'; 




const Contact = () => {

const[data, setData] = useState({
  contact_fullname: "",
  contact_company: "",
  contact_phone: "",
  contact_email: "",
  contact_msg: "",
  cate: "",
});


const InputEvents = (event) =>{
const{ name, value} = event.target;

setData((prevdata) => {
return {
  ... prevdata,
  [name]: value, 
};

});

};

const formSubmit = (e) =>{
  e.preventDefault();
  alert(`${data.contact_fullname}`);

};

    return (

   <>

<header class="contact-banner"><div class="contact-top"><h2 class="haveheart haveheart-white">get in</h2><h1>TOUCH</h1></div>      
      <span class="ellepise_one"></span><span class="ellepise_two"></span>  

    <div class="animation-container force3d" 
    style={{transform: 'translate3d(0px, 0px, 0px) rotate(0deg) scale(1)',
     opacity: '1',
      left: '-389.807px',
       top: '1862.73px',
        width: '269.753px',
      height: '168.5px',
       zIndex: '153',
        animationName: 'animation_8',
       animationDuration: '7.6s',
       animationIterationCount: 'infinite',
       animationDirection: 'normal',
       animationFillmode: 'both',
        animationPlaystate: 'running', 
        paddingTop:'500px'}} >
          

          <style>{`
          @keyframes animation_8 {
	0% {transform: translate3d(0px,0px,0) rotate(0deg) scale(1); opacity: 1; animation-timing-function: linear}
	100% {transform: translate3d(1447px,-900px,0) rotate(5deg) scale(1); opacity: 1; }
}
`}</style>

  
        <div className="rmwidget widget-picture"  style={{
          left: '3.87651px', 
        top: '6.7498px',
        width: '262px',
         height: '155px',
         zIndex: '153',
         transform: 'rotateX(0deg) rotateY(0deg) rotateZ(-3deg)',
        }} >
          
          <img src="assets/images/aeroplane-image.png" 
          style={{opacity: 0.81}} />
        
          </div>
          </div>
        
          <div class="rmwidget text force-repaint-content" 
          style={{left: '71.4px',
           top: '237px',
            width: '126px',
             height: '22px',
              zIndex: '116'}} >
        
          </div>



</header>

 <div class="clearfix"></div>  
 
  <section class="form-logo-block contact-main">
  <div class="container">
      <div class="row">
        <div class="col-md-12 contact-form"><div class="form-bottom-sec col-md-12">
                
            <div class="col-md-10 form-right-sec form-whitebg contact-formwhitebox"> 
            <span class="isoCertified-img"></span>    
               <div class="row"><h2>We’d love to hear from you</h2><p>Send us a message and we’ll respond as soon as possible</p>   


   
  
              <form id="contact_form"  onSubmit={formSubmit} >

                <input type="hidden"  name="mode" value="send_message" />

                <ul class="raqbox_new">
                  <li class="active"><div class="form-group col-md-4 col-sm-6 col-xs-12">
                    <div class="cover">
                      <input type="text"
                       class="form-control"
                        placeholder="Enter Name" 
                       id="contact_fullname" 
                       name="contact_fullname" 
                       value={data.contact_fullname}
                       onChange={InputEvents}
                       />

                      <label for="name">name</label>
                      </div>
                    </div>
                    <div class="form-group col-md-4 col-sm-6 col-xs-12">
                      <div class="cover">
                      <input type="text"
                       class="form-control"
                        placeholder="Enter Company Name"  
                       id="contact_company"
                         name="contact_company"
                         value={data.contact_company}
                       onChange={InputEvents}
                         />

                      <label for="company">company</label>
                      </div>
                    </div>
                    <div class="form-group col-md-4 col-sm-6 col-xs-12"><div class="cover">
                      <input type="text" 
                      class="form-control"
                       placeholder="Enter Phone Number"
                         id="contact_phone"
                          name="contact_phone" 
                          value={data.contact_phone}
                          onChange={InputEvents}
                          />

                      <label for="phone">phone</label>
                      </div>
                    </div>
                    <div class="form-group col-md-4 col-sm-6 col-xs-12"><div class="cover">
                      <input type="text" 
                      class="form-control"
                       placeholder="Enter Email"
                         id="contact_email"
                          name="contact_email"
                          value={data.contact_email}
                          onChange={InputEvents}
                          />

                      <label for="email">email</label>
                      </div>
                    </div>
                          <div class="form-group form-group-text col-md-12 col-sm-6 col-xs-12">

                     <select class="form-control"
                       onChange={InputEvents} 
                       name="cate"
                       value={data.cate}
                        id="cate"
                         style={{ lineHeight:'40px'}} >

                        <option value="">Select Your Category</option>
                        <option value="1">General Enquiry</option>
                        <option value="2">Suggestions</option>
                        <option value="3">Question</option>
                        <option value="4">Schedule a Meeting</option>
                        <option value="5">Website Design</option>
                        <option value="6">Custom Web Development</option>
                        <option value="7">Mobile Apps Development</option>
                        <option value="8">Website Maintenance</option>
                        <option value="9">Digital Marketing</option>
                        <option value="10">Online Reputation Management</option>
                        <option value="11">Free Website Audit</option>
                      </select>

                      <label for="Select Category">Select Category</label>
      
                    </div>

                    <div id="meetingFields" style={{display:'none'}}>
                      <div class="form-group col-md-4 col-sm-6 col-xs-12">
                        <input type="text"
                         class="form-control"
                          id="meet"
                           name="meet"
                           placeholder="Meeting Date" />

                           <label for="Date">Meeting Date</label></div>

                      <div class="form-group col-md-4 col-sm-6 col-xs-12">
                        <input type="text"
                         class="form-control"
                          id="time"
                           name="time"
                           placeholder="Prefered Time" />
                           
                           <label for="Time">Time</label></div>

                      <div class="form-group form-arrow-down col-md-4 col-sm-6 col-xs-12">
                        <select 
                        class="form-control" 
                        name="user_timezone" 
                        id="user_timezone"
                         style={{ lineHeight:'40px'}} >

                          <option value="">Select Time Zone</option>
     
                           </select>
                        <label for="Time Zone">Time Zone</label>
                      </div>
                      <div class="form-group form-arrow-down col-md-4 col-sm-6 col-xs-12">
                        <select
                         class="form-control"
                          onChange="selectMode(this.value);" 
                          name="skype"
                           id="skype"
                            style={{ lineHeight:'40px'}}  >
                           
                          <option value="">Select Meeting Mode</option>
                          <option value="1">Skype</option>
                          <option value="2">Phone</option>
                          <option value="3">Office</option>
                          <option value="4">Other</option>
                        </select>

                        <label for="Meeting Mode">Meeting Mode</label>

                      </div>

                      <div class="form-group col-md-4 col-sm-6 col-xs-12" id="CatMode" style={{display:'none'}} >
                        <input type="text"
                         name="contact"
                          id="contact" 
                          class="form-control"
                           placeholder="Contact Details" />
                      </div>
                    </div>
                                        <div class="form-group form-group-text col-md-12 col-sm-6 col-xs-12"><div class="cover">
                      <textarea class="form-control" 
                      rows="5" 
                      placeholder="Type Message Here"
                       id="contact_msg"
                        name="contact_msg"
                        value={data.contact_msg}
                       onChange={InputEvents}
                        ></textarea>

                      <label>Message</label>
                      </div>
                    </div>                    
                    <div class="clearfix"></div>
                     <div class="col-md-12 col-sm-6 col-xs-12">
                    <button  id="contact_form_submit" type="button" class="submit_btn cntct-btn cntct-btn1">SUBMIT</button>
                    </div>
                  </li>   

                </ul>



              </form> 

              </div></div>
            <div class="col-md-2 form-left-sec">
               <div class="row">
              <ul>
              <li><img src="assets/images/iso-certified-company-logo.png" alt="ISO Certified Logo" /></li>
              <li><img src="assets/images/inbound-partner.png" alt="Inbound Logo" class="img-responsive"/></li>     
                <li><img src="assets/images/google-adwords2-certified-badge-footer.png" alt="Adword Logo" class="img-responsive"/></li>
                 <li><img src="assets/images/msme-logo.png" alt="Msme Logo" class="img-responsive"/></li>
                  <li><img src="assets/images/ima-logo.png" alt="ima Logo" class="img-responsive"/></li>
                   <li><img src="assets/images/goodfirms-top-company-badge.png" alt="Goodfirms Logo" class="img-responsive"/></li> 
                  <li><img src="assets/images/webaward-logo.png" alt="Webaward Logo" class="img-responsive"/></li> 

                  <li><div><a href="https://www.itfirms.co/top-mobile-app-development-companies/" rel="nofollow" target="_blank"><img width="125px" src="https://www.itfirms.co/wp-content/uploads/2020/01/mobile-app-developer-2020.png" /></a></div></li> 

                  <li><div><a href="https://www.expertise.com/ca/orange/web-developers#TechnoAce" rel="nofollow" target="_blank"><img width="110px" src="assets/images/Best-Orange-Web-Developers-Badge.png" alt="Best Orange Web Developers Badge" /></a></div></li>                
              </ul>                
                </div>
            </div>
          </div>          
        </div>                

        <div class="col-md-12 col-sm-12  col-xs-12 contact-list">
           <div class="email-heading"><h2>Email or call</h2><span>We're listening</span></div>
          <div class="col-md-4 col-xs-12">
          <div class="email-boxes"><h2>sales</h2><p>India : +91-9799-992-111<br />Global : +91-9680-450-598</p>
          <a href="mailto:info@technoace.in">Email - info@technoace.in</a>
           </div>
           </div>
          <div class="col-md-4 col-xs-12">
           <div class="email-boxes"><h2>support</h2><p></p><a href="mailto:info@technoace.in">Email - info@technoace.in</a>          
           </div></div>
          <div class="col-md-4 col-xs-12"> 
          <div class="email-boxes"><h2>Careers</h2><p>India : +91-9799-992-111</p><a href="mailto:hr@technoace.in">Email - info@technoace.in </a> 
          
          </div></div>
          <div  class="clearfix"></div>
 </div>
  
      </div></div>
  </section>

   
    
    <div class="clearfix"></div>

</>
    );

};



export default Contact; 
  

