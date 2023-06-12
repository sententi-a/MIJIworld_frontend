import React from "react";
import styled from "styled-components";
import { SearchOutlined } from "@ant-design/icons";

interface SearchBarProps {
  placeholder?: string;
  color?: string;
  handleOnChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function SearchBar_({ placeholder, color, handleOnChange }: SearchBarProps) {
  return (
    <>
      <Container>
        <IconContainer>
          <SearchOutlined
            style={{ color: color || "#8020de", fontSize: "1.5vw" }}
          ></SearchOutlined>
        </IconContainer>
        <Bar
          placeholder={placeholder || "Search everything you want..."}
          color={color}
          // onChange={(event) => handleOnChange(event)}
        ></Bar>
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const Bar = styled.input<{ color: string | undefined }>`
  width: 45vw;
  height: 2.5vmax;
  border: 1px solid rgba(255, 255, 255, 0);
  border-radius: 30px;
  background: rgba(255, 255, 255, 0.6);
  padding: 0 7% 0 7%;
  font-size: 1.3vw;
  :focus {
    outline: none;
    border: 1px solid ${(props) => props.color || "#8020de"};
  }
`;

const IconContainer = styled.div`
  position: absolute;
  top: 0;
  left: 2%;
  bottom: 0;
`;

const SearchBar = React.memo(SearchBar_);
export default SearchBar;
