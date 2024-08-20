import { AppBar, Avatar } from "@mui/material";
import React from "react";

const Header = () => {
  return(
    <AppBar position="static" elevation={0} className="!h-[65px] !pl-[60px] !pr-[20px] !bg-header-gray">
      <div className="flex justify-between items-center h-full">
        <img src='/logoipsum.png' className="h-[60px]" />
        <Avatar>AA</Avatar>
      </div>
    </AppBar>
  )
}

export default Header;