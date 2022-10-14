import React from "react";
import DataToday from "./DataToday";
import Calendar from "./Calendar";
import styled from "styled-components";

type Props = {
  backgroundColor: string;
};

const HeaderWrapperStyled = styled.div<Props>`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  background-color: ${(props) => props.backgroundColor};
  padding: 5px 0 5px 0;
`;

const Header: React.FC<Props> = ({ backgroundColor }: Props) => {
  return (
    <HeaderWrapperStyled backgroundColor={backgroundColor}>
      <DataToday />
      <Calendar />
    </HeaderWrapperStyled>
  );
};

export default Header;
