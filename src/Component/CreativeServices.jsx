import React from 'react'; 
import { NavLink } from "react-router-dom";

const CreativeServices = (props) => {

    return (
   <>

<li class="col-md-3 col-sm-6 col-xs-12">

<div class="listing_div listing_height">
            <div class="div_list"></div>

            <div class="icon_div"> {/*<span class="icon_first"></span>*/} <img src={props.imgsrc} />
           
             </div> 
{/*-- <img src={props.imgsrc} />---*/}
              <div class="clearfix"></div>
              
              <div itemscope itemtype="https://schema.org/Service">
                  
            <meta itemprop="serviceType" content="website design development" />
              
              <h3 itemprop="name">{props.title}</h3>
              
              <p itemprop="description">{props.description}</p>

              <NavLink to={props.links_url}
               className="see_click arrowrgt-red" itemprop="url">
                   See Details
                </NavLink>
               
                </div>

                </div>
   
   </li>

</>
    );

};



export default CreativeServices; 