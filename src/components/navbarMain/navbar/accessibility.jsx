import React from "react";
import styled from "styled-components";

const AccessibilityContainer = styled.div`
  display: flex;
  margin-left: 10px;
`;

const RegisterButton = styled.button`
  float: right;
  color: white;
  background: #ff3366;
  border-radius: 5px;
  padding: 10px 23px;
  width: 110px;
  cursor: pointer;
  font-size: 16px;
  border: none;

  &:hover {
    background-color: #ff3366;
  }

  &:not(:last-of-type) {
    margin-right: 7px;
  }
`;

const LoginButton = styled.button`
  border: 0;
  outline: 0;
  padding: 8px 1em;
  color: #222;
  font-size: 13px;
  font-weight: 600;
  border-radius: 20px;
  background-color: transparent;
  transition: all 240ms ease-in-out;
  cursor: pointer;

  &:not(:last-of-type) {
    margin-right: 7px;
  }
`;

export function Accessibility(props) {
  return (
    <AccessibilityContainer>
      <LoginButton>Login</LoginButton>
      <RegisterButton>Sign Up</RegisterButton>
    </AccessibilityContainer>
  );
}
