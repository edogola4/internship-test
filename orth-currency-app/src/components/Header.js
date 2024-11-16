import React from "react";
import styled from "styled-components";

const HeaderWrapper = styled.header`
  background-color: #0077b6;
  color: white;
  padding: 1rem;
  text-align: center;
  font-size: 1.8rem;
  font-weight: bold;
  position: sticky;
  top: 0;
  z-index: 10;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

  /* Mobile Responsiveness */
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Header = () => (
  <HeaderWrapper aria-label="Currency Exchange Rates Header">
    Currency Exchange Rates
  </HeaderWrapper>
);

export default Header;
