import styled from "styled-components";
import Button from "./Button";

const ButtonStyled: React.FC = styled(Button)`
  background-color: ${(props) => props.backgroundColor};
  box-shadow: 3px 3px 1px 1px rgba(0, 0, 255, 0.2);
  border: 1px solid blue;
  font-size: 18px;
  margin-left: 10px;
  border-radius: 5px;
  cursor: pointer;
`;

export default ButtonStyled;
