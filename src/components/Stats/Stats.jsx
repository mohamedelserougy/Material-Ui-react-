import { Container, Grid, Typography, Box, Button } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
const Stats = () => {
  return (
    <Container sx={{ py: 8 }}>
      <Box sx={{ textAlign: "center" }}>
        <Box sx={{ mb: 6 }}>
          <Typography variant="h5" component="h2">
            Hiring? Candidates are working for you
          </Typography>
          <Typography variant="body1" color="text.secondary">
            We get thousands of job postings weekly, but only accept the
            openings at the top companies.
          </Typography>
        </Box>

        <Grid container spacing={4} sx={{ mb: 6 }}>
          <Grid size={4}>
            <Typography variant="h3" component="p">
              300
            </Typography>
            <Typography variant="body2" color="text.secondary">
              300 + component compositions, which will help you to build any
              page easily.
            </Typography>
          </Grid>

          <Grid size={4}>
            <Typography variant="h3" component="p">
              45
            </Typography>
            <Typography variant="body2" color="text.secondary">
              45 + landing and supported pages to Build a professional website.
            </Typography>
          </Grid>

          <Grid size={4}>
            <Typography variant="h3" component="p">
              99
            </Typography>
            <Typography variant="body2" color="text.secondary">
              99% of our customers rated 5-star our themes over 5 years.
            </Typography>
          </Grid>
        </Grid>

        <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
          <Button variant="contained" size="large">
            Explore
          </Button>
          <Button variant="text" size="large" startIcon={<PlayArrowIcon />}>
            Watch the video
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Stats;
