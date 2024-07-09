import React, { useState } from "react";
import { loginUser } from "../API/Service";
import "./Login.css";
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleReturn = () => {
    window.location.href = '/';
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const email = e.target.email.value;
      const password = e.target.password.value;

      const response = await loginUser(email, password);

      console.log(response, "response");

      let userFound = false;

      for (let i = 0; i < response.length; i++) {
        if (response[i].email === email && response[i].password === password) {
          userFound = true;
       let res= sessionStorage.setItem('user', JSON.stringify(email));
       console.log(res,'resres');
          break;
        }
      }

      if (userFound) {
        window.location.href = "/";
      } else {
        console.error("Invalid email or password");
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <>
      {" "}
      <h1 className="hop">Login </h1>
      <div className="bodycontainer">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Login</button>
          <button onClick={handleReturn}>Return</button>
          </form>
      </div>
    </>
  );
};

export default LoginPage;
