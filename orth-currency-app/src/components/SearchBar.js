import React from "react";
import styled from "styled-components";

const SearchWrapper = styled.div`
  position: sticky;
  top: 0;
  background: white;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 100;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const SearchBar = ({ searchTerm, onSearch }) => {
  return (
    <SearchWrapper>
      <Input
        type="text"
        value={searchTerm}
        onChange={(e) => onSearch(e.target.value)}
        placeholder="Search by currency or country..."
      />
    </SearchWrapper>
  );
};

export default SearchBar;
