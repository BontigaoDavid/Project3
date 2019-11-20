import React from "react";

function Login() {
  return (
    <form className="border bg-light p-3 rounded">
      <div className="form-group">
        <label htmlFor="loginEmail">Email address</label>
        <input type="email" className="form-control" id="loginEmail" aria-describedby="emailHelp" placeholder="Enter email" />
      </div>
      <div className="form-group">
        <label htmlFor="loginPassword">Password</label>
        <input type="password" className="form-control" id="loginPassword" placeholder="Password" />
      </div>
      <button type="Login" className="btn btn-primary">Login</button>
    </form>
  );
}

export default Login;
