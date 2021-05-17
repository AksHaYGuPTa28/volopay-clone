import React, { useState } from "react";
import styled from "styled-components";
import { Accessibility } from "./accessibility";
import { MenuToggle } from "./menuToggle";

const NavLinksContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const LinksWrapper = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  height: 100%;
  list-style: none;
  background-color: #fff;
  width: 100%;
  flex-direction: column;
  position: fixed;
  top: 65px;
  left: 0;
  line-height: 50px;
  margin-left: 20px;
`;

const LinkItem = styled.li`
  width: 100%;
  padding: 0 1.1em;
  color: #4a4e57 !important;
  font-weight: 100;
  font-size: 16px;
  display: flex;
  margin-bottom: 10px;
`;

const Link = styled.a`
  text-decoration: none;
  color: inherit;
  font-size: inherit;
`;

const Marginer = styled.div`
  height: 2em;
`;

export function MobileNavLinks(props) {
  const [isOpen, setOpen] = useState(false);

  return (
    <NavLinksContainer>
      <MenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
      {isOpen && (
        <LinksWrapper>
          <LinkItem>
            <Link href="#">Product</Link>
          </LinkItem>
          <LinkItem>
            <Link href="#">Features</Link>
          </LinkItem>
          <LinkItem>
            <Link href="#">Customers</Link>
          </LinkItem>
          <LinkItem>
            <Link href="#">Pricing</Link>
          </LinkItem>
          <LinkItem>
            <Link href="#">Log in</Link>
          </LinkItem>
          <LinkItem>
            <Link href="#">Sign up</Link>
          </LinkItem>
          <Marginer />
        </LinksWrapper>
      )}
    </NavLinksContainer>
  );
}
