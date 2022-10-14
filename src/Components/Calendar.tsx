import * as React from "react";
import dayjs, { Dayjs } from "dayjs";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";

import styled from "styled-components";

const CalendarStyled = styled.div`
  margin: 10px 10px 10px 10px;
  font-size: 18px;
`;

export default function Calendar() {
  let date: Date = new Date();
  const [value, setValue] = React.useState<Dayjs | null>(dayjs(date));

  // Получаем датту, это нам пригодиться для реакт роутер https://day.js.org/docs/ru/get-set/date
  if (value) {
    console.log(value.date());
  }

  return (
    <CalendarStyled>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Stack spacing={3}>
          <DesktopDatePicker
            label="Выберите дату"
            value={value}
            minDate={dayjs("2021-01-01")}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </Stack>
      </LocalizationProvider>
    </CalendarStyled>
  );
}
