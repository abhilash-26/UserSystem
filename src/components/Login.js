import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import {
  Container,
  Input,
  RowWrapper,
  Label,
  Title,
  SubmitButton,
} from "../components/Register";

function Login() {
  const [allData, setAllData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setAllData({
      ...allData,
      [e.target.name]: e.target.value,
    });
  };
  const history = useHistory();
  const handleSubmit = async () => {
    try {
      const result = await axios({
        method: "post",
        url: "http://localhost:8080/user/login",
        data: allData,
      });
      if (result.data.status == 0) {
        history.push("/user-detail");
      } else {
        alert(result.data.message);
      }
      console.log(result);
    } catch (error) {
      alert("something went wrong");
    }
  };
  return (
    <Container>
      <Title>SignIn</Title>
      <RowWrapper>
        <Label>Email :-</Label>
        <Input name="email" value={allData.email} onChange={handleChange} />
      </RowWrapper>
      <RowWrapper>
        <Label>Password :-</Label>
        <Input
          name="password"
          value={allData.password}
          onChange={handleChange}
        />
      </RowWrapper>
      <SubmitButton onClick={handleSubmit}>Login</SubmitButton>
      <p>
        Don't have a account yet?{" "}
        <Link style={{ textDecoration: "none" }} to="/register">
          signUp
        </Link>
      </p>
    </Container>
  );
}

export default Login;
