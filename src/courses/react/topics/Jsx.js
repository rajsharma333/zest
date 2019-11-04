import React from 'react';

const Jsx = () => {
  return (
    <div>
      <h2>JSX</h2>
      <div className="">
         <p> JSX is JavaScript Syntax Extension and used to create react elements. In React using
         JSX is not compulsary but it make creating react element very easy. JSX uses HTML like syntax and
         we can define attributes in JSX</p>
       </div>
       <div class="cb">
          {`<div className="profile">{user.name}</div>`}<br/>
          {`<Profile userData="userData"/>`}<br/>
          {`<ProfilePic imagesrc="userData.src">`}<br/>
              &nbsp;nbsp;{`Profile image for {user.type} user`}<br/>
          {`</ProfilePic>`}<br/>
       </div>
       <h4>All JSX tags must be closed.</h4>
       <div class="cb">
          <p className="red">Incorrect Code</p>
          {`<Profile userData="userData">`}<br/><br/>
          <p className="green">Correct Code</p>
          {`<Profile userData="userData" />`}
       </div>

       <h4>Attribute names must be camelCase. For attribute value we should use quotes " "
            for string literal and curly braces {`{ }`} for variables or javascript expressions
       </h4>
       <div class="cb">
          {`<img className="profile-pic" src={user.img} />`}
       </div>

       <h4>For CSS classes we use className in place of class. Because class is
          a reserved keyword in JavaScript</h4>
       <div class="cb">
          <p className="red">Incorrect Code</p>
          {`<div class="profile-pic">`}<br/><br/>
          <p className="green">Correct Code</p>
          {`<div className="profile-pic">`}
       </div>

       <h4>We can use JavaScript within JSX by wrapping it with {`{ }`}</h4>
       <div class="cb">
          {`<div class="profile-pic">`}<br/><br/>
          {`<div className={user.type == 'admin' ? admin-profile : guest-profile}`}<br/>
          &nbsp;&nbsp;{`{user.name}`}<br/>
          {`</div>`}
       </div>

       <h4>All JSX elements should be within a single continer element {`{ }`}</h4>
       <div class="cb">
          <p className="red">Incorrect Code</p>
          {`<Header />`}<br/>
          {`<Content />`}<br/>
          {`<Footer />`}<br/><br/>
          <p className="green">Correct Code</p>
          {`<div>`}<br/>
            &nbsp;&nbsp;{`<Header />`}<br/>
            &nbsp;&nbsp;{`<Content />`}<br/>
            &nbsp;&nbsp;{`<Footer />`}<br/>
          {`</div>`}
       </div>

       <h4>For inline Style, we should write propertyname in camelCase {`{ }`}</h4>
       <div class="cb">
          {`<div style={fontSize:20, color:'#000', borderBottom:'1px solid'} />`}
       </div>

    </div>
  )
}

export default Jsx;
