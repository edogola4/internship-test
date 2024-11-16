import React from "react";
import styled from "styled-components";
import { FiSearch } from "react-icons/fi"; // Importing a modern search icon

const SearchWrapper = styled.div`
  position: sticky;
  top: 0;
  background: #f8f9fa;
  padding: 0.75rem 1rem;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  z-index: 100;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Input = styled.input`
  flex: 1;
  padding: 0.5rem 0.75rem;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 6px;
  transition: all 0.3s ease;
  
  &:focus {
    border-color: #0077b6;
    box-shadow: 0 0 4px rgba(0, 119, 182, 0.5);
    outline: none;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 0.5rem;
  }
`;

const IconWrapper = styled.div`
  color: #6c757d;
  font-size: 1.2rem;
`;

const SearchBar = ({ searchTerm, onSearch }) => {
  return (
    <SearchWrapper>
      <IconWrapper>
        <FiSearch />
      </IconWrapper>
      <Input
        type="text"
        value={searchTerm}
        onChange={(e) => onSearch(e.target.value)}
        placeholder="Search by currency or country..."
        aria-label="Search currencies or countries"
      />
    </SearchWrapper>
  );
};

export default SearchBar;
