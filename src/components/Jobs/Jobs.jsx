import React from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

export default function Jobs() {
  return (
    <>
      <Box>
        <Typography
          variant="h4"
          gutterBottom
          sx={{ textTransform: "capitalize" }}
        >
          top developer jobs listed in our portal
        </Typography>
        <Typography
          variant="body2"
          sx={{ display: "flex", alignItems: "center" }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae vitae
          enim sequi nobis magni saepe ex fuga quisquam fugit
          <Link
            href="#"
            color="primary"
            sx={{ ml: 1, display: "flex", alignItems: "center" }}
          >
            set career interest <ArrowForwardIcon sx={{ ml: 0.5 }} />
          </Link>
        </Typography>
      </Box>

      <Grid container spacing={7}>
        <Grid item1 xs={12} md={4}>
          <Card sx={{ padding: 2 }}>
            <CardActions>
              <Button variant="contained" color="primary">
                web design
              </Button>
            </CardActions>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                web designer internship
              </Typography>
              <Stack direction="column" spacing={2}>
                <Stack direction="row" alignItems="center" spacing={2}>
                  <LocationOnIcon />
                  <Typography>Milain , italy</Typography>
                </Stack>
                <Stack direction="row" alignItems="center" spacing={2}>
                  <AccessTimeIcon />
                  <Typography variant="body2">full time</Typography>
                </Stack>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
        <Grid item1 xs={12} md={4}>
          <Card sx={{ padding: 2 }}>
            <CardActions>
              <Button variant="contained" color="warning">
                web design
              </Button>
            </CardActions>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                web designer internship
              </Typography>
              <Stack direction="column" spacing={2}>
                <Stack direction="row" alignItems="center" spacing={2}>
                  <LocationOnIcon />
                  <Typography>Milain , italy</Typography>
                </Stack>
                <Stack direction="row" alignItems="center" spacing={2}>
                  <AccessTimeIcon />
                  <Typography variant="body2">full time</Typography>
                </Stack>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
        <Grid item1 xs={12} md={4}>
          <Card sx={{ padding: 2 }}>
            <CardActions>
              <Button variant="contained" color="secondary">
                web design
              </Button>
            </CardActions>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                web designer internship
              </Typography>
              <Stack direction="column" spacing={2}>
                <Stack direction="row" alignItems="center" spacing={2}>
                  <LocationOnIcon />
                  <Typography>Milain , italy</Typography>
                </Stack>
                <Stack direction="row" alignItems="center" spacing={2}>
                  <AccessTimeIcon />
                  <Typography variant="body2">full time</Typography>
                </Stack>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
        <Grid item1 xs={12} md={4}>
          <Card sx={{ padding: 2 }}>
            <CardActions>
              <Button variant="contained" color="success">
                web design
              </Button>
            </CardActions>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                web designer internship
              </Typography>
              <Stack direction="column" spacing={2}>
                <Stack direction="row" alignItems="center" spacing={2}>
                  <LocationOnIcon />
                  <Typography>Milain , italy</Typography>
                </Stack>
                <Stack direction="row" alignItems="center" spacing={2}>
                  <AccessTimeIcon />
                  <Typography variant="body2">full time</Typography>
                </Stack>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
        <Grid item1 xs={12} md={4}>
          <Card sx={{ padding: 2 }}>
            <CardActions>
              <Button variant="contained" color="error">
                web design
              </Button>
            </CardActions>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                web designer internship
              </Typography>
              <Stack direction="column" spacing={2}>
                <Stack direction="row" alignItems="center" spacing={2}>
                  <LocationOnIcon />
                  <Typography>Milain , italy</Typography>
                </Stack>
                <Stack direction="row" alignItems="center" spacing={2}>
                  <AccessTimeIcon />
                  <Typography variant="body2">full time</Typography>
                </Stack>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
        <Grid item1 xs={12} md={4}>
          <Card sx={{ padding: 2 }}>
            <CardActions>
              <Button variant="contained" color="success">
                web design
              </Button>
            </CardActions>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                web designer internship
              </Typography>
              <Stack direction="column" spacing={2}>
                <Stack direction="row" alignItems="center" spacing={2}>
                  <LocationOnIcon />
                  <Typography>Milain , italy</Typography>
                </Stack>
                <Stack direction="row" alignItems="center" spacing={2}>
                  <AccessTimeIcon />
                  <Typography variant="body2">full time</Typography>
                </Stack>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
        <Grid item1 xs={12} md={4}>
          <Card sx={{ padding: 2 }}>
            <CardActions>
              <Button variant="contained" color="secondary">
                web design
              </Button>
            </CardActions>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                web designer internship
              </Typography>
              <Stack direction="column" spacing={2}>
                <Stack direction="row" alignItems="center" spacing={2}>
                  <LocationOnIcon />
                  <Typography>Milain , italy</Typography>
                </Stack>
                <Stack direction="row" alignItems="center" spacing={2}>
                  <AccessTimeIcon />
                  <Typography variant="body2">full time</Typography>
                </Stack>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
        <Grid item1 xs={12} md={4}>
          <Card sx={{ padding: 2 }}>
            <CardActions>
              <Button variant="contained" color="primary">
                web design
              </Button>
            </CardActions>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                web designer internship
              </Typography>
              <Stack direction="column" spacing={2}>
                <Stack direction="row" alignItems="center" spacing={2}>
                  <LocationOnIcon />
                  <Typography>Milain , italy</Typography>
                </Stack>
                <Stack direction="row" alignItems="center" spacing={2}>
                  <AccessTimeIcon />
                  <Typography variant="body2">full time</Typography>
                </Stack>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
        <Grid item1 xs={12} md={4}>
          <Card sx={{ padding: 2 }}>
            <CardActions>
              <Button variant="contained" color="error">
                web design
              </Button>
            </CardActions>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                web designer internship
              </Typography>
              <Stack direction="column" spacing={2}>
                <Stack direction="row" alignItems="center" spacing={2}>
                  <LocationOnIcon />
                  <Typography>Milain , italy</Typography>
                </Stack>
                <Stack direction="row" alignItems="center" spacing={2}>
                  <AccessTimeIcon />
                  <Typography variant="body2">full time</Typography>
                </Stack>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Box sx={{ textAlign: "center", mt: 3 }}>
        <Button variant="contained">
          view All <ArrowForwardIcon />
        </Button>
      </Box>
    </>
  );
}
