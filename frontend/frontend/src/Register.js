import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Register.css";
import { Container, CssBaseline } from "@material-ui/core";

function Register() {
  const history = useHistory();
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    cpassword: "",
  });
  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };
  console.log(user);

  const PostData = async (e) => {
    e.preventDefault();
    const { name, email, phone, password, cpassword } = user;

    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        password,
        cpassword,
      }),
    });

    if (res.status === 204) {
      window.alert("Please filled form properly...");
    } else if (res.status === 406) {
      window.alert("Please enter valid email..");
    } else if (res.status === 411) {
      window.alert("Please enter mobile number properly");
    } else if (res.status === 499) {
      window.alert("Password length must 10 and includes @,digit,characters ");
    } else if (res.status === 498) {
      window.alert("Password not match");
    } else {
      window.alert("Registration Successfull");
      history.push("/signin");
    }
  };

  return (
    <div>
      <div>
        <form className="FormBody" method="POST">
          <input
            type="text"
            name="name"
            id="name"
            autoComplete="off"
            placeholder="Enter Your Full Name"
            value={user.name}
            onChange={handleInputs}
            required
          />

          <input
            type="email"
            name="email"
            id="email"
            autoComplete="off"
            placeholder="Enter Your Email Id"
            value={user.email}
            onChange={handleInputs}
            required
          />
          <input
            type="number"
            name="phone"
            id="phone"
            autoComplete="off"
            placeholder="Enter Your Mobile Number"
            value={user.phone}
            onChange={handleInputs}
            required
            max="10"
            min="10"
          />

          <input
            type="password"
            name="password"
            id="password"
            autoComplete="off"
            placeholder="Enter Password  "
            value={user.password}
            onChange={handleInputs}
            required
          />
          <input
            type="password"
            name="cpassword"
            id="cpassword"
            autoComplete="off"
            placeholder="Enter Password Again "
            value={user.cpassword}
            onChange={handleInputs}
            required
          />
          <button id="signup" name="signup" onClick={PostData}>
            SignUp
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
