import React, { useState } from "react";
import InputGroup from "../../components/InputGroup";
import Button from "../../components/Button";
import Link from "../../components/Link";
import FormContainer from "../../components/FormContainer";
import "../../styles/pages/common/LoginRegistration.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="shared-container">
      <Link href="/" className="homeLink">
        Home
      </Link>
      <div className="shared-content">
        <h1 className="title">Let's Help You Out</h1>
        <FormContainer>
          <InputGroup
            label="Email"
            name="Email"
            value={email}
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
            type="text"
          ></InputGroup>
          <InputGroup
            label="Password"
            name="Password"
            value={password}
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          ></InputGroup>
        </FormContainer>

        <Button black onClick={() => console.log(email, password)}>
          Login
        </Button>

        <p className="mt-2">
          Not Registered yet?{" "}
          <span>
            <Link href="/registration">Sign Up</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
