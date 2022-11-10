import React from "react";

import { useLocation } from "react-router-dom";

const SelectedDate: React.FC = () => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const local = useLocation();

  let selectedDate = new Date(local.pathname.replace("/", "")).toLocaleString(
    "ru",
    options
  );

  console.log(selectedDate);

  return (
    <div>
      <div>Выбранная дата: </div>
      <hr />
      <div>{selectedDate}</div>

      <hr />
      {/*  <button>Вернутся на сегодняшний список дел</button> */}
    </div>
  );
};

export default SelectedDate;
