import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";

export const Container = styled.div`
  height: auto;
  width: 50%;
  padding: 20px;
  box-shadow: 10px 10px 5px #aaaaaa;
  border-radius: 10px;
  @media screen and (max-width: 700px) {
    width: 100%;
  }
`;
export const Title = styled.p`
  font-size: 22px;
  font-weight: 600;
  font-family: Lato;
`;
export const RowWrapper = styled.div`
  width: 100%;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Label = styled.label`
  font-family: Lato;
  font-weight: 500;
  margin-right: 10px;
`;
export const Input = styled.input`
  width: 50%;
  border: none;
  border-bottom: 1px solid grey;
  outline: none;
`;
export const Select = styled.select`
  width: 30%;
  border-radius: 5px;
`;
export const Option = styled.option``;
export const TextArea = styled.textarea`
  border-radius: 5px;
`;
export const SubmitButton = styled.button`
  border: none;
  background-color: orange;
  border-radius: 8px;
  width: 100px;
  height: 40px;
  color: white;
  cursor: pointer;
  font-size: 20px;
`;

const Register = () => {
  const [allData, setAllData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    profession: "",
    gender: "",
    about: "",
    password: "",
  });
  const handleChange = (e) => {
    setAllData({
      ...allData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSignUp = async () => {
    try {
      if (
        (allData.email &&
          allData.name &&
          allData.phoneNumber &&
          allData.profession &&
          allData.gender &&
          allData.about &&
          allData.password) == ""
      ) {
        alert("please fill all the fields");
      } else {
        const result = await axios({
          method: "post",
          url: "http://localhost:8080/user/register",
          data: allData,
        });
        console.log(result);
      }
    } catch (error) {
      alert("something went wrong");
    }
  };

  return (
    <Container>
      <Title>SignUp</Title>
      <RowWrapper>
        <Label>Name:-</Label>
        <Input onChange={handleChange} name="name" value={allData.name} />
      </RowWrapper>
      <RowWrapper>
        <Label>Email:-</Label>
        <Input onChange={handleChange} name="email" value={allData.email} />
      </RowWrapper>
      <RowWrapper>
        <Label>Phone:-</Label>
        <Input
          onChange={handleChange}
          name="phoneNumber"
          value={allData.phoneNumber}
        />
      </RowWrapper>
      <RowWrapper>
        <Label>Password:-</Label>
        <Input
          onChange={handleChange}
          name="password"
          value={allData.password}
        />
      </RowWrapper>
      <RowWrapper>
        <Label>Select your profession</Label>
        <Select onChange={handleChange} name="profession">
          <Option value="S">Student</Option>
          <Option value="T">Teacher</Option>
          <Option value="P">Principal</Option>
        </Select>
      </RowWrapper>
      <RowWrapper>
        <Label>Tell about yourself :-</Label>
        <TextArea onChange={handleChange} name="about" value={allData.about} />
      </RowWrapper>
      <RowWrapper>
        <Label>Select gender :-</Label>
        <p style={{ marginRight: "0" }}>male</p>
        <Input
          type="radio"
          style={{ width: "auto" }}
          name="gender"
          value="m"
          onChange={handleChange}
        />
        <p>female</p>
        <Input
          type="radio"
          style={{ width: "auto" }}
          name="gender"
          value="f"
          onChange={handleChange}
        />
      </RowWrapper>
      <SubmitButton onClick={handleSignUp}>SignUp</SubmitButton>
      <p>
        already have an account?{" "}
        <Link style={{ textDecoration: "none" }} to="/login">
          Login
        </Link>
      </p>
    </Container>
  );
};

export default Register;
