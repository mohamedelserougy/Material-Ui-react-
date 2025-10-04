import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import StoreIcon from "@mui/icons-material/Store";
import Typography from "@mui/material/Typography";
import { Box, Button } from "@mui/material";

function Navbar() {
  const my_pages = [
    "Landing",
    "Company",
    "Account",
    "Pages",
    "Blog",
    "Portfolio",
  ];

  return (
    <AppBar position="static" color="transparent" elevation={0} container>
      <Toolbar>
        <StoreIcon sx={{ mr: 1, color: "black" }} />
        <Typography
          variant="h5"
          component="a"
          sx={{
            mr: 2,
            fontWeight: 200,
            fontFamily: "roboto",
            color: "black",
            letterSpacing: ".2rem",
            textDecoration: "none",
          }}
        >
          The Front
        </Typography>

        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            justifyContent: "end",
            marginRight: 10,
          }}
        >
          {my_pages.map((page) => (
            <Button key={page} sx={{ my: 2, color: "black" }}>
              {page}
            </Button>
          ))}
        </Box>

        <Button variant="contained">Buy now</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
