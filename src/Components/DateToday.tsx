import React from "react";
import styled from "styled-components";

const DateTodayStyled = styled.div`
  margin: 10px 10px 10px 10px;
  font-size: 18px;
`;

const DateToday: React.FC = () => {
  let date: Date = new Date();

  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
  };

  return (
    <DateTodayStyled> {date.toLocaleString("ru", options)} </DateTodayStyled>
  );
};

export default DateToday;
