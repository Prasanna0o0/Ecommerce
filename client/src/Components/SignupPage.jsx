import React, { useState } from "react";
import { registerUser } from "../API/Service";
import "./Login.css";

const SignupPage = ({ history }) => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
    phoneNumber: "",
  });

  const handleReturn = () => {
    window.location.href = '/';
  };
  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerUser(userData);
      history.push("/lo");
    } catch (error) {
      console.error("Signup failed:", error);
    }
  };

  return (
    <div className="bodycontainer" >
    <h2 className="hops">Signup</h2>
    <form  onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={userData.name}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={userData.email}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={userData.password}
        onChange={handleChange}
      />
      <input
        type="text"
        name="address"
        placeholder="Address"
        value={userData.address}
        onChange={handleChange}
      />
      <input
        type="tel"
        id="phone"
        name="phoneNumber"
        placeholder="Number"
        value={userData.phoneNumber}
        onChange={handleChange}
        // pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
        // required
      />
      <button type="submit">Signup</button>
      <button onClick={handleReturn}>Return</button>

    </form>
  </div>
  );
};

export default SignupPage;
