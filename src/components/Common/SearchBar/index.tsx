import { IconButton, InputBase, Paper } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useTranslation } from "react-i18next";
export default function SearchBar() {
  const { t } = useTranslation();
  return (
    <>
      <div className="px-[40px] flex justify-center items-center xl:hidden">
        <Paper
          component="form"
          className="w-full"
          sx={{
            p: "1px 10px",
            display: "flex",
            alignItems: "center",
            borderRadius: 3,
            height: 40,
            backgroundColor: "#E6E7E9",
            boxShadow: "none",
          }}
        >
          <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
          <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search" />
        </Paper>
      </div>

      <div className="hidden xl:flex px-[40px] justify-center items-center">
        <Paper
          component="form"
          className="w-full"
          sx={{
            p: "1px 10px",
            display: "flex",
            alignItems: "center",
            borderRadius: 3,
            height: 40,
            boxShadow: "1px 1px 4px rgba(0,0,0,0.4)",
          }}
        >
          <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
          <InputBase sx={{ ml: 1, flex: 1 }} placeholder={t("Search")} />
        </Paper>
      </div>
    </>
  );
}
