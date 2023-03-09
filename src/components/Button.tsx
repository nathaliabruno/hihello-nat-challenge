import styled from "styled-components"

interface IButton {
  label: string
  buttonType: "number" | "operator" | "function"
  width?: string
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
  width: ${(props) => (props.width ? props.width : "3rem")};
  height: 3rem;
  border: none;
  border-radius: 50%;
  font-size: 1.5rem;
  line-height: 3rem;
  text-align: center;
  cursor: pointer;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.8;
  }
`
const Button = ({ label, buttonType }: IButton) => {
  return (
    <>
      <StyledButton buttonType={buttonType} type="button">
        {label}
      </StyledButton>
    </>
  )
}

export default Button
