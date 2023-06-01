import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import { Button, Checkbox, Form } from "semantic-ui-react";

/* define the NavBar component */
function NavBar() {
  return (
    <div className="ui fluid secondary menu">
      <NavLink to="/" className="ui header item" activeClassName="active">
        Home
      </NavLink>
      <NavLink
        to="/about"
        className="ui header item"
        activeClassName="active">
        About
      </NavLink>
      <NavLink
        to="/login"
        className="ui header item"
        activeClassName="active">
        Login
      </NavLink>
      <div class="right menu">
        <div class="item">
          <div class="ui icon input">
            <input type="text" placeholder="Search..." />
            <i class="search link icon"></i>
          </div>
        </div>
        <a class="ui item">Logout</a>
      </div>
    </div>
  );
}

function Home() {
  return (
    <div>
      <h1>Home!</h1>
      <p>Wow, No one is home</p>
    </div>
  );
}
function About() {
  return (
    <div>
      <h1>This is my about component!</h1>
      <p>this page has been created using semantic ui and react</p>
      <img
        className="ui fluid image"
        src="https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8MTkyMHgxMDgwfGVufDB8fDB8fHww&w=1000&q=80"
        alt="image"
      />
    </div>
  );
}

function Login() {
  return (
    <div
      className="ui padded container"
      style={{ margin: "20px auto", width: "50%" }}>
         <h2 className="ui padded header centered">Sign Up</h2>
      <Form>
        <Form.Field>
          <label>First Name</label>
          <input placeholder="First Name" />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input placeholder="Last Name" />
        </Form.Field>
        <Form.Field>
          <Checkbox label="I agree to the Terms and Conditions" />
        </Form.Field>
        <Button type="submit" onClick={()=>alert(`This is a scamming website, we will steal your data`)}>Submit</Button>
      </Form>
    </div>
  );
}

ReactDOM.render(
  <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
