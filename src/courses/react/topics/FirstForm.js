import React from 'react';
import Highlight from 'react-highlight';

const FirstForm = () => {
  return (
    <div className="">
      <h2>First Form</h2>

      <p>Create a new file Register.js and create class component Register in this. Import this
      component inside content component </p>
      <div className="cb">
        <Highlight language="javascript">{`
          class Register extends React.Component{
          render(){
            return(
              <div className="register">
                <h3>Register</h3>
              </div>
            )
          }
        }

        export default Register;
        `}</Highlight>
      </div>

      <p>Create a form with 4 input fields and a button in it</p>
      <div className="cb">
        <Highlight language="javascript">{`
          class Register extends React.Component{
          render(){
            return(
              <div className="register">
                <h3>Register</h3>
                <form>
                <input type="text" placeholder="Name" name="name"/>
                <input type="text" placeholder="Email" name="email"/>
                <input type="text" placeholder="Mobile" name="mobile"/>
                <input type="password" placeholder="Password" name="password"/>
                <br/>
                <button className="btn btn-primary">Register</button>
                </form>
              </div>
            )
          }
        }

        export default Register;
        `}</Highlight>
      </div>

      <p>Create form state with 4 fields in this and use this state in value attribute of input field</p>
      <div className="cb">
        <Highlight language="javascript">{`
        class Register extends React.Component{
            constructor(){
              super();
              this.state = {
                name: '',
                email: '',
                mobile: '',
                password: ''
              }
            }
          render(){
            return(
              <div className="register">
                <h3>Register</h3>
                <form>
                <input type="text" placeholder="Name" name="name" value={this.state.name}/>
                <input type="text" placeholder="Email" name="email" value={this.state.email}/>
                <input type="text" placeholder="Mobile" name="mobile" value={this.state.mobile}/>
                <input type="password" placeholder="Password" name="password" value={this.state.password}/>
                <br/>
                <button className="btn btn-primary">Register</button>
                </form>
              </div>
            )
          }
        }

        export default Register;
        `}</Highlight>
      </div>

      <p>Create a handleChange function and bind this with onChange event of input fields</p>
      <div className="cb">
        <Highlight language="javascript">{`
        class Register extends React.Component{
            constructor(){
              super();
              this.state = {
                name: '',
                email: '',
                mobile: '',
                password: ''
              }
            }
          handleChange = () => {
            this.setState({[e.target.name] : e.target.value})
            console.log(this.state);
          }
          render(){
            return(
              <div className="register">
                <h3>Register</h3>
                <form>
                <input type="text" placeholder="Name" name="name"
                  value={this.state.name} onChange={this.handleChange}/>
                <input type="text" placeholder="Email" name="email"
                  value={this.state.email} onChange={this.handleChange}/>
                <input type="text" placeholder="Mobile" name="mobile"
                  value={this.state.mobile} onChange={this.handleChange}/>
                <input type="password" placeholder="Password" name="password"
                  value={this.state.password} onChange={this.handleChange}/>
                <br/>
                <button className="btn btn-primary">Register</button>
                </form>
              </div>
            )
          }
        }

        export default Register;
        `}</Highlight>
      </div>




   </div>


  )
}

export default FirstForm;
