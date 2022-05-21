import React from "react";
import styled from "styled-components";
import logo from "../assets/images/amazon_logo.png";

const Signup = () => {
  return (
    <Container>
      <Logo>
        <img src={logo} alt="amazon logo" />
      </Logo>
      <FormContainer>
        <h3>Signup</h3>
        <InputContainer>
          <p>Full Name</p>
          <input type="text" />
        </InputContainer>
        <InputContainer>
          <p>Email</p>
          <input type="email" />
        </InputContainer>
        <InputContainer>
          <p>Password</p>
          <input type="password" />
        </InputContainer>
        <SignupButton>Create Account</SignupButton>
      </FormContainer>
      <LoginButton>Register</LoginButton>
    </Container>
  );
};

export default Signup;

const Container = styled.div`
  width: 40%;
  min-width: 450px;
  height: fit-content;
  padding: 15px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Logo = styled.div`
  width: 120px;
  margin-bottom: 20px;
  img {
    width: 100%;
  }
`;

const FormContainer = styled.form`
  border: 1px solid lightgray;
  width: 55%;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15px;

  h3 {
    font-size: 28px;
    font-weight: 400;
    line-height: 33px;
    align-self: flex-start;
    margin-bottom: 10px;
  }
`;

const InputContainer = styled.div`
  width: 100%;
  padding: 5 px;
  p {
    font-size: 14px;
    font-weight: 600;
  }

  input {
    width: 95%;
    height: 33px;
    padding-left: 5px;
    border-radius: 5px;
    border: 1px solid lightgray;
    margin-top: 5px;

    &:hover {
      border: 1px solid orange;
    }
  }
`;

const LoginButton = styled.button`
  width: 60%;
  height: 35px;
  background-color: #f3b414;
  border: none;
  border-radius: 10px;
  margin-top: 30px;
`;

const SignupButton = styled.button`
  width: 100%;
  height: 35px;
  margin-top: 20px;
  font-size: 12px;

  &:hover {
    background-color: #dfdfdf;
    border: 1px solid gray;
  }
`;
