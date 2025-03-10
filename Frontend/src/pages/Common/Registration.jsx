import React, { useState } from "react";
import InputGroup from "../../components/InputGroup";
import Button from "../../components/Button";
import FormContainer from "../../components/FormContainer";
import Link from "../../components/Link";
import "../../styles/pages/common/LoginRegistration.css";

const Registration = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [category, setCategory] = useState("");

  const registerAccount = () => {
    console.log("done", category);
  };

  return (
    <div className="shared-container">
      <Link href="/" className="homeLink">
        Home
      </Link>
      <div className="shared-content">
        <h1 className="title">Register An Account</h1>
        <div>
          <FormContainer>
            <InputGroup
              label="Name"
              name="Name"
              value={name}
              placeholder="Enter your name"
              onChange={(e) => setName(e.target.value)}
              type="text"
            />
            <InputGroup
              label="Age"
              name="Age"
              value={age}
              placeholder="Enter your age"
              onChange={(e) => setAge(e.target.value)}
              type="number"
            />
            <InputGroup
              label="Email"
              name="Email"
              value={email}
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              type="text"
            />
            <InputGroup
              label="Password"
              name="Password"
              value={password}
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
              type="password"
            />

            <div className="d-flex justify-content-around">
              <InputGroup
                type="radio"
                name="Category"
                label="I want to help others (Mentor)"
                value="Mentor"
                onChange={(e) => setCategory(e.target.value)}
              />
              <InputGroup
                type="radio"
                name="Category"
                label="I need (User)"
                value="User"
                onChange={(e) => setCategory(e.target.value)}
              />
            </div>
          </FormContainer>
        </div>

        <Button black onClick={registerAccount}>
          Register
        </Button>
        <p className="mt-2">
          Already have an account?{" "}
          <span>
            <Link href="/login">Login</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Registration;
