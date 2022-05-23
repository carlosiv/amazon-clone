import React from "react";
import styled from "styled-components";
import logo from "../assets/images/amazon_logo1.png";
import searchIcon from "../assets/images/searchIcon.png";
import basketIcon from "../assets/images/basket-icon.png";

const Navbar = () => {
  return (
    <Container>
      <Inner>
        <Logo>
          <img src={logo} alt="amazon logo" />
        </Logo>
        <Searchbar>
          <input type="text" placeholder="Search" />
          <SearchIcon>
            <img src={searchIcon} alt="search icon" />
          </SearchIcon>
        </Searchbar>
        <RightContainer>
          <NavButton>
            <p>Hello,</p>
            <p>Guest</p>
          </NavButton>
          <NavButton>
            <p>Return</p>
            <p>& Orders</p>
          </NavButton>
          <BasketButton>
            <img src={basketIcon} alt="basket icon" />
            <p>0</p>
          </BasketButton>
        </RightContainer>
      </Inner>
      <MobileSearchbar>
        <input type="text" placeholder="Search..." />
        <SearchIcon>
          <img src={searchIcon} alt="search icon" />
        </SearchIcon>
      </MobileSearchbar>
    </Container>
  );
};

export default Navbar;

const Container = styled.div`
  width: 100%;
  height: 60px;
  background-color: #131921;
  display: flex;
  align-items: center;
  position: relative;

  @media only screen and (max-width: 767px) {
    height: 120px;
    flex-direction: column;
  }
`;

const Inner = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  @media only screen and (max-width: 767px) {
    justify-content: space-between;
  }
`;

const Logo = styled.div`
  margin-left: 20px;
  cursor: pointer;

  img {
    width: 100px;
    margin-top: 10px;
  }
`;

const Searchbar = styled.div`
  height: 35px;
  flex: 1;
  margin: 0px 35px;
  display: flex;
  align-items: center;

  input {
    flex: 1;
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 5px 0px 0px 5px;

    &::placeholder {
      padding-left: 5px;
    }
  }
  @media only screen and (max-width: 767px) {
    display: none;
  }
`;

const MobileSearchbar = styled.div`
  height: 35px;
  width: 90%;
  display: flex;
  align-items: center;
  padding: 10px;
  input {
    flex: 1;
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 5px 0px 0px 5px;
    &::placeholder {
      padding-left: 10px;
    }
  }
  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

const SearchIcon = styled.div`
  background-color: #febb69;
  height: 100%;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0px 5px 5px 0px;
  padding: 1px 0px; //to fix height issue
  img {
    width: 22px;
  }
`;

const RightContainer = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  justify-content: space-around;
  height: 100%;
  padding: 5px 15px;
`;

const NavButton = styled.div`
  color: #fff;
  padding: 5px;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-right: 15px;
  p {
    margin: 0px; //fix height issue
    &:nth-child(1) {
      font-size: 12px;
    }
    &:nth-child(2) {
      font-size: 14px;
      font-weight: 600;
    }
  }
`;

const BasketButton = styled.div`
  display: flex;
  align-items: center;
  height: 90%;
  cursor: pointer;
  img {
    width: 30px;
    margin-right: 10px;
  }
  p {
    color: #fff;
    font-weight: 500;
  }
`;
