import React from "react";
import { Container, Title } from "./Register";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  text-decoration: none;
  font-weight: 700;
  font-size: 26px;
`;

const Home = () => {
  return (
    <Container>
      <Title style={{ fontSize: "32px" }}>Register or login here</Title>
      <StyledLink to="/login">Login</StyledLink>
      <br />
      <br />
      <br />
      <StyledLink to="/register">Register</StyledLink>
    </Container>
  );
};

export default Home;
