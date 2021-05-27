import React from "react";
import { Input } from "antd";
import { AudioOutlined } from "@ant-design/icons";

const { Search } = Input;

function SearchInput({input}) {
  return (
    <Search placeholder="input search text" onSearch={onSearch} enterButton />
  );

  function onSearch() {
    console.info("search");
  }
}

export default SearchInput;
