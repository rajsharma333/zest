import React from 'react';
import { Link } from 'react-router-dom';


const Navigation = () => {
  return (
    <div class="doc-navigation">
      <ul className="">
        <li><Link to="/react/ssr" >JSX</Link>
          {/**<div className="submenu">
            <Link to="/react/ssr" >SSR</Link>
            <Link to="/react/ssr" >SSR</Link>
            <Link to="/react/ssr" >SSR</Link>
            <Link to="/react/ssr" >SSR</Link>
          </div>**/}
        </li>
        <li><Link to="/react/ssr" >SSR</Link></li>
        <li><Link to="/react/basicsteps" >Basic Steps</Link></li>
        <li><Link to="/react/installation" >Installation</Link></li>
        <li><Link to="/react/first-component" >First Component</Link></li>
        <li><Link to="/react/first-form" >First Form</Link></li>
        <li><Link to="/react/redux-setup" >Redux Setup</Link></li>
        {/**<li><Link to="/react/MongoDB" >MongoDB</Link></li>**/}


      {/*  <li><Link to="/react/components" >Components</Link></li>
        <li><Link to="/react/propsandstates" >Props & States</Link></li>
        <li><Link to="/react/jsx" >JSX</Link></li>
        <li><Link to="/react/routes" >Routes</Link></li>
        <li><Link to="/react/topics" >Axios</Link></li>
        <li><Link to="/react/topics" >Conditional Rendering</Link></li>
        <li><Link to="/react/reactbasics" >React Basics</Link></li>
        <li><Link to="/react/customsetup" >Custom Setup</Link></li>*/}

        {/**<li><Link to="/react/topics" >Topics</Link></li>**/}
        {/**<li><Link to="/react/QnA" >QnA</Link></li>**/}
       </ul>
     </div>
  )
}

export default Navigation;
