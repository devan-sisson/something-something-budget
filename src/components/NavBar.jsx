import React from "react";
import { Link } from "@reach/router";
import styled from "styled-components";

const TheNavBar = styled.div`
  background-color: lavender;
  padding: 2rem;
`;
const LinkBox = styled.span`
  padding: 1rem;
  margin: 1rem;
`;

const NavBar = () => {
  return (
    <TheNavBar>
      <LinkBox>
        <Link to="/">Home</Link>
      </LinkBox>
      <LinkBox>
        <Link to="/budget">BUDGET</Link>
      </LinkBox>
      <LinkBox>
        <span>settings</span>
      </LinkBox>
      <LinkBox>
        <span>notes</span>
      </LinkBox>
    </TheNavBar>
  );
};

export default NavBar;
