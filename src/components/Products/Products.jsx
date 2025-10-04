import { Container, Box, Typography, Grid } from "@mui/material";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import TabletMacIcon from "@mui/icons-material/TabletMac";
const Products = () => {
  const listItemSx = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    py: 1.5,
  };

  const iconSquareSx = (bgColor) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 40,
    height: 40,
    borderRadius: 1,
    backgroundColor: bgColor,
    color: "#fff",
  });

  const containerBoxSx = {
    p: 3,
    borderRadius: 2,
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
    backgroundColor: "background.paper",
    maxWidth: 360,
    mx: "auto",
  };

  return (
    <Container sx={{ py: 4 }}>
      <Box sx={containerBoxSx}>
        <Typography
          variant="h6"
          component="h2"
          sx={{ fontWeight: "bold", mb: 2 }}
        >
          Top Products
        </Typography>

        <Box sx={listItemSx}>
          <Grid container alignItems="center" spacing={2}>
            <Grid item>
              <Box sx={iconSquareSx("#2196f3")}>
                <LaptopMacIcon sx={{ fontSize: 20 }} />
              </Box>
            </Grid>
            <Grid item xs>
              <Typography variant="body1" sx={{ fontWeight: "medium" }}>
                Premium Laptop
              </Typography>
              <Typography variant="body2" color="text.secondary">
                245 sales
              </Typography>
            </Grid>
          </Grid>
          <Typography variant="body1" sx={{ fontWeight: "bold" }}>
            $1,299
          </Typography>
        </Box>

        <Box sx={listItemSx}>
          <Grid container alignItems="center" spacing={2}>
            <Grid item>
              <Box sx={iconSquareSx("#4caf50")}>
                <SmartphoneIcon sx={{ fontSize: 20 }} />
              </Box>
            </Grid>
            <Grid item xs>
              <Typography variant="body1" sx={{ fontWeight: "medium" }}>
                Smartphone Pro
              </Typography>
              <Typography variant="body2" color="text.secondary">
                189 sales
              </Typography>
            </Grid>
          </Grid>
          <Typography variant="body1" sx={{ fontWeight: "bold" }}>
            $899
          </Typography>
        </Box>

        <Box sx={listItemSx}>
          <Grid container alignItems="center" spacing={2}>
            <Grid item>
              <Box sx={iconSquareSx("#9c27b0")}>
                <HeadsetMicIcon sx={{ fontSize: 20 }} />
              </Box>
            </Grid>
            <Grid item xs>
              <Typography variant="body1" sx={{ fontWeight: "medium" }}>
                Wireless Headphones
              </Typography>
              <Typography variant="body2" color="text.secondary">
                156 sales
              </Typography>
            </Grid>
          </Grid>
          <Typography variant="body1" sx={{ fontWeight: "bold" }}>
            $299
          </Typography>
        </Box>

        <Box sx={listItemSx}>
          <Grid container alignItems="center" spacing={2}>
            <Grid item>
              <Box sx={iconSquareSx("#ff9800")}>
                <TabletMacIcon sx={{ fontSize: 20 }} />
              </Box>
            </Grid>
            <Grid item xs>
              <Typography variant="body1" sx={{ fontWeight: "medium" }}>
                Tablet Device
              </Typography>
              <Typography variant="body2" color="text.secondary">
                134 sales
              </Typography>
            </Grid>
          </Grid>
          <Typography variant="body1" sx={{ fontWeight: "bold" }}>
            $599
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Products;
