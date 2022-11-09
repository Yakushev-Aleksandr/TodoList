import React from "react";
import DateToday from "./DateToday";
import Calendar from "./Calendar";
import SelectedDate from "./SelectedDate";
import styled from "styled-components";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const HeaderWrapperStyled = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: nowrap;
  justify-content: space-between;
`;

const Header: React.FC = () => {
  return (
    <div>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <HeaderWrapperStyled>
              <Typography
                variant="h6"
                noWrap
                component="a"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "Georgia, serif",
                  fontWeight: 700,
                  letterSpacing: "normal",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                <DateToday />
              </Typography>

              <Typography
                variant="h6"
                noWrap
                component="a"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "Georgia, serif",
                  fontWeight: 700,
                  letterSpacing: "normal",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                <SelectedDate />
              </Typography>
              <Calendar />
            </HeaderWrapperStyled>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default Header;
