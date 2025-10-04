import React from "react";
import {
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Box,
} from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import CreditCardIcon from "@mui/icons-material/CreditCard";

const activityData = [
  {
    title: "Order #ORD-001 completed",
    subtitle: "Customer: John Smith",
    time: "2 minutes ago",
    icon: CheckCircleOutlineIcon,
    iconBgColor: "#4CAF50",
    iconColor: "#FFFFFF",
  },
  {
    title: "New user registered",
    subtitle: "Emma Wilson joined",
    time: "15 minutes ago",
    icon: PersonAddAlt1Icon,
    iconBgColor: "#2196F3",
    iconColor: "#FFFFFF",
  },
  {
    title: "Low stock alert",
    subtitle: "Premium Laptop - 5 units left",
    time: "1 hour ago",
    icon: WarningAmberIcon,
    iconBgColor: "#FFC107",
    iconColor: "#FFFFFF",
  },
  {
    title: "Payment received",
    subtitle: "$299.00 from Michael Brown",
    time: "3 hours ago",
    icon: CreditCardIcon,
    iconBgColor: "#9C27B0",
    iconColor: "#FFFFFF",
  },
];

const Activity = () => {
  return (
    <Paper
      elevation={3}
      sx={{ maxWidth: 450, height: 485, margin: "auto", borderRadius: 1 }}
    >
      <Box sx={{ p: 2 }}>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Recent Activity
        </Typography>
      </Box>

      <Box sx={{ borderBottom: "1px solid #eee" }} />

      <List sx={{ p: 0 }}>
        {activityData.map((activity, index) => (
          <ListItem
            key={index}
            alignItems="flex-start"
            sx={{
              px: 2,
              borderBottom:
                index < activityData.length - 1 ? "1px solid #f5f5f5" : "none",
            }}
          >
            <ListItemAvatar>
              <Avatar
                sx={{ bgcolor: activity.iconBgColor, width: 36, height: 36 }}
              >
                <activity.icon
                  sx={{ fontSize: 20, color: activity.iconColor }}
                />
              </Avatar>
            </ListItemAvatar>

            <ListItemText
              primary={
                <Typography
                  component="span"
                  variant="body1"
                  sx={{ fontWeight: 500, color: "#333" }}
                >
                  {activity.title}
                </Typography>
              }
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "block" }}
                    component="span"
                    variant="body2"
                    color="text.secondary"
                  >
                    {activity.subtitle}
                  </Typography>
                  <Typography
                    sx={{ display: "block", mt: 0.5 }}
                    component="span"
                    variant="caption"
                    color="text.secondary"
                  >
                    {activity.time}
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default Activity;
