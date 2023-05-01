import styled from "styled-components";

interface CustomInputProps {
  label: string;
}

export default function CustomInput({ label }: CustomInputProps) {
  return (
    <>
      <div style={{ width: "100%", margin: "5px" }}>
        <Label>{label}</Label>
        <Input />
      </div>
    </>
  );
}

const Label = styled.label`
  font-size: 1.3vw;
  font-weight: 500;
  background-color: #cccccc;
  padding: 10px;
  border-radius: 20px;
  margin-right: 10px;
  color: white;
`;

const Input = styled.input`
  width: 50%;
  height: 40px;
  border: 1px solid rgba(0, 0, 0, 0);
  box-shadow: 0 1px 3px 0 #cccccc;
  border-radius: 10px;
  font-size: 1.2vw;
  color: #505050;
  outline: none;
  padding: 0 10px 0 10px;

  :focus {
    border: 1px solid #aaaaaa;
  }
`;

export { Label };
