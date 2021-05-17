import React from "react";
import styled from "styled-components";

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
  margin-left: 20px;
`;

const LinkItem = styled.li`
  height: 100%;
  padding: 0 1.1em;
  color: #4a4e57;
  font-weight: 200;
  font-size: 14px;
  align-items: center;
  justify-content: center;
  display: flex;
  border-top: 2px solid transparent;
  transition: all 220ms ease-in-out;
`;

const Link = styled.a`
  text-decoration: none;
  color: inherit;
  font-size: inherit;
`;

export function NavLinks(props) {
  return (
    <NavLinksContainer>
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
      </LinksWrapper>
    </NavLinksContainer>
  );
}
