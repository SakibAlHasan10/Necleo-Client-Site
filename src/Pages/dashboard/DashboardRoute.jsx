import * as React from "react";
import PropTypes from "prop-types";
import List from "@mui/material/List";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import Paper from "@mui/material/Paper";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Link as RouterLink, MemoryRouter, NavLink } from "react-router-dom";
import { StaticRouter } from "react-router-dom/server";
import { Divider } from "@mui/material";
import { FaDatabase, FaPlayCircle } from "react-icons/fa";
import { TbAppsFilled, TbLayoutSidebarLeftCollapseFilled } from "react-icons/tb";
import { RiAppsFill } from "react-icons/ri";
import { MdHelp, MdFeedback } from "react-icons/md";
function Router(props) {
  const { children } = props;
  if (typeof window === "undefined") {
    return <StaticRouter location="/drafts">{children}</StaticRouter>;
  }

  return (
    <MemoryRouter initialEntries={["/drafts"]} initialIndex={0}>
      {children}
    </MemoryRouter>
  );
}

Router.propTypes = {
  children: PropTypes.node,
};

const Link = React.forwardRef(function Link(itemProps, ref) {
  return <RouterLink ref={ref} {...itemProps} role={undefined} />;
});

function ListItemLink(props) {
  const { icon, primary, to } = props;

  return (
    <li>
      <ListItem button component={Link} to={to}>
        {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
        <ListItemText primary={primary} />
      </ListItem>
    </li>
  );
}

ListItemLink.propTypes = {
  icon: PropTypes.element,
  primary: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

const DashboardRoute = () => {
  return (
    <Box sx={{ width: 360,mt:8}}>
      <Paper elevation={0}>
        <List
          aria-label="main mailbox folders"
          sx={{ color: "#C4C4C4", mr:"30px", mx: "20px", my: "20px" }}
        >
          <NavLink
            to={`/dashboard/my-project`}
            className={({ isActive, isPending }) =>
              isActive
                ? "active text-[#FA782F]"
                : isPending
                ? "pending"
                : "text-[#C4C4C4]"
            }
          >
            {/* other code */}
            <span className=" flex gap-[16px] md:gap-6 text-sm font-semibold items-center">
              <FaDatabase className="w-7 h-7" />
              My Projects
            </span>
          </NavLink>
          <NavLink
            to={`/dashboard/sample-projects`}
            className={({ isActive, isPending }) =>
              isActive
                ? "active text-[#FA782F]"
                : isPending
                ? "pending"
                : "text-[#C4C4C4]"
            }
          >
            {/* other code */}
            <span className=" flex gap-[16px] md:gap-6 mt-7 text-sm font-semibold items-center">
              <RiAppsFill className="w-7 h-7" />
              Sample Projects
            </span>
          </NavLink>
        </List>
          <Divider />
        <List
          aria-label="main mailbox folders"
          sx={{ color: "#C4C4C4", ml: "20px", my: "20px" }}
        >
          <NavLink
            to={`/`}
            className={({ isActive, isPending }) =>
              isActive
                ? "active text-[#FA782F]"
                : isPending
                ? "pending"
                : "text-[#C4C4C4]"
            }
          >
            {/* other code */}
            <span className=" flex gap-[16px] md:gap-6 text-sm font-semibold items-center">
              <TbAppsFilled className="w-7 h-7" />
              Apps
            </span>
          </NavLink>
          <NavLink
            to={`/`}
            className={({ isActive, isPending }) =>
              isActive
                ? "active text-[#FA782F]"
                : isPending
                ? "pending"
                : "text-[#C4C4C4]"
            }
          >
            {/* other code */}
            <span className=" flex gap-[16px] md:gap-6 mt-7 text-sm font-semibold items-center">
              <FaPlayCircle className="w-7 h-7" />
              Intro to Necleo
            </span>
          </NavLink>
        </List>
        <List
          aria-label="main mailbox folders"
          sx={{ color: "#C4C4C4", ml: "20px", mt:"80px", }}
        >
          <NavLink
            to={`/`}
            className={({ isActive, isPending }) =>
              isActive
                ? "active text-[#FA782F]"
                : isPending
                ? "pending"
                : "text-[#C4C4C4]"
            }
          >
            {/* other code */}
            <span className=" flex gap-[16px] md:gap-6 text-sm font-semibold items-center">
              <MdHelp className="w-7 h-7" />
              Help & Support
            </span>
          </NavLink>
          <NavLink to={"/"}
            className={({ isActive, isPending }) =>
              isActive
                ? "active text-[#FA782F]"
                : isPending
                ? "pending"
                : "text-[#C4C4C4]"
            }
          >
            {/* other code */}
            <span className=" flex gap-[16px] md:gap-6 mt-7 text-sm font-semibold items-center">
              <MdFeedback className="w-7 h-7" />
              Feedback
            </span>
          </NavLink>
          <NavLink
            to={`/`}
            className={({ isActive, isPending }) =>
              isActive
                ? "active text-[#FA782F]"
                : isPending
                ? "pending"
                : "text-[#000]"
            }
          >
            {/* other code */}
            <span className=" flex gap-[16px] md:gap-6 mt-7 text-sm font-semibold items-center">
              <TbLayoutSidebarLeftCollapseFilled  className="w-7 h-7" />
              Collapse
            </span>
          </NavLink>
        </List>
      </Paper>
    </Box>
  );
};

export default DashboardRoute;
