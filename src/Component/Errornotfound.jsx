import React from 'react';
import {NavLink} from 'react-router-dom';

const Errornotfound = () => {
	
	return(
<>
  <div class="container_new mt-5" style={{marginTop: 116
}}>
                <div class="row">
                <div class="box-with-text">
<h1>404 Error Page</h1>

<p style={{fontSize: 20}}>Sorry, This Page Dosen't Exit</p>
<NavLink to="/">Go Back</NavLink>
<br />
<br />
</div>
</div>
</div>
</>
	);

};


export default  Errornotfound;