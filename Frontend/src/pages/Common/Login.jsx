import React, { useState } from "react";
import InputGroup from "../../components/InputGroup";
import Button from "../../components/Button";
import Link from "../../components/Link";
import FormContainer from "../../components/FormContainer";
import useLogin from "../../web-utils/hooks/useLogin";
import { Toast } from "../../components/Toast";

import "../../styles/pages/common/LoginRegistration.css";
import { ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [formErrors, setFormErrors] = useState({
    email: "",
    password: "",
  });

  const { loginAcc } = useLogin();
  const navigate = useNavigate();

  const validateDetails = () => {
    let errors = {
      email: "",
      password: "",
    };

    if (!email) {
      errors.email = "Please enter your email";
    }
    if (!password) {
      errors.password = "Please enter your password";
    }

    setFormErrors(errors);

    loginAccount(errors);
  };

  const loginAccount = async (errors) => {
    let route = "", message = "";

    if (!Object.values(errors).some((error) => error !== "")) {
      try {
        console.log(email, password);
        const accountData = {
          email,
          password,
        };

        const response = await loginAcc(accountData);
        
        if(response.category === 'Mentor'){
          route = '/mentor-home';
          message = "You have successfully login as a Mentor";
        }
        else if(response.category === 'User'){
          route = '/client-home';
          message = "You have successfully login as a User";
        }

        localStorage.setItem("userName", response.name);
        localStorage.setItem("userEmail", response.email);

        Toast.success(message);
        setTimeout(() => {
          navigate(route)
        }, 3000);
      } catch (error) {
        Toast.error(error);
      }
    }
  };

  return (
    <div className="shared-container">
      <ToastContainer />
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
            errorMsg={formErrors.email}
          ></InputGroup>
          <InputGroup
            label="Password"
            name="Password"
            value={password}
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            errorMsg={formErrors.password}
          ></InputGroup>
        </FormContainer>

        <Button black onClick={validateDetails}>
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
