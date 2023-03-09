import styled from "styled-components"

interface IButton {
  children: string
  buttonType: "number" | "operator" | "function"
  style?: React.CSSProperties
}

const StyledButton = styled.button<IButton>`
  background-color: ${(props) =>
    props.buttonType === "operator"
      ? props.theme.colors.operators
      : props.buttonType === "number"
      ? props.theme.colors.numbers
      : props.theme.colors.defaultButton};

  color: ${(props) =>
    props.buttonType === "function" ? "#000000" : "#ffffff"};
  height: 3rem;
  border: none;
  border-radius: 1.5rem;
  font-size: 1.5rem;
  line-height: 1;
  text-align: center;
  cursor: pointer;
  transition: opacity 0.2s ease;
  display inline-flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 0.8;
  }
`
const Button = ({ children, buttonType, style }: IButton) => {
  return (
    <StyledButton buttonType={buttonType} type="button" style={style}>
      {children}
    </StyledButton>
  )
}

export default Button
