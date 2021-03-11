import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Register.css";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import header from "../images/header.png";

function Register() {
  const [name, setuserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [PIN, setPin] = useState("");

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    history.push("/e-registration");
  };
  return (
    <div className="registrationForm">
      <div className="headerLogo">
        <img src={header} alt="" />
      </div>

      <form onSubmit={handleSubmit}>
        <div className="home">
          <Link to="/" className="home">
            <ArrowBackIcon className="arrow" />
            `` Back to home
          </Link>
        </div>
        <h3>E-REGISTRATION</h3>
        <br />
        <label htmlFor="" className="name">
          TaxPayer Type
        </label>
        <select name="taxType" id="taxType">
          <option value="select">Select</option>
          <option value="individual">Individual</option>
          <option value="non-individual">Non-Individual</option>
        </select>
        <label htmlFor=""> Mode of Registration</label>

        <select name="taxType" id="taxType">
          <option value="select">Select</option>
          <option value="individual">Online Form</option>
          <option value="non-individual">Upload Form</option>
        </select>
        {/* <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          name="password"
          required
        />
        <label htmlFor=""> Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          name="email"
          required
        />
        <label htmlFor="">PIN</label>
        <input
          value={PIN}
          onChange={(e) => setPin(e.target.value)}
          type="text"
          name="PIN"
          required
        /> */}
        <button type="submit">Next</button>
      </form>
    </div>
  );
}

export default Register;
