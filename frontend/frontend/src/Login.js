import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import "./Login.css";
function Login() {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const LoginUser = async (e) => {
    e.preventDefault();

    const res = await fetch("/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    let status = res.status;
    if (status === 200) {
      window.alert("Login Sucessfull");
      history.push("/home");
    } else {
      window.alert("Invalid Details");
    }
  };
  return (
    <>
      <div className="main_div">
        <form className="LoginForm" method="POST">
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
          <input
            type="password"
            name="email"
            id="email"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />

          <button onClick={LoginUser}>Login</button>
        </form>
      </div>
    </>
  );
}

export default Login;
