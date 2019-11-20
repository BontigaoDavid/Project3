import React from "react";

function Signup() {
  return (
    <form className="border bg-light p-3 rounded">
      <div className="form-group">
        <label htmlFor="signUpUsername">Username</label>
        <input type="text" className="form-control" id="signUpUsername" placeholder="Username" />
      </div>
      <div className="form-group">
        <label htmlFor="signUpEmail">Email address</label>
        <input type="email" className="form-control" id="signUpEmail" aria-describedby="emailHelp" placeholder="Enter email" />
        {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
      </div>
      <div className="form-group">
        <label htmlFor="signUpPassword">Password</label>
        <input type="password" className="form-control" id="signUpPassword" placeholder="Password" />
      </div>
      <button type="Signup" className="btn btn-primary">Signup</button>
    </form>
  );
}

export default Signup;
