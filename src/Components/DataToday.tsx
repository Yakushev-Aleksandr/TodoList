import React from "react";
import styled from "styled-components";

const DataTodayStyled = styled.div`
  margin: 10px 10px 10px 10px;
  font-size: 18px;
`;

const DataToday: React.FC = () => {
  let date: Date = new Date();

  var options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
  };

  return (
    <DataTodayStyled> {date.toLocaleString("ru", options)} </DataTodayStyled>
  );
};

export default DataToday;
