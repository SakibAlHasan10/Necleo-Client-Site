import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import { Outlet } from "react-router-dom";
import DashboardRoute from "./DashboardRoute";
import logo from "../../assets/logo.png";
import avatar from "../../assets/Ellipse 1.png";
import { BiSolidDownArrow } from "react-icons/bi";

const drawerWidth = 240;

const Dashboard = () => {
  // const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Remove this const when copying and pasting into your project.
  // const container =
    // window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          bgcolor: "#fff",
          zIndex: 9900,
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 1, display: { sm: "none" }, color: "#000", }}
            >
              <MenuIcon />
            </IconButton>
            <Box
              component="img"
              sx={{
                height: 27,
                width: 77,
              }}
              alt="logo"
              src={logo}
            />
          </Box>
          <div className="text-black flex items-center gap-[14px]">
            <div>
              <div className="flex">
                <h4 className="text-sm text-black mr-3 pr-3 font-medium border-r-2 border-black">
                  Free Trial
                </h4>
                <p className="text-[10px] font-normal">2 days left</p>
              </div>
              <p className="text-[#FA782F] mt-2 text-[10px] font-normal">
                Extend free trail
              </p>
            </div>
            <div className="flex gap-3 items-center">
              <img src={avatar} alt="avatar" className="w-9 h-9" />
              <BiSolidDownArrow />
            </div>
          </div>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          // container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          <DashboardRoute />
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            zIndex: 1300,
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          <DashboardRoute />
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
};

Dashboard.propTypes = {
  window: PropTypes.func,
};

export default Dashboard;
