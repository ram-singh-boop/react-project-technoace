import React from 'react';
import { NavLink } from 'react-router-dom';

const Servicescards = (props) =>{

    return ( 
<>


          <div class="col-md-4 col-sm-6 col-xs-12 col-lg-3">
            <div class="thumbnail">
              <div class="caption">
                <h3>{props.title}</h3>
                <p>{props.desc}</p>

                <NavLink to={props.path} >Read More</NavLink>
                
              </div>
              
              </div>
              </div>



</>
    );

};

export default Servicescards; 