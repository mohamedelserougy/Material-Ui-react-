import React from "react";
import { Box, Button, Typography, Paper, Grid } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import DescriptionIcon from "@mui/icons-material/Description";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

const Actions = () => {
  const actions = [
    {
      label: "Add Product",
      icon: <AddIcon />,
      color: "#3f51b5",
    },
    {
      label: "Add User",
      icon: <PersonAddIcon />,
      color: "#4caf50",
    },
    {
      label: "Generate Report",
      icon: <DescriptionIcon />,
      color: "#9c27b0",
    },
    {
      label: "Send Message",
      icon: <MailOutlineIcon />,
      color: "#ff9800",
    },
  ];

  return (
    <Paper
      elevation={3}
      sx={{ maxWidth: 500, height: 450, margin: "auto", p: 2, borderRadius: 1 }}
    >
      <Typography
        variant="h5"
        gutterBottom
        sx={{
          fontWeight: "bold",
          p: 2,
          mb: 2,
          borderBottom: 1,
          borderBottomColor: "text.secondary",
        }}
      >
        Quick Actions
      </Typography>

      <Grid container spacing={2}>
        {actions.map((action) => (
          <Grid item size={6} key={action.label}>
            <Button
              variant="contained"
              fullWidth
              size="large"
              startIcon={action.icon}
              sx={{
                backgroundColor: action.color,
                "&:hover": {
                  backgroundColor: action.color,
                  opacity: 0.9,
                },
                minHeight: "100px",
                fontSize: "1rem",
                fontWeight: "bold",

                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              {action.label}
            </Button>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 15 }}>
        <Button
          variant="contained"
          size="small"
          sx={{
            borderRadius: "50px",
            minWidth: "auto",
            p: "8px 12px",
            backgroundColor: "#9c27b0",
            "&:hover": {
              backgroundColor: "#7b1fa2",
            },
          }}
          startIcon={<HelpOutlineIcon />}
        >
          Help
        </Button>
      </Box>
    </Paper>
  );
};

export default Actions;
