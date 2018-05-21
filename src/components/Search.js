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
    return (
      <SearchWarpper>
        <FaSearch size={30} style={{ margin: "1rem", color: "#999" }} />
        <StyledInput type="text" placeholder="채팅방 이름, 참여자 검색" />
        <IoAndroidMoreVertical
          size={30}
          style={{ margin: "1rem", color: "#999" }}
        />
      </SearchWarpper>
    );
  }
}

export default Search;
