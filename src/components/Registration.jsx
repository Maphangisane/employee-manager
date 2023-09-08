// imports
import React, { useState, useEffect } from "react";

const Registration = () => {
  // states
  const [profile, setProfile] = useState({
    name: "",
    profession: "",
    email: "",
    phone: "",
    password: "",
  });

  const [confirmPassword, setConfirmPassword] = useState("");

  // functions
  function handleInputChange(e) {
    e.preventDefault();

    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  }

  // function to set confirm password
  function confirmPasswordHandler(e) {
    // cancels browser refresh while allowing us to execute any code we write here
    e.preventDefault();
    // we set the value from input
    const { value } = e.target;
    setConfirmPassword(value);
  }

  // validate info function
  function validateInputInfo(e) {
    e.preventDefault();
    // create the error variables
    let error = "";

    // empty input field validation
    if (
      profile.phone === "" ||
      profile.name === "" ||
      profile.profession === "" ||
      profile.email === "" ||
      profile.password === "" ||
      profile.confirmPassword === ""
    ) {
      error = "Please make sure the fields are not empty";
    }

    // phone length validation
    // if (profile.phone.length !== 10) {
    //   error = "please enter 10 digit numbers";
    // }

    // password test
    if (confirmPassword !== profile.password) {
      error = "confirm Password";
    }

    //
    if (error) {
      console.log(`please fix this ${error}`);
    } else {
      console.log("thank you we sending data");
    }
  }

  return (
    <div className="Registration">
      <h2>Heading</h2>

      <form>
        <label>Full Name</label>
        <input
          type="text"
          name="name"
          required
          value={profile.name}
          placeholder="Enter Full Name...."
          onChange={handleInputChange}
        />

        {/*  */}
        <label>Profession</label>
        <input
          type="text"
          name="profession"
          required
          value={profile.profession}
          placeholder="Enter name of your profession"
          onChange={handleInputChange}
        />

        {/*  */}
        <label>Email</label>
        <input
          type="email"
          name="email"
          required
          value={profile.email}
          placeholder="Enter email email@email.com"
          onChange={handleInputChange}
        />

        {/*  */}
        <label>Phone number</label>
        <input
          type="phone"
          name="phone"
          required
          value={profile.phone}
          placeholder="Enter your phone number"
          onChange={handleInputChange}
        />

        {/*  */}
        <label>Password</label>
        <input
          type="password"
          name="password"
          required
          value={profile.password}
          placeholder="Enter your password"
          onChange={handleInputChange}
        />
        {/*  */}
        <label>Confirm password</label>
        <input
          type="password"
          name="confirmPassword"
          required
          value={confirmPassword}
          placeholder="Please confirm your password"
          onChange={confirmPasswordHandler}
        />
        {/*  */}
        <button onClick={validateInputInfo}>Submit</button>
      </form>
    </div>
  );
};

export default Registration;
