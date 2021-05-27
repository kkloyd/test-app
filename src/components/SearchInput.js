import React from "react";
import { Input } from "antd";

const { Search } = Input;

function SearchInput({handleSearch}) {
  return (
    <Search 
      placeholder="input search text" 
      enterButton 
      allowClear 
      onSearch={onSearch} 
    />
  );

  function onSearch(val) {
    handleSearch(val)
  }
}

export default SearchInput;
