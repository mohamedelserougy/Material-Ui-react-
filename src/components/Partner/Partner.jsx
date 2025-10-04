import { Box, Grid } from "@mui/material";
import React from "react";

export default function Partner() {
  return (
    <>
      <Grid
        container
        spacing={4}
        alignItems="center"
        justifyContent={{ xs: "center", md: "flex-start" }}
      >
        <Grid size={2}>
          <Box sx={{ textAlign: "center" }}>
            <Box
              component="img"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/1280px-Airbnb_Logo_B%C3%A9lo.svg.png"
              sx={{
                maxHeight: 40,
              }}
            />
          </Box>
        </Grid>

        <Grid size={2}>
          <Box sx={{ textAlign: "center" }}>
            <Box
              component="img"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png"
              sx={{
                maxHeight: 40,
              }}
            />
          </Box>
        </Grid>

        <Grid size={2}>
          <Box sx={{ textAlign: "center" }}>
            <Box
              component="img"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Fitbit_logo.svg/2560px-Fitbit_logo.svg.png"
              sx={{
                maxHeight: 40,
              }}
            />
          </Box>
        </Grid>

        <Grid size={2}>
          <Box sx={{ textAlign: "center" }}>
            <Box
              component="img"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1200px-Netflix_2015_logo.svg.png"
              sx={{
                maxHeight: 40,
              }}
            />
          </Box>
        </Grid>

        <Grid size={2}>
          <Box sx={{ textAlign: "center" }}>
            <Box
              component="img"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
              sx={{
                maxHeight: 40,
              }}
            />
          </Box>
        </Grid>

        <Grid size={2}>
          <Box sx={{ textAlign: "center" }}>
            <Box
              component="img"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/2560px-PayPal.svg.png"
              sx={{
                maxHeight: 40,
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
