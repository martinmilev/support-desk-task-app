import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Input,
  InputAdornment,
} from "@mui/material";
import IconSearch from "../../assets/icon-search.svg";

const Header = ({ onSearch }) => (
  <AppBar>
    <Toolbar>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        Support Desk
      </Typography>
      <Input
        id="search"
        label="Search"
        placeholder="Search"
        size="small"
        sx={{ backgroundColor: "white", paddingInline: "10px" }}
        onKeyDown={(e) =>
          e.key === "Enter" && onSearch(e.target.value.toLowerCase())
        }
        endAdornment={
          <InputAdornment position="end">
            <img src={IconSearch} height={15} />
          </InputAdornment>
        }
      />
    </Toolbar>
  </AppBar>
);

export default Header;
