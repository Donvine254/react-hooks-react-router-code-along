import React from "react";

function Home() {
  return (
    <div className="ui container">
      <h1 className="header">Welcome to the Home Page</h1>
      <h2>This is the content of the Home component.</h2>
      <ul className="ui bulleted list large">
        <li>Home</li>
        <li>About</li>
        <li>Login</li>
      </ul>
      <blockquote className="ui header large centered fluid">
        <i className="quote left icon centered">
        </i> "Creativity is intelligence having fun." - Albert Einstein{" "}
      </blockquote>
      <img
        className="ui image"
        src="https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8MTkyMHgxMDgwfGVufDB8fDB8fHww&w=1000&q=80"
        alt="Creative Image"
        style={{ maxWidth: "100%" }}
      />
    </div>
  );
}

export default Home;
