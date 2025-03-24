import React, { useState } from "react";
import InputGroup from "../../components/InputGroup";
import Button from "../../components/Button";
import FormContainer from "../../components/FormContainer";
import Link from "../../components/Link";
import useRegister from "../../web-utils/hooks/useRegister";
import { useNavigate } from "react-router-dom";
import { Toast } from "../../components/Toast";
import { ToastContainer } from "react-toastify";

import "../../styles/pages/common/LoginRegistration.css";
import "../../styles/components/InputGroup.css";

const Registration = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [category, setCategory] = useState("");

  const [formErrors, setFormErrors] = useState({
    name: "",
    age: "",
    email: "",
    password: "",
    category: ""
  })

  const { registerAcc, isLoading } = useRegister();

  const navigate = useNavigate()

  const validateDetails = () => {
    let errors = {
      name: "",
      age: "",
      email: "",
      category: ""
    }

    if(!name) {
      errors.name = "Please fill in your name"
    }

    if(!age) {
      errors.age = "Please fill in your age"
    }

    if(!email) {
      errors.email = "Please fill in your email"
    }

    if(!password) {
      errors.password = "Pleae fill in your password"
    }
    else if(password.length < 8) {
      errors.password = "Length of password must be more than 8"
    }

    if(!category) {
      errors.category = "Please select a category"
    }

    setFormErrors(errors)

    registerAccount(errors);
  };

  const registerAccount = async (errors) => {
    if(!Object.values(errors).some(error => error !== "")) {
      try {
        const accountData = {
          name,
          age: parseInt(age),
          email,
          password,
          category
        };

        const response = await registerAcc(accountData);

        Toast.success(response);

        setTimeout(() => {
          navigate("/login")
        }, 3000);
      }
      catch (error) {    
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
              errorMsg={formErrors.name}
            />
            <InputGroup
              label="Age"
              name="Age"
              value={age}
              placeholder="Enter your age"
              onChange={(e) => setAge(e.target.value)}
              type="number"
              errorMsg={formErrors.age}
            />
            <InputGroup
              label="Email"
              name="Email"
              value={email}
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              errorMsg={formErrors.email}
            />
            <InputGroup
              label="Password"
              name="Password"
              value={password}
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              errorMsg={formErrors.password}
            />

            <div className="d-flex justify-content-around">
              <InputGroup
                type="radio"
                name="Category"
                label="Mentor"
                value="Mentor"
                onChange={(e) => setCategory(e.target.value)}
              />
              <InputGroup
                type="radio"
                name="Category"
                label="User"
                value="User"
                onChange={(e) => setCategory(e.target.value)}
              />
            </div>
            <p className="error">{formErrors.category}</p>
          </FormContainer>
        </div>

        <Button black onClick={validateDetails} disabled={isLoading}>
          {isLoading ? 'Registering...' : 'Register'}
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
