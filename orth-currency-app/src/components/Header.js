import styled from 'styled-components';

const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  background: white;
  z-index: 100;
  padding: 10px;
  text-align: center;
`;

const Header = () => (
  <HeaderContainer>
    <h1>Currency Exchange Rates</h1>
  </HeaderContainer>
);

export default Header;