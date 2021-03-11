import React from "react";
import "./Form.css";
import { Link, Route } from "react-router-dom";
import Register from "../../Pages/Register";

function Form() {
  return (
    <div className="form">
      <form action="">
        <label>Enter Pin / User ID</label>
        <input type="text" className="input" />
        <br />
        <label>Password</label>
        <input type="password" className="input"></input>
        <br />
        <input type="submit" value="LOG IN" className="log"></input>
        <br />
        {/* <div className="recover">
                    <input type="checkbox"/>
                    <p>Remember me</p>
                </div> */}
        <div className="forgot">
          <a href="#">Forgot Password?</a>
        </div>

        <Link to="/register" className="new">
          New Pin Registration
        </Link>
      </form>
    </div>
  );
}

export default Form;
