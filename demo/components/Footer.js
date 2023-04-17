import styled from "@emotion/styled";
import React from "react";
import PersonalLogo from "./PersonalLogo";

const Footer = () => {
  return (
    <div className="bg-primary text-center d-flex justify-content-center align-items-center py-2 text-light flex-column">
      <div className="d-flex justify-content-center align-items-center ">
        {" "}
        Made with ❤ By <PersonalLogo />{" "}
      </div>
      <div className="d-flex justify-content-center align-items-center mt-2">
        <Button target="_blank" href="https://www.buymeacoffee.com/Mooder">
          <Image
            src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg"
            alt="Buy me a coffee"
          />
          <Text>Buy me a coffee</Text>
        </Button>
      </div>
    </div>
  );
};

export default Footer;

const Button = styled.a`
  line-height: 2;
  height: 3rem;
  text-decoration: none;
  display: inline-flex;
  color: #ffffff;
  background-color: #ee5c5d;
  border-radius: 5px;
  border: 1px solid transparent;
  padding: 0.7rem 1rem 0.7rem 1rem;
  font-size: 1rem;
  letter-spacing: 0.6px;
  box-shadow: 0px 1px 2px rgba(190, 190, 190, 0.5);
  transition: 0.3s all linear;
  display: flex;
  justify-content: center;
  align-items: center;
  /* font-family: cursive; */
  &:hover,
  &:active,
  &:focus {
    text-decoration: none;
    box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5);
    opacity: 0.85;
    color: #ffffff;
  }
`;

const Image = styled.img`
  height: 34px;
  width: 35px;
  margin-bottom: 1px;
  box-shadow: none;
  border: none;
  vertical-align: middle;
`;

const Text = styled.span`
  margin-left: 15px;
  font-size: 1rem;
  vertical-align: middle;
`;
