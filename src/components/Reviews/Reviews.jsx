import { Container, Grid, Typography, Box, Avatar, Stack } from "@mui/material";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

const Reviews = () => {
  const iconSx = {
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    width: 60,
    height: 60,
    borderRadius: "10%",
    backgroundColor: "rgba(230, 240, 255, 0.7)",
    mb: 2,
  };

  return (
    <Container sx={{ py: 8 }}>
      <Box sx={{ textAlign: "center", mb: 6 }}>
        <Typography variant="h4" component="h2" sx={{ fontWeight: "bold" }}>
          Take a look what our customers say
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ mt: 1 }}>
          Take a quick glance at some of our past projects.
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mt: 1 }}>
          If you would like to see some more great work, get in touch with us to
          take a look at our private portfolio.
        </Typography>
      </Box>

      <Grid container spacing={4} justifyContent="center">
        <Grid size={4}>
          <Box sx={{ p: 2, textAlign: "center" }}>
            <Box sx={iconSx}>
              <ChatBubbleOutlineIcon color="primary" sx={{ fontSize: 32 }} />
            </Box>

            <Typography variant="body1" sx={{ mb: 3 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>

            <Stack direction="column" alignItems="center" spacing={1}>
              <Avatar
                src="https://mui.com/static/images/avatar/1.jpg"
                sx={{ width: 56, height: 56 }}
              />
              <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                Clara Bertoletti
              </Typography>
              <Typography variant="body2" color="text.secondary">
                MUI lover
              </Typography>
            </Stack>
          </Box>
        </Grid>

        <Grid size={4}>
          <Box sx={{ p: 2, textAlign: "center" }}>
            <Box sx={iconSx}>
              <ChatBubbleOutlineIcon color="primary" sx={{ fontSize: 32 }} />
            </Box>

            <Typography variant="body1" sx={{ mb: 3 }}>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </Typography>

            <Stack direction="column" alignItems="center" spacing={1}>
              <Avatar
                src="https://mui.com/static/images/avatar/2.jpg"
                sx={{ width: 56, height: 56 }}
              />
              <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                Jhon Anderson
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Senior Frontend Developer
              </Typography>
            </Stack>
          </Box>
        </Grid>

        <Grid size={4}>
          <Box sx={{ p: 2, textAlign: "center" }}>
            <Box sx={iconSx}>
              <ChatBubbleOutlineIcon color="primary" sx={{ fontSize: 32 }} />
            </Box>

            <Typography variant="body1" sx={{ mb: 3 }}>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Typography>

            <Stack direction="column" alignItems="center" spacing={1}>
              <Avatar
                src="https://mui.com/static/images/avatar/3.jpg"
                sx={{ width: 56, height: 56 }}
              />
              <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                Chary Smith
              </Typography>
              <Typography variant="body2" color="text.secondary">
                SEO at Comoti
              </Typography>
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Reviews;
