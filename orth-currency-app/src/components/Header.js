import React from "react";
import styled from "styled-components";

const HeaderWrapper = styled.header`
  background-color: #0077b6;
  color: white;
  padding: 1rem;
  text-align: center;
  font-size: 1.5rem;
`;

const Header = () => <HeaderWrapper>Currency Exchange Rates</HeaderWrapper>;

export default Header;
