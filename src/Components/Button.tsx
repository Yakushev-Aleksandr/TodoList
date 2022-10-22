import React from "react";
import styled from "styled-components";

type Props = {
  backgroundColor: string;
  children: React.ReactNode;

  userActions: () => void;
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
  let { children, backgroundColor, userActions } = props;
  return (
    <ButtonStyled
      {...props}
      backgroundColor={backgroundColor}
      onClick={userActions}
    >
      {children}
    </ButtonStyled>
  );
};

export default Button;
