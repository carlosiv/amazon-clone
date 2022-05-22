import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <Container>
      <Navbar />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  width: 100%;
`;
