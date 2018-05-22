import React, { Component } from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/lib/fa";
import { IoAndroidMoreVertical, IoIosClose } from "react-icons/lib/io";

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

const T = ({ isTyping, handleClear }) => {
  if (isTyping)
    return (
      <IoIosClose
        size={25}
        style={{ margin: "auto", color: "#999", flexBasis: "2rem" }}
        onClick={handleClear}
      />
    );
  else
    return (
      <IoAndroidMoreVertical
        size={25}
        style={{ margin: "auto", color: "#999", flexBasis: "2rem" }}
      />
    );
};

const T2 = ({ isTyping, handleClear }) => {
  if (isTyping)
    return (
      <IoIosClose
        size={25}
        style={{ margin: "auto", color: "#999", flexBasis: "2rem" }}
        onClick={handleClear}
      />
    );
  else return null;
};

class Search extends Component {
  state = {
    isTyping: false,
    search: ""
  };

  handleChange = e => {
    console.log(e.target.value);
    if (e.target.value.length > 0) {
      this.setState({
        search: e.target.value,
        isTyping: true
      });
    } else {
      this.setState({
        search: e.target.value,
        isTyping: false
      });
    }
  };

  handleClear = e => {
    this.setState({
      search: "",
      isTyping: false
    });
  };

  handleToggle = () => {
    // Todo: 클릭 이벤트
  };

  render() {
    const { placeholder, isMore } = this.props;
    const { search, isTyping } = this.state;

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
          value={search}
          onChange={this.handleChange}
        />
        {isMore ? (
          <T isTyping={isTyping} handleClear={this.handleClear} />
        ) : (
          <T2 isTyping={isTyping} handleClear={this.handleClear} />
        )}
      </SearchWarpper>
    );
  }
}

export default Search;
