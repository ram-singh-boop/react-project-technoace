import React, { useState, useEffect } from 'react'; 
import axios from 'axios';

const Blogapi = () => {

const [name, setName] = useState();
const [moves, setMoves] = useState();

useEffect(() => {

    //alert ('hi');
    async function getData(){
       const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/7`);
       console.log(res.data);
      setName(res.data.name);
      setMoves(res.data.moves.length);
    }

getData();

});


    return (
   <>
{name}
<br />
{moves}
   </>
  

   );

};



export default Blogapi; 
  

