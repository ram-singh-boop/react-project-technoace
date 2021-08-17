import React from 'react'; 


{/*<style>@keyframes animation_1 {
	0% {transform: matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1); opacity: 1; animation-timing-function: linear}
	100% {transform: matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,-4472,0,0,1); opacity: 1; }
</style>*/}


const Requestqote = () => {

    return (
   <>

<header class="contact-banner rfq-banner">

    <div class="contact-top">

      <h2 class="haveheart haveheart-white">Request a</h2>

      <h1>quote</h1>

</div>      
      <span class="ellepise_one ellepise_quote1"></span><span class="ellepise_two ellepise_quote2"></span>      


      <div class="wave-effect-block">
    <div class="animation-container force3d" style={{ transform: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)',
     opacity: '1',
      left: '-766.5px',
       top: '252.43px',
       width: '9918px',
        height: '726.14px',
         zindex: '107',
         animationName: 'animation_1',
          animationDuration: '23.6s',
          animationIterationCount: 'infinite',
            animationDirection: 'normal',
             animationfillMode: 'both',
             animationplayState: 'running',
             paddingTop:'48px' }} >
      
      <style>  {` @keyframes animation_1 {
	0% {transform: matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1); opacity: 1; animation-timing-function: linear}
	100% {transform: matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,-4472,0,0,1); opacity: 1; }
 `} </style>


<div class="rmwidget widget-picture" style={{left: '0px;',
top: '0px',
width: '9918px',
height: '726.14px',
 zindex: '107' }}>

  <img src="assets/images/wave-bg-rfq.png" />

  </div>
  </div>

</div>
      {/*!--wave effect end--*/}    
      <div class="container congo-rfq"><span class="congratulations_div"></span></div>

  </header> 

    {/*--header end--*/}  
















<div class="clearfix"></div>  
 
  <section class="form-logo-block">
  <div class="container">
      <div class="row">
        <div class="col-md-12 contact-form rfqd-form req-new raq_top_part">
          <div class="form-bottom-sec col-md-12">
            <div class="col-md-10 form-right-sec form-whitebg">
            <span class="isoCertified-img"></span> 
               <div class="row"><h2>Share your requirements... </h2><p>an account manager will be in touch with you within one business day</p>              <div class="col-md-12 col-sm-12 col-xs-12 form-right-sec">
        <div id="thank_you_msg" style={{display: 'none'}}>
             <div id="congrt_msg"><div class="left_part"><h2 class="raq_congrats">Congratulations!</h2>
                <div class="clear"></div>
                <p class="raq_congrats_subheading">Your request for quote has been sent. <br />One of our representatives will be in touch with you within 1 business day. <br /><br />We really appreciate your interest in our products &amp; services and taking time <br />to submit your requirements. We hope to serve you! <br /><br />Best Regards,<br />WEB STUDIO <br /><br /><br />What would you like to do know?<br />
                <a href="free-web-design-quote.html"> Request another quote</a> &nbsp;&nbsp; or &nbsp;&nbsp;<a class="black" href="index.html">Go to homepage</a> </p></div></div>
     </div> 
        <img id="ajax_upload_image" style={{display: 'none'}} src="images/ajax-loader.gif" alt="loader" />
        <div class="row">
            <span id="id_for_hide">
          <form method="post" action="#" enctype="multipart/form-data" id="form_request_quote" name="form_request_quote" class="left_part"  >
			<input type="hidden" name="first_val" id="first_val" value="" />
			<input type="hidden" name="last_val" id="last_val" value="" />                  
          <div class="req_input fist_child form-group col-md-4 col-sm-6 col-xs-12">
            <div class="cover">
                <input type="text" name="full_name" id="full_name" placeholder="Your Full Name" class="input_check form-control" oninvalid="setCustomValidity('Plz enter your full name ')"  onchange="this.setCustomValidity('')" required autofocus />
                <label for="Name">Name</label>
            </div>
            <div class="error"></div>
          </div>
          <div class="req_input form-group col-md-4 col-sm-6 col-xs-12"><div class="cover">
               <input type="text" name="company_name" id="company_name" placeholder="Business/Company Name" class="input_check form-control"  oninvalid="setCustomValidity('Plz enter company name ')"  onchange="this.setCustomValidity('')" required autofocus/>
               <label for="Company">Company</label>
            </div>
            <div class="error"></div>
          </div>
          <div class="req_input fist_child form-group col-md-4 col-sm-6 col-xs-12"><div class="cover">
                <input type="email" name="email_address" id="email_address" placeholder="Email Address" class="input_check form-control"  oninvalid="setCustomValidity('Plz enter valid email address ')"  onchange="this.setCustomValidity('')" required autofocus/>
                <label for="Email">Email</label>
            </div>
            <div class="error"></div>
          </div>
          <div class="req_input form-group col-md-4 col-sm-6 col-xs-12"><div class="cover">
                <input type="text" name="phone_no"  id="phone_no" placeholder="Phone Number" class="input_check form-control" />
                <label for="Phone">Phone</label>
            </div>
            <div class="error"></div>
          </div>          
          <div class="clearfix"></div>
            <h3>Tell us a bit more about your project</h3><p class="clickselect-rfq">Services you're interested in (click to select that apply)</p>
            <div class="clearfix"></div>
            <div class="col-md-12 col-sm-12 col-xs-12">
            <ul>
				<li>
					<label>Website Design</label>
					<input  type="checkbox" name="design_build[]" id="design_build"  value="Website Design"  required="required" />
				</li>
				<li>
					<label>Web Application <br/>Development</label>
					<input   type="checkbox" name="design_build[]" id="design_build"    value="Web Application" />
				</li>
				<li>
					<label>Mobile Application <br/>Development</label>
					<input type="checkbox" name="design_build[]" id="design_build"    value="Mobile Application Development" />
				</li>
				<li class="last_child">
					<label>eCommerce <br/>Website</label>
					<input type="checkbox" name="design_build[]" id="design_build"   value="eCommerce Website"  />
				</li>
				<li>
					<label>Open Source <br/>Solution</label>
					<input type="checkbox" name="design_build[]" id="design_build"  value="Open Source Solution" />
				</li>
				<li>
					<label>Search Engine <br/>Optimization</label>
					<input type="checkbox" name="design_build[]" id="design_build"   value="Search Engine Optimization"  />
				</li>
				<li>
					<label>Website <br/>Maintenance</label>
					<input type="checkbox" name="design_build[]" id="design_build"   value="Website Maintenance" />
				</li>
				<li class="last_child">
					<label>Content <br/>Writing</label>
					<input type="checkbox" name="design_build[]" id="design_build"   value="Content Writing" />
				</li>
				<li>
					<label>Hiring Dedicated <br/>Resource</label>
					<input type="checkbox" name="design_build[]" id="design_build"    value="Hiring Dedicated Resource" />
				</li>
				<li>
					<label>Online Strategy <br/> Consulting</label>
					<input type="checkbox" name="design_build[]" id="design_build"    value="Online Strategy Consulting" />
				</li>
                
                <li>
					<label>Online Reputation <br/> Management</label>
					<input type="checkbox" name="design_build[]" id="design_build"    value="Online Reputation Management" />
				</li>
                
				<li class="last_child">
					<label>Other Services</label> 
					<input type="checkbox" name="design_build[]"  id="design_build"    value="Other Services" />
				</li>
			</ul>
            </div>
			<div class="error"></div>
           <div class="req_input describe-left form-group col-md-12 col-sm-12 col-xs-12">
            <div class="cover">
               <textarea name="proj_idea" id="proj_idea" class="input_check form-control" placeholder="Describe your idea or project briefly"  oninvalid="setCustomValidity('Plz Describe your idea or project briefly ')"  onchange="this.setCustomValidity('')" required autofocus></textarea>
            <label for="Message">Message</label>
            </div>
            <div class="error"></div>
          </div>                 
          <div class="progressbar col-md-12 col-sm-12 col-xs-12">
              <p><span class="pull-right" ><span class="select_range">Selected Range</span><br/>
                      <span class="example-val" id="lower-value"></span><span id="select_range_price"> to <span class="example-val" id="upper-value"></span></span></span>Your budget will help us meet expectations.<br/>An estimate is sufficient.</p>
            <div id="nonlinear"></div>
            <div class="value_text"><span id="greater">Greater than $1,00,000</span><span id="less">Less than $2500</span></div>
             <div class="budget-known"><input  type="checkbox" name="budget_not_known" id="budget_not_known"  value="budget not known" /><span>Budget not known</span></div></div>          
                    <div class="clearfix"></div>
          
          <div class="req_input fist_child form-group rfq-botomform-margin col-md-4 col-sm-6 col-xs-12"><div class="cover">
                <input type="text" name="website_url" id="website_url" placeholder="Current Website URLs (if any)" class="input_check form-control" />
                <label for="Website url">Website url</label>        
            </div>
            <div class="error"></div>
          </div>
          <div class="req_input form-group rfq-botomform-margin col-md-4 col-sm-6 col-xs-12">
            <div class="cover">
                <input type="text" name="skype_id" id="skype_id" placeholder="Skype ID (if available)" class="input_check form-control" />
                <label for="Skype id">Skype id</label>          
            </div>
            <div class="error"></div>
          </div>                    
          <div class="col-md-12 col-sm-12 col-xs-12"><div class="req_input_full">          
          <label>Select project specification document (if any)</label>
            <div class="cover">
                <input type="file" id="proj_specification_document" name="proj_specification_document" accept=".zip,.psd,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.rar,.txt,.jpg,.jpeg,.png,.gif,.pdf" />
            </div>
            <div class="error" id="error_file"></div>  
          </div> 
			<div class="clearfix">
				{/*<small class="filetypes">Accepted format (.zip, .psd, .doc, .docx, .xls, .xlsx, .ppt, .pptx, .rar, .txt, .jpg, .jpeg, .png, .gif, .pdf)</br>Accepted Maximum File Size 10MB.</small>*/}
			</div>
			<div class="clearfix"></div>            
            <div class="g-recaptcha" data-sitekey="6LfWhk0UAAAAAIqt_yOsRuEExNQuRsSSC4FCforr"></div>
        	 <div class="recaptcha_error"></div>
 			<div class="clearfix"></div>           
            <div class="freebutton-cover">
         <label class=""><button   name="btn_career_submit" id="btn" type="submit" class="cntct-btn">Submit Request</button> </label>
         </div>
             <small class="clearfix filetypes">One business day response without fail!</small></div>
        </form>
            </span>
      </div>
    </div></div>
            </div>
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
                  <li><div><a href="https://www.itfirms.co/top-mobile-app-development-companies/" rel="nofollow" target="_blank"><img width="125px" src="assets/images/mobile-app-developer-2020.png" /></a></div></li> 
                  <li><div><a href="https://www.expertise.com/ca/orange/web-developers" rel="nofollow" target="_blank"><img width="110px" src="assets/images/Best-Orange-Web-Developers-Badge.png" /></a></div></li>                
              </ul>                
                </div>
            </div>
          </div>          
        </div>
      </div>
    </div>  
  </section>  
   

    <div class="clearfix"></div>  


</>
    );

};



export default Requestqote; 
  

