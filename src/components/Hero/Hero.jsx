import React from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  TextField,
  Stack,
  Link,
} from "@mui/material";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import reflect from "../../assets/Reflect.png";
export default function Hero() {
  return (
    <Box
      sx={{
        bgcolor: "#f9fbff",
        py: 8,
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <Typography variant="h3" fontWeight="bold" gutterBottom>
                Find the world’s best remote job
              </Typography>
              <Typography variant="body1" color="text.secondary" gutterBottom>
                Productivity tools can either help you or get in the way.
                TheFront aims to remove all barriers between you and just
                getting stuff done.
              </Typography>

              <Stack direction="row" spacing={2} alignItems="center">
                <Button variant="contained" size="large">
                  Explore
                </Button>
                <Link
                  href="#"
                  underline="hover"
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <PlayCircleOutlineIcon sx={{ mr: 0.5 }} />
                  Watch the video
                </Link>
              </Stack>

              <TextField
                fullWidth
                placeholder="Search..."
                sx={{
                  bgcolor: "#fff",
                  borderRadius: 2,
                  boxShadow: 1,
                }}
              />
            </Box>
          </Grid>

          <Grid item size={{ xs: 12, md: 6 }}>
            <Box
              component="img"
              src={reflect}
              alt="Remote Work"
              sx={{
                width: "100%",
                maxWidth: 500,
                display: "block",
                margin: "0 auto",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
