import React, {FunctionComponent} from 'react'
import styled from "styled-components";

interface Props {
    name: string,
    value: number,
    maxValue?: number,
    step?: number,
    onChange: (newValue: number) => void,
}

export const RangeInput: FunctionComponent<Props> = ({name, onChange, value, maxValue = 100, step = 1}) => {
  return (
    <Range>
    <input type='range' min='0' max={maxValue} value={value} name={name} step={step} onChange={(event) => onChange(Number(event.target.value))}/>
    <label htmlFor={name}>{name}</label>
    </Range>
  )
}

const Range = styled.div`
width: 80%;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
`;

const NumberInput = styled.input`
width: 5vw;
`;
