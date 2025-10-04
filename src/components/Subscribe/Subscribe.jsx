import React from "react";
import {
  Stack,
  TextField,
  Typography,
  InputAdornment,
  IconButton,
} from "@mui/material";

import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";

export default function Subscribe() {
  return (
    <>
      <Stack
        mt={2}
        p={5}
        direction="column"
        alignItems="center"
        justifyContent="center"
        spacing={2}
        sx={{
          bgcolor: "#337BFF",
          color: "white",
        }}
      >
        <Typography variant="h5" fontWeight="bold">
          Subscribe to our newsletter
        </Typography>
        <Typography variant="body1">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos qui
          cupiditate, deleniti autem eaque nemo?
        </Typography>
        <TextField
          id="Enter your email"
          label="Enter your email"
          variant="outlined"
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton>
                    <NotificationsActiveIcon color="inherit" />
                  </IconButton>
                </InputAdornment>
              ),
            },
          }}
          sx={{
            bgcolor: "#fff",
            borderRadius: 2,
            boxShadow: 1,
            width: "300px",
          }}
        />
      </Stack>
    </>
  );
}
