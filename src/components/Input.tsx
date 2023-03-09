import styled from "styled-components"
import { useState } from "react"
const StyledInput = styled.input`
  background-color: transparent;
  border: none;
  font-size: 3vw;

  &:focus,
  &:hover,
  &:active {
    outline: none;
  }
`
const Input = ({}) => {
  const [value, setValue] = useState("0")
  return (
    <StyledInput
      type="number"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  )
}

export default Input
