import styled from "styled-components";
import { SearchOutlined } from "@ant-design/icons";

export default function SearchBar() {
  return (
    <>
      <BarContainer>
        <SearchOutlinedContainer>
          <SearchOutlined
            style={{ color: "#8020de", fontSize: "1.5vw" }}
          ></SearchOutlined>
        </SearchOutlinedContainer>
        <Bar placeholder={"Search everything you want..."}></Bar>
      </BarContainer>
    </>
  );
}

const BarContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const Bar = styled.input`
  width: 45vw;
  height: 2.5vmax;
  // border: 1px solid #8020de;
  border: 1px solid rgba(255, 255, 255, 0);
  border-radius: 30px;
  background: rgba(255, 255, 255, 0.6);
  padding: 0 7% 0 7%;
  font-size: 1.3vw;
  :focus {
    outline: none;
    border: 1px solid #8020de;
  }
`;

const SearchOutlinedContainer = styled.div`
  position: absolute;
  top: 0;
  left: 2%;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 10px;
`;
