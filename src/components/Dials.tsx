import {
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  useEffect,
} from "react"
import styled from "styled-components"
import Button from "./Button"
import Input from "./Input"

const StyledNumbers = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 0.667rem;
  margin: 0 0.5rem;
`
const StyledWrapper = styled.div`
  max-width: 15rem;
  margin: auto;
`

const Dials = () => {
  const displays: {
    type: "number" | "function" | "operator"
    label: string
  }[] = [
    { type: "function", label: "AC" },
    { type: "function", label: "+/-" },
    { type: "function", label: "%" },
    { type: "operator", label: "÷" },
    { type: "number", label: "7" },
    { type: "number", label: "8" },
    { type: "number", label: "9" },
    { type: "operator", label: "×" },
    { type: "number", label: "4" },
    { type: "number", label: "5" },
    { type: "number", label: "6" },
    { type: "operator", label: "–" },
    { type: "number", label: "1" },
    { type: "number", label: "2" },
    { type: "number", label: "3" },
    { type: "operator", label: "+" },
    { type: "number", label: "0" },
    { type: "number", label: "," },
    { type: "operator", label: "=" },
  ]

  return (
    <StyledWrapper>
      <Input />
      <StyledNumbers>
        {displays.map((item) => (
          <Button
            buttonType={item.type}
            key={`${item.label}-${item.type}`}
            style={
              item.label === "0" ? { gridColumnStart: 1, gridColumnEnd: 3 } : {}
            }
          >
            {item.label}
          </Button>
        ))}
      </StyledNumbers>
    </StyledWrapper>
  )
}

export default Dials
