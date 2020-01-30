import React from 'react';
import { Link } from 'react-router-dom';


const Navigation = () => {
  return (
    <div class="doc-navigation">
      <ul className="">
        <li><Link to="/js/data-types" >Data Types</Link></li>
        <li><Link to="/js/functions" >Functions</Link></li>
        <li><Link to="/js/variables" >Variables</Link></li>
        <li><Link to="/js/objects" >Objects</Link></li>
        <li><Link to="/js/scope" >Scope</Link></li>
        <li><Link to="/js/hoisting" >Context</Link></li>
        <li><Link to="/js/object-creation" >Object Creation</Link></li>
       </ul>
     </div>
  )
}

export default Navigation;
