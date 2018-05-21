import React, { Component } from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/lib/fa";
import { IoAndroidMoreVertical } from "react-icons/lib/io";

const StyledInput = styled.input`
  width: 100%;
  height: 100%;
  padding: 0;
  border: none;
  &:focus {
    outline: 0;
  }
`;

const SearchWarpper = styled.div`
  width: 100%;
  height: 3rem;
  border-bottom: 1px solid #ddd;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

class Search extends Component {
  render() {
    const { placeholder, isMore } = this.props;
    return (
      <SearchWarpper>
        <FaSearch
          size={20}
          style={{ margin: "auto", color: "#999", flexBasis: "3rem" }}
        />
        <StyledInput
          type="text"
          placeholder={placeholder}
          style={{ flex: 1, fontSize: "0.9rem" }}
        />
        {isMore && (
          <IoAndroidMoreVertical
            size={25}
            style={{ margin: "auto", color: "#999", flexBasis: "2rem" }}
          />
        )}
      </SearchWarpper>
    );
  }
}

export default Search;
