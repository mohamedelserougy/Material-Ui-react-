import { Box, Stack, Typography } from "@mui/material";

function About() {
  return (
    <>
      <Box sx={{ backgroundColor: "#f2fbfe", py: 8, px: 4 }}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={6}
          justifyContent="center"
        >
          <Box>
            <Typography variant="h6" fontWeight={700} gutterBottom>
              What is it about?
            </Typography>
            <Typography color="text.secondary">
              Fill out our standardized application on our platform. Most
              applicants finish in under an hour.
            </Typography>
          </Box>

          <Box>
            <Typography variant="h6" fontWeight={700} gutterBottom>
              Who is it for?
            </Typography>
            <Typography color="text.secondary">
              Fill out our standardized application on our platform. Most
              applicants finish in under an hour.
            </Typography>
          </Box>
        </Stack>
      </Box>
    </>
  );
}

export default About;
