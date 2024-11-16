import React from "react";
import styled from "styled-components";

const HeaderWrapper = styled.header`
  background-color: #0077b6;
  color: white;
  padding: 1rem;
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;

  /* Responsive Design */
  @media (max-width: 768px) {
    font-size: 1.2rem;
    padding: 0.8rem;
  }
`;

const Header = () => (
  <HeaderWrapper role="banner">Currency Exchange Rates</HeaderWrapper>
);

export default Header;
