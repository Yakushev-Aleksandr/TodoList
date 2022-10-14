import React from "react";
import styled from "styled-components";

type Props = {
  backgroundColor: string;
  children: React.ReactNode;
  onClick: () => void;
  Test: () => void;
};

const ButtonStyled = styled.button<Props>`
  background-color: ${(props) => props.backgroundColor};
  box-shadow: 3px 3px 1px 1px rgba(0, 0, 255, 0.2);
  border: 1px solid blue;
  font-size: 18px;
  margin-left: 10px;
  border-radius: 5px;
  cursor: pointer;
`;

const Button: React.FC<Props> = (props) => {
  let { children, backgroundColor, Test } = props;
  return (
    <ButtonStyled {...props} backgroundColor={backgroundColor} onClick={Test}>
      {children}
    </ButtonStyled>
  );
};

export default Button;

/* type Props = {
  backgroundColor: string;
  children: React.ReactNode;
};

const Button: React.FC<Props> = ({ backgroundColor, children }: Props) => {
  return <button>{children}</button>;
};

export default Button; */

/* const ButtonStyled: React.FC = styled(Button)`
  background-color: ${(props) => props.backgroundColor};
  box-shadow: 3px 3px 1px 1px rgba(0, 0, 255, 0.2);
  border: 1px solid blue;
  font-size: 18px;
  margin-left: 10px;
  border-radius: 5px;
  cursor: pointer;
`;

export default ButtonStyled; */
/* 
const EditButton: React.FC<Props> = ({ children, backgroundColor }: Props) => {
  return (
    <ButtonStyled
      backgroundColor={backgroundColor}
      onClick={() => {
        console.log("EditButton");
      }}
    >
      {children}
    </ButtonStyled>
  );
};

export default EditButton;
 */
