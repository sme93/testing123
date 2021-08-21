import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  padding: 20px;
  background-color: blue;
  color: white;

  .purple {
    color: purple;
  }
`;

const StyledHeading = styled.h3`
  padding: 20px;
  background-color: blue;
  color: black;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <StyledHeading>What</StyledHeading>This is a footer{" "}
      <span className="purple">some words</span> extra content
    </StyledFooter>
  );
};

export default Footer;
