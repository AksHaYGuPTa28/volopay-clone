import React from "react";
import styled from "styled-components";
import GreenlandLogoImg from "../../../assets/images/logo.png";

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImg = styled.div`
  width: 29px;
  height: 29px;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;

const LogoText = styled.h2`
  font-size: 22px;
  margin: 0;
  margin-left: 4px;
  color: #222;
  font-weight: 800;
`;

export function Logo(props) {
  return (
    <LogoWrapper>
      <LogoImg>
        <img src={GreenlandLogoImg} alt="Greenland logo" />
      </LogoImg>
      <LogoText>Volopay</LogoText>
    </LogoWrapper>
  );
}
