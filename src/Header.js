
import React from "react";
import Navbar from './Component/Navbar';
import { NavLink } from 'react-router-dom';

const Header = () => {

        return (

                <>

                        <div class="floatdiv-main">

                                <ul>

                                        <li>
                                                <img src="assets/images/arrowcontact.png" alt="arrow-icon" />
                                                <NavLink to="/contact"><span>contact us</span></NavLink>
                                        </li>
                                        <br />

                                        <li class="freequote-mobilehide">
                                                <img src="assets/images/telephone.png" alt="telephone-icon" />
                                                <a data-target="#myModal-call" data-toggle="modal" href="javascript:void(0)">
                                                        <span>Request A Call</span>
                                                </a>
                                        </li>

                                        <br />

                                </ul>
                        </div>


                        <a href="javascript:void(0);" class="scroll-top back-to-top">&uarr;</a>


                      
   {/*****navbar****** <Navbar />*****/}

                        {/*****modal***********/}

                        <div class="modal fade" id="myModal-call" role="dialog">
                                <div class="modal-dialog modal-lg">

                                        <div class="exitpadd requestcallpopUp">
                                                <div class="popup-container">
                                                        <span class="delete"><a href="javascript:void(0)" class="close-no"><img src="assets/images/delete-icon.png" alt="Delete Icon" /></a></span>

                                                        <div class="blog-content">
                                                                <div id="display">
                                                                        <h2><strong>Can’t decide?</strong> Request a call...</h2>
                                                                        <p>We would like to understand your needs and come up with the right strategic advice to address your business needs.</p>
                                                                        <form id="send_req_call_new" method="post" class="exitpopsv">


                                                                                <input type="hidden" name="action" value="request_call" />
                                                                                <input type="hidden" name="mode" value="request_callback" />
                                                                                <label>
                                                                                        <input type="text" placeholder="Your full name*" name="req_call_name" id="req_call_name" onblur="getVal('req_call_name','Your full name');" onclick="getBlank('req_call_name','Your full name');" />
                                                                                </label>

                                                                                <label>
                                                                                        <input type="text" placeholder="Email address*" name="req_email_id" id="req_email_id" onblur="getVal('req_email_id','Email id...');" onclick="getBlank('req_email_id','Email address...');" />
                                                                                </label>

                                                                                <label>
                                                                                        <input type="text" placeholder="Phone*" name="req_phone_no" id="req_phone_no" onblur="getVal('req_phone_no','Phone');" onclick="getBlank('req_phone_no','Phone no...');" />
                                                                                </label>


                                                                                <input type="button" class="pop-button" value="request a free call" id="button_display" onclick="req_send_call('send_req_call_new')" />
                                                                        </form>
                                                                        <div class="clear"></div>
                                                                        <a href="javascript:void(0)" class="detail close-no">No thanks, I don’t need strategy!</a><br />
                                                                </div>
                                                                <div id="succc_msg"></div>

                                                        </div>
                                                </div>
                                        </div>

                                </div>
                        </div>


                        {/*--modal pop up end--*/}






                </>

        );

};


export default Header;