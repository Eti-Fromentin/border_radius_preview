import React, { FunctionComponent } from "react";
import styled from "styled-components";

interface Props {
  name: string;
  value: string;
  onChange: (newValue: string) => void;
}

export const ColorInput: FunctionComponent<Props> = ({
  onChange,
  value,
  name,
}) => {
  return (
    <Input>
      <input
        type="color"
        value={value}
        onChange={(event) => onChange(event?.target.value)}
      />
      <label>{name}</label>
    </Input>
  );
};

const Input = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Label = styled.label`
  width: 5vw;
`;
