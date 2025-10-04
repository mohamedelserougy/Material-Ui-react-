import React from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Typography,
  Card,
  CardContent,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";

const cardData = [
  {
    title: "Complete your application",
    desc: " Most applicants finish in under an hour.",
  },
  {
    title: "Interview Process",
    desc: "Connect with through our easy-to-use platform.",
  },
  {
    title: "Get Hired",
    desc: "Start journey with confidence and support.",
  },
];

export default function Process() {
  return (
    <Box sx={{ bgcolor: "#f9fbff", py: 8 }}>
      <Stack
        direction="column"
        spacing={2}
        alignItems="center"
        justifyContent="center"
        sx={{ mb: 6 }}
      >
        <Typography color="warning">process</Typography>
        <Typography variant="h5" fontWeight="bold">
          Our Process To Find You a new Job is fast
        </Typography>
        <Typography sx={{ width: "50%", textAlign: "center" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
          reprehenderit, architecto est dolorum amet blanditiis quaerat vero
        </Typography>
        <Button variant="contained">
          start searching <ArrowForwardIcon />
        </Button>
      </Stack>

      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {cardData.map((card, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ padding: 2, borderRadius: 3, boxShadow: 1 }}>
                <CardContent>
                  <Stack
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    sx={{
                      bgcolor: "#7a8096ff",
                      width: 48,
                      height: 48,
                      borderRadius: 2,
                      mb: 2,
                    }}
                  >
                    <CreateOutlinedIcon />
                  </Stack>
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    {card.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {card.desc}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
