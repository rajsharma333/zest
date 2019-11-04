import React from 'react';
import Highlight   from 'react-highlight';

const Routes = () => {
  return (
    <div className="">
      <h2>Routing</h2>
      <h3 className="underline">4 Steps Routing Setup</h3>

      <p>Step 1 - Install react-router-dom</p>
      <div className="cb">
        <Highlight language="javascript">{`
         C:\> npm install react-router-dom
        `}</Highlight>
      </div>

      <p>Step 2 - In Index.js file import BrowserRouter and wrap {`<App/>`} with BroserRouter</p>
      <div className="cb">
        <Highlight language="javascript">{`
         import <span class="blue">{BrowserRouter}</span> from 'React-router-dom';

         ReactDom.render(<BrowserRouter> <App/> </BroserRouter>, document.getElementById('root'));
         `}</Highlight>
      </div>

      <p>Step 3 - In content.js file or where you want to update content based on url,
        import {`{ Route }`} and use {`<Route />`} withing JSX</p>
      <div className="cb">
        <Highlight language="javascript">{`
          import {Route}</span> from 'React-router-dom';
          .....
          <Route path="/about" component={about} />
          <Route path="/about" component={about} />
          <Route path="/about" component={about} />
        `}</Highlight>
      </div>

      <p>Step 4 - Define Links for navigation. NavLink is used for menu where we want to
      highlight selected item otherwise Link is used</p>
      <div className="cb">
        <Highlight language="javascript">{`
          import { NavLink, Link } from 'react-router-dom';

          <NavLink to="/about-us">About Us</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/contact">Contact Us</NavLink>

          <Link to="/offerdetails">View Details</Link>
        `}</Highlight>
      </div>


      {/******************************* BROWSER ROUTER *****************************************/}
      <h3 className="underline">BrowserRouter</h3>
      BrowserRouter uses HTML5 History API and makes clean urls like xyz.com/products. It doesn't work in
      older browser that doesn't support HTML5 History API<br/><br/>

      <p><b className="red">basename</b> - If your project is in a subfolder on server,
      we can add this in all urls by using basename in Route </p>
      <div className="cb">
        <Highlight language="javascript">{`
          <BroserRouter basename="/project">......</BroserRouter>

          <Link to="/product">Product</Link>

          this will redirect to www.domain.com/project/product or localhost:3000/project/product
        `}</Highlight>
      </div>

      <p><b className="red">forceRefresh</b> - is used to refresh complete page on
      navigation. Mostly used for older browsers that doesn't support HTML5 History API </p>
      <div className="cb">
        <Highlight language="javascript">{`
          <BroserRouter forceRefresh>......</BroserRouter>
        `}</Highlight>
      </div>


      {/******************************* HASH ROUTER *****************************************/}
      <h3 className="underline">HashRouter</h3>
      <p>It uses hash in url like xyz.com/#/products. It uses window.location. Hash history
      does not support location.key or location.state </p>
      <div className="cb">
        <Highlight language="javascript">{`
          import { HashRouter } from 'react-router-dom';

          ReactDom.render(<HashRouter> <App/> </HashRouter>, document.getElementById('root'))
        `}</Highlight>
      </div>


      {/******************************* MEMORY ROUTER *****************************************/}
      <h3 className="underline">MemoryRouter</h3>
      <p>It keeps history of URL in memory(does not read or write to the address bar).
      Its useful in test and non-browser environment like React Native</p>
      <div className="cb">
        <Highlight language="javascript">{`
          import { MemoryRouter } from 'react-router-dom';

          ReactDom.render(<MemoryRouter> <App/> </MemoryRouter>, document.getElementById('root'))
        `}</Highlight>
      </div>


      {/********************************* ROUTE ********************************************/}
      <h3 className="underline">Route</h3>
      <p>responsibility is to render some UI when a location matches the route’s path.
      There are 3 ways to render something with a Route
      </p>
      <h4>Route using component </h4>
      <div className="cb">
        <Highlight language="javascript">{`
          import { Route } from 'react-router-dom';

          <Route path="/about-us" component={AboutUs} />
          <Route path="/services" component={Services} />
        `}</Highlight>
      </div>

      <h4 className="red">Route using render </h4>
      <div className="cb">
        <Highlight language="javascript">{`
          <Route path="/product:id" render={() => <ProductDetail data={productData}/>}

          <Route path="/product:id" render={(props) => <ProductDetail {...props} data={productData}/>
        `}</Highlight>
      </div>

      <h4 className="red">Route using children </h4>
      <div className="cb">
        <Highlight language="javascript">{`

        `}</Highlight>
      </div>

      <h4 className="red">Route with parameter</h4>
      <div className="cb">
        <Highlight language="javascript">{`
          <Route path="/product:id" component={ProductDetail} />
        `}</Highlight>
      </div>

      <h4>Use of exact in route</h4>
      <div className="cb">
        <Highlight language="javascript">{`
          <Route path={["/product:id", "/offers:id"]} component={ProductDetail} />
        `}</Highlight>
      </div>

      <h4>Same component for multiple routes</h4>
      <div className="cb">
        <Highlight language="javascript">{`
          <Route path={["/product:id", "/offers:id"]} component={ProductDetail} />
        `}</Highlight>
      </div>

      <h4>404 redirects</h4>
      <p>For all routes not defined (404), we create a component  <i>'NotFound'</i> and
      create a route without any path defined</p>
      <div className="cb">
        <Highlight language="javascript">{`
          <Route  component={NotFound} />
        `}</Highlight>
      </div>



      {/******************************* REDIRECT *****************************************/}
      <h4 className="red">Redirects</h4>
      <div className="cb">
        <Highlight language="javascript">{`
          <Route path="/" render={() => (
            loggedIn ? <Redirect to="/dashboard"/> : <HomePage/>
          )}

          <Redirect to="/somewhere/else" />

          <Redirect
            to={{
              pathname: "/login",
              search: "?utm=your+face",
              state: { referrer: currentLocation }
            }}

            When true, redirecting will push a new entry onto the history instead of replacing the current one.
            <Redirect push to="/somewhere/else" />
          />

          This can only be used to match a location when rendering a <Redirect> inside of a <Switch>
          <Switch>
            <Redirect from='/old-path' to='/new-path'/>
            <Route path='/new-path' component={Place}/>
          </Switch>

          // Redirect with matched parameters
          <Switch>
            <Redirect from='/users/:id' to='/users/profile/:id'/>
            <Route path='/users/profile/:id' component={Profile}/>
          </Switch>
        `}</Highlight>
      </div>


      {/******************************* PROMPT *****************************************/}
      <h4 className="red underline">Prompt</h4>
      <div className="cb">
        <Highlight language="javascript">{`

        `}</Highlight>
      </div>


      {/******************************* SWITCH *****************************************/}
      <h4 className="red underline">Switch</h4>
      <p>
      The {`<Switch>`}is not required for grouping {`<Route>`}s, but it can be quite useful.
      A {`<Switch>`} will iterate over all of its children {`<Route>`} elements and only render
      the first one that matches the current location. This helps when multiple route’s
      paths match the same pathname, when animating transitions between routes, and in
      identifying when no routes match the current location (so that you can render a “404” component).
      </p>
      <div className="cb">
        <Highlight language="javascript">{`
          <Switch>
            <Route path='/users/:id' component={UserProfile}/>
            <Route path='/' component={Home}/>
            <Route component={NotFound}
          </Switch>
        `}</Highlight>
      </div>


      {/******************************* STATIC ROUTER *****************************************/}
      <h4>Static Router</h4>
      <div className="cb">
        <Highlight language="javascript">{`

        `}</Highlight>
      </div>


      <h4>Animated transitions of routes</h4>
      <div className="cb">
        <Highlight language="javascript">{`

        `}</Highlight>
      </div>

      <h4>Private Router implementation</h4>
      <div className="cb">
        <Highlight language="javascript">{`

        `}</Highlight>
      </div>








        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

       <ul>
        <li>why use link in place of anchor tag</li>
        <li>Optional Parameter</li>
        <li>Query string parameter</li>
        <li>Nested Routing</li>
        <li>With Router</li>
        <li>Programmatic Navigation</li>
        <li>Scroll Restoration</li>
        <li>Switch vs exact</li>
        <li>How to implement private Route (https://medium.com/@tomlarge/private-routes-with-react-router-dom-28e9f40c7146)</li>
       </ul>
     </div>
  )
}

export default Routes;
