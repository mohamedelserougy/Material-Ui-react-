import { Container, Box, Typography, Avatar, Grid } from "@mui/material";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SearchIcon from "@mui/icons-material/Search";

const Header = () => {
  const containerBoxSx = {
    py: 3,
    borderBottom: "1px solid #e0e0e0",
    backgroundColor: "background.paper",
  };

  const iconSx = {
    fontSize: 24,
    color: "text.secondary",
    cursor: "pointer",
    mr: 2,
  };

  return (
    <Box sx={containerBoxSx}>
      <Container>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item xs={12} sm={8}>
            <Typography
              variant="h5"
              component="h1"
              sx={{ fontWeight: "bold", mb: 0.5 }}
            >
              Dashboard Overview
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Welcome back, here's what's happening with your business today.
            </Typography>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                mt: { xs: 2, sm: 0 },
              }}
            >
              <NotificationsNoneIcon sx={iconSx} />

              <SearchIcon sx={iconSx} />

              <Avatar
                src="https://mui.com/static/images/avatar/4.jpg"
                alt="Sarah Johnson"
                sx={{ width: 32, height: 32, mr: 1 }}
              />

              <Typography variant="body1" sx={{ fontWeight: "medium" }}>
                Sarah Johnson
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Header;
