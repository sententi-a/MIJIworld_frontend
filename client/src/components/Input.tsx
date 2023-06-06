import React from "react";
import styled from "styled-components";
import { useState, useCallback } from "react";

interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
  label?: string;
  size?: "small" | "medium" | "large";
  handleOnChange: Function;
}

function Input_({ label, size, handleOnChange, ...props }: InputProps) {
  return (
    <div>
      <CustomLabel className={size ? size : "medium"}>{label}</CustomLabel>
      <CustomInput
        className={size ? size : "medium"}
        onChange={(e) => handleOnChange(e)}
        {...props}
      />
    </div>
  );
}

const CustomLabel = styled.label`
  font-family: Noto Sans KR;
  font-weight: 700;
  color: #db7976;
  margin: 1vw;

  &.small {
    font-size: 1.2vw;
  }

  &.medium {
    font-size: 1.4vw;
  }

  &.large {
    font-size: 1.6vw;
  }
`;

const CustomInput = styled.input`
  border: 1px solid rgba(0, 0, 0, 0);
  outline: none;
  border-radius: 10px;
  box-shadow: 0 1px 3px 0 #cccccc;
  font-family: Noto Sans KR;
  color: #707070;

  :focus {
    border: 1px solid #aaaaaa;
  }

  &.small {
    width: 20vw;
    height: 18px;
    font-size: 1.2vw;
    padding: 5px;
  }

  &.medium {
    width: 30vw;
    height: 20px;
    font-size: 1.4vw;
    padding: 8px;
  }

  &.large {
    width: 40vw;
    height: 24px;
    font-size: 1.6vw;
    padding: 10px;
  }
`;

const Input = React.memo(Input_);
export default Input;
