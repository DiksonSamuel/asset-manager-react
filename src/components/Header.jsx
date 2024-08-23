import { AppBar, Avatar, Tab, Tabs } from "@mui/material";
import React from "react";
import Strings from "../utils/strings";
import { useLocation, useNavigate } from "react-router-dom";
import RouterPath from "../routes/routerPath";

const Header = () => {

  const location = useLocation();
  const navigate = useNavigate()

  const currentTab = () => {
    switch (location.pathname) {
      case RouterPath.DASHBOARD:
        return 1;
      case RouterPath.ASSETS:
        return 2;
    }
  };

  const handleTabChange = (event, newValue) => {
    if (newValue === 1) navigate(RouterPath.DASHBOARD);
    if (newValue === 2) navigate(RouterPath.ASSETS);
  };

  return (
    <AppBar position="static" elevation={0} className="!h-[65px] !pl-[60px] !pr-[20px] !bg-header-gray">
      <div className="flex justify-between items-center h-full">
        <div className="flex items-center">
          <img src='/logoipsum.png' className="h-[60px] mr-[30px]" />
          <Tabs value={currentTab()} onChange={handleTabChange} centered>
            <Tab value={1} label={Strings.dashboard} />
            <Tab value={2} label={Strings.assets} />
          </Tabs>
        </div>

        <Avatar>AA</Avatar>
      </div>
    </AppBar>
  )
}

export default Header;