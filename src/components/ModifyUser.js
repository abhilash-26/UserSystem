import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useLocation } from "react-router";
import { useHistory } from "react-router";
import {
  RowWrapper,
  Title,
  Label,
  Input,
  Select,
  Option,
  SubmitButton,
} from "./Register";

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const ModifyUser = () => {
  const location = useLocation();
  const person = location.state;

  const [allData, setAllData] = useState({
    name: person.name,
    email: person.email,
    phoneNumber: person.phoneNumber,
    profession: person.profession,
    gender: person.gender,
    about: person.about,
  });
  const history = useHistory();

  const handleChange = (e) => {
    setAllData({
      ...allData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    const userId = person._id;
    const result = await axios({
      method: "put",
      url: `http://localhost:8080/user/update-user/?${userId}`,
      data: allData,
    });
    // if (result.data.status == 0) {
    //   alert("data updated");
    //   history.push("/home");
    // }
    console.log(result);
  };

  return (
    <Container>
      <Title>Update your Details here</Title>
      <RowWrapper>
        <Label>Name:-</Label>
        <Input value={allData.name} name="name" onChange={handleChange} />
      </RowWrapper>
      <RowWrapper>
        <Label>Email:-</Label>
        <Input value={allData.email} name="email" onChange={handleChange} />
      </RowWrapper>
      <RowWrapper>
        <Label>Phone:-</Label>
        <Input
          value={allData.phoneNumber}
          name="phoneNumber"
          onChange={handleChange}
        />
      </RowWrapper>
      {/* <RowWrapper>
        <Label>Gender:-</Label>
        <Select value={allData.gender} />
      </RowWrapper> */}
      <SubmitButton onClick={(e) => handleSubmit(e)}>Update</SubmitButton>
    </Container>
  );
};

export default ModifyUser;
