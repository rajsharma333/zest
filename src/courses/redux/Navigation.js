import React from 'react';
import { Link } from 'react-router-dom';


const Navigation = () => {
  return (
    <div class="doc-navigation">
      <ul className="">
        <li><Link to="/redux" >Home</Link></li>
       </ul>
     </div>
  )
}

export default Navigation;
