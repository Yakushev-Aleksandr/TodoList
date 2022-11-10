import * as React from "react";
import { useEffect } from "react";
import dayjs, { Dayjs } from "dayjs";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const CalendarStyled = styled.div`
  margin: 10px 10px 10px 10px;
  font-size: 18px;
`;

const Calendar: React.FC = () => {
  const [value, setValue] = React.useState<Dayjs | null>(dayjs());
  const navigate = useNavigate();

  useEffect(() => {
    if (
      (value !== null && value !== undefined && !value) ||
      (value !== null && value !== undefined && value)
    ) {
      let date = value.format("MM-DD-YYYY");
      navigate(date);
    }
  }, [value, navigate]);

  return (
    <>
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
    </>
  );
};

export default Calendar;
