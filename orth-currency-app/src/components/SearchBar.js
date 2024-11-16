import React from "react";
import styled from "styled-components";

const SearchWrapper = styled.div`
  position: sticky;
  top: 0;
  background: #f9f9f9;
  padding: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InputWrapper = styled.div`
  width: 100%;
  max-width: 600px;
  position: relative;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.8rem 1rem;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 30px;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  outline: none;

  &:focus {
    border-color: #0077b6;
    box-shadow: 0 0 8px rgba(0, 119, 182, 0.3);
  }

  &::placeholder {
    color: #aaa;
  }
`;

const Label = styled.label`
  position: absolute;
  top: -1.5rem;
  left: 1rem;
  font-size: 0.9rem;
  color: #555;
`;

const SearchBar = ({ searchTerm, onSearch }) => {
  return (
    <SearchWrapper>
      <InputWrapper>
        <Label htmlFor="search-input">Search Currencies</Label>
        <Input
          id="search-input"
          type="text"
          value={searchTerm}
          onChange={(e) => onSearch(e.target.value)}
          placeholder="Search by currency or country..."
        />
      </InputWrapper>
    </SearchWrapper>
  );
};

export default SearchBar;
