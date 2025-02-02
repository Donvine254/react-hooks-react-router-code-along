import React from 'react'
import { Button, Checkbox, Form } from "semantic-ui-react";

function Login() {
  return (
    <div
      className="ui padded container"
      style={{ margin: "20px auto", width: "50%" }}>
         <h2 className="ui padded header centered">Sign Up</h2>
         <div class="ui attached message">
  <div class="header">
    Welcome to our site!
  </div>
  <p>Fill out the form below to sign-up for a new account</p>
</div>
<form class="ui form attached fluid segment">
  <div class="two fields">
    <div class="field">
      <label>First Name</label>
      <input placeholder="First Name" type="text"/>
    </div>
    <div class="field">
      <label>Last Name</label>
      <input placeholder="Last Name" type="text"/>
    </div>
  </div>
  <div class="field">
    <label>Username</label>
    <input placeholder="Username" type="text"/>
  </div>
  <div class="field">
    <label>Password</label>
    <input type="password"/>
  </div>
  <div class="inline field">
    <div class="ui checkbox">
      <input type="checkbox" id="terms"/>
      <label for="terms">I agree to the terms and conditions</label>
    </div>
  </div>
  <div class="ui blue submit button">Submit</div>
</form>
<div class="ui bottom attached warning message">
  <i class="icon help"></i>
  Already signed up? <a href="#">Login here</a> instead.
</div>
    </div>
  )
}

export default Login