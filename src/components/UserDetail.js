import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div``;
const Table = styled.table`
  border: 1px solid black;
  border-collapse: collapse;
  td {
    font-size: 20px;
    border: 1px solid black;
  }
`;
const Tr = styled.tr`
  border: 1px solid black;
`;
const Th = styled.th`
  border: 1px solid black;
`;
const EditButton = styled(Link)`
  background-color: red;
  border: none;
  border-radius: 5px;
  color: white;
`;

const UserDetail = () => {
  const [allUser, setAllUser] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const result = await axios({
        method: "get",
        url: "http://localhost:8080/user/get-all-user",
      });
      console.log(result);
      setAllUser(result.data);
    };
    getData();
  }, []);

  return (
    <Container>
      <Table>
        <Tr>
          <Th>Name</Th>
          <Th>Email</Th>
          <Th>Phone</Th>
          <Th>About</Th>
          <Th>Action</Th>
        </Tr>
        {allUser?.map((item, index) => (
          <Tr key={index}>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.phoneNumber}</td>
            <td>{item.about}</td>
            <td>
              <EditButton to={{ pathname: "/modify-user", state: item }}>
                Edit
              </EditButton>
            </td>
          </Tr>
        ))}
      </Table>
    </Container>
  );
};

export default UserDetail;
