import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import reflect from "../../assets/Reflect.png";

export default function Customers() {
  return (
    <>
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          <Grid size={{ xs: 12, md: 6 }} sx={{ mt: 10 }}>
            <Typography
              variant="h4"
              fontWeight="bold"
              gutterBottom
              sx={{ mt: 3 }}
            >
              Easily find leads and customers
            </Typography>
            <Typography color="text.secondary">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam eos
              aperiam doloribus ratione quam repellat ad, explicabo temporibus.
              Rerum, non. Sapiente impedit quo ullam sint. aperiam doloribus
              ratione quam repellat ad, explicabo temporibus. Rerum, non.
              Sapiente impedit quo ullam sint. ratione quam repellat ad,
              explicabo temporibus. Rerum, non. Sapiente impedit quo ullam sint.
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              component="img"
              src={reflect}
              sx={{
                width: "100%",
                maxWidth: 500,
                display: "block",
                margin: "0 auto",
              }}
            ></Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
