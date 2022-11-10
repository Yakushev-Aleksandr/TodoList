import React from "react";
import styled from "styled-components";

type Props = {
  children: React.ReactNode;

  userActions: () => void;
};

const ButtonStyled = styled.div<Props>``;

const ButtonWrapper: React.FC<Props> = (props) => {
  let { children, userActions } = props;
  return (
    <ButtonStyled {...props} onClick={userActions}>
      {children}
    </ButtonStyled>
  );
};

export default ButtonWrapper;
