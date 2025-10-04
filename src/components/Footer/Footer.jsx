import { Box, Button, Link, Stack, Typography } from "@mui/material";
import React from "react";

export default function Footer() {
  return (
    <>
      <Box sx={{ p: 4, borderTop: 1, mt: 2 }}>
        <Stack direction="row" justifyContent="space-between">
          <Typography fontStyle="italic" fontWeight="bold">
            thefront
          </Typography>
          <Stack direction="row" alignItems="center" spacing={2}>
            <Link href="#" underline="none">
              Home
            </Link>
            <Link href="#" underline="none">
              Documantaion
            </Link>
            <Button variant="outlined">Purchase now</Button>
          </Stack>
        </Stack>
        <Stack direction="column" alignItems="center" sx={{ mt: 2 }}>
          <Typography variant="body1" color="text.secondary" gutterBottom>
            Lorem ipsum dolor sit amet consectetur
          </Typography>
          <Typography
            variant="body1"
            sx={{ textAlign: "center" }}
            color="text.secondary"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            placeat modi magnam odit quidem iste cumque veniam possimus delectus
            doloremque! placeat
          </Typography>
        </Stack>
      </Box>
    </>
  );
}
