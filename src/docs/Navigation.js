import React from 'react';
import { Link } from 'react-router-dom';


const Navigation = () => {
  return (
    <section class="doc-navigation">
      <ul className="">
        <li><Link to="/" >Home</Link></li>
        <li><Link to="/topics" >Topics</Link></li>
        <li><Link to="/installation" >Installation</Link></li>
        <li><Link to="/Jsx" >JSX</Link></li>
        <li><Link to="/routes" >Routes</Link></li>
        <li><Link to="/QnA" >QnA</Link></li>
       </ul>
     </section>
  )
}

export default Navigation;
