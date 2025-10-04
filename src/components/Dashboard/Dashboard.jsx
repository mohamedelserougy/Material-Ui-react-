import React from "react";
import {
  Box,
  Typography,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import HomeIcon from "@mui/icons-material/Home";
import BarChartIcon from "@mui/icons-material/BarChart";
import GroupIcon from "@mui/icons-material/Group";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import SettingsIcon from "@mui/icons-material/Settings";
const Dashboard = () => {
  const navItems = [
    { text: "Overview", icon: HomeIcon, active: true },
    { text: "Analytics", icon: BarChartIcon, active: false },
    { text: "Users", icon: GroupIcon, active: false },
    { text: "Orders", icon: ShoppingCartIcon, active: false },
    { text: "Products", icon: Inventory2Icon, active: false },
    { text: "Settings", icon: SettingsIcon, active: false },
  ];

  const sidebarSx = {
    width: 240,
    height: "100vh",
    p: 2,
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
    backgroundColor: "background.paper",
  };

  return (
    <Box sx={sidebarSx}>
      <Box sx={{ display: "flex", alignItems: "center", mb: 3, p: 1 }}>
        <DashboardIcon color="primary" sx={{ fontSize: 28, mr: 1 }} />
        <Typography variant="h6" component="h1" sx={{ fontWeight: "bold" }}>
          Dashboard
        </Typography>
      </Box>

      <List>
        {navItems.map((item) => {
          const IconComponent = item.icon;

          return (
            <ListItemButton
              key={item.text}
              sx={{
                borderRadius: 1,
                py: 1,

                ...(item.active && {
                  backgroundColor: "primary.main",
                  color: "#fff",
                  "&:hover": {
                    backgroundColor: "primary.dark",
                  },
                }),

                ...(!item.active && {
                  color: "text.primary",
                  "&:hover": {
                    backgroundColor: "#f5f5f5",
                  },
                }),
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 40,
                  color: item.active ? "#fff" : "text.secondary",
                }}
              >
                <IconComponent />
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          );
        })}
      </List>
    </Box>
  );
};

export default Dashboard;
