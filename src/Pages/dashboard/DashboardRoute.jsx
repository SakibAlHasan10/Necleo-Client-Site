import * as React from "react";
import PropTypes from "prop-types";
import List from "@mui/material/List";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import Paper from "@mui/material/Paper";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { Link as RouterLink, MemoryRouter } from "react-router-dom";
import { StaticRouter } from "react-router-dom/server";
import { Add } from "@mui/icons-material";
import { Divider } from "@mui/material";
import { FaDatabase } from "react-icons/fa";
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
    <Box sx={{ width: 360,}}>
      <Paper elevation={0}>
        <List aria-label="main mailbox folders" sx={{ color:"#C4C4C4"}}>
          <ListItemLink
            to="/dashboard/my-project"
            primary="My Projects"
            icon={<FaDatabase className="text-[#C4C4C4]"/>}
          />
          <ListItemLink
            to="/dashboard/sample-projects"
            primary="Sample Projects"
            icon={<Add />}
          />
        </List>
        <List sx={{ width: 350, px:2 }}>

        <Divider />
        </List>
        <List aria-label="main mailbox folders" sx={{ color:"#C4C4C4"}}>
          <ListItemLink
            to="/dashboard"
            primary="Apps"
            icon={<AccountBoxIcon />}
          />
          <ListItemLink
            to="/dashboard"
            primary="Intro to Necleo"
            icon={<Add />}
          />
        </List>
        <List aria-label="main mailbox folders" sx={{ color:"#C4C4C4"}}>
          <ListItemLink
            to="/dashboard"
            primary="Help & Support"
            icon={<AccountBoxIcon />}
          />
          <ListItemLink
            to="/dashboard"
            primary="Feedback"
            icon={<Add />}
          />
          <ListItemLink
            to="/dashboard"
            primary="Collapse"
            icon={<Add />}
          />
        </List>
      </Paper>
    </Box>
  );
};

export default DashboardRoute;
