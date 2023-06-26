import React from "react";
import styled from "styled-components";

interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
  label?: string;
  size?: "small" | "medium" | "large";
  handleOnChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input_ = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, size = "medium", handleOnChange, ...props }, ref) => {
    return (
      <>
        <CustomInput
          placeholder={label}
          className={size}
          onChange={handleOnChange ? (e) => handleOnChange(e) : undefined}
          maxLength={15}
          {...props}
          ref={ref}
        />
      </>
    );
  }
);

const CustomInput = styled.input`
  border: 1px solid rgba(0, 0, 0, 0);
  outline: none;
  border-radius: 20px;
  box-shadow: rgba(105, 103, 103, 0.118) 0px 0px 10px;
  font-family: Noto Sans KR;
  color: #707070;

  :focus {
    border: 1px solid #aaaaaa;
  }

  &.small {
    width: 20vw;
    height: 18px;
    font-size: 1vw;
    padding: 5px;
  }

  &.medium {
    width: 30vw;
    height: 22px;
    font-size: 1.2vw;
    padding: 8px;
  }

  &.large {
    width: 40vw;
    height: 24px;
    font-size: 1.6vw;
    padding: 10px;
  }

  ::placeholder {
    &.small {
      font-size: 1.2vw;
    }

    &.medium {
      font-size: 1.4vw;
    }

    &.large {
      font-size: 1.6vw;
    }
    font-weight: 500;
  }
`;

const Input = React.memo(Input_);
export default Input;
