import { Container, Grid, Typography, Box } from "@mui/material";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import PercentIcon from "@mui/icons-material/Percent";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
const Statistic = () => {
  const cardSx = {
    p: 2,
    width: 250,
    borderRadius: 2,
    border: "1px solid #f0f0f0",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.03)",
    backgroundColor: "background.paper",
    height: "100%",
  };

  const iconCircleSx = (bgColor) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 48,
    height: 48,
    borderRadius: 1.5,
    backgroundColor: bgColor,
    color: "#fff",
    ml: 5,
  });

  const changeTextSx = (color) => ({
    display: "flex",
    alignItems: "center",
    fontSize: "0.85rem",
    fontWeight: "bold",
    color: color,
    mt: 1.5,
  });

  return (
    <Container sx={{ py: 2 }}>
      <Grid container spacing={3}>
        <Grid size={3}>
          <Box sx={cardSx}>
            <Typography
              variant="body2"
              color="text.secondary"
              fontWeight="bold"
              sx={{ mb: 1 }}
            >
              Total Revenue
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                $45,231
              </Typography>
              <Box sx={iconCircleSx("#39ca4fff")}>
                <AttachMoneyIcon />
              </Box>
            </Box>
            <Box sx={changeTextSx("#4caf50")}>
              <ArrowUpwardIcon sx={{ fontSize: "1rem", mr: 0.5 }} />
              +20.1%
            </Box>
          </Box>
        </Grid>

        <Grid size={3}>
          <Box sx={cardSx}>
            <Typography
              variant="body2"
              color="text.secondary"
              fontWeight="bold"
              sx={{ mb: 1 }}
            >
              New Orders
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                1,234
              </Typography>
              <Box sx={iconCircleSx("#0070f8ff")}>
                <ShoppingCartIcon />
              </Box>
            </Box>
            <Box sx={changeTextSx("#0083eeff")}>
              <ArrowUpwardIcon sx={{ fontSize: "1rem", mr: 0.5 }} />
              +12.5%
            </Box>
          </Box>
        </Grid>

        <Grid size={3}>
          <Box sx={cardSx}>
            <Typography
              variant="body2"
              color="text.secondary"
              fontWeight="bold"
              sx={{ mb: 1 }}
            >
              Active Users
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                8,456
              </Typography>
              <Box sx={iconCircleSx("#9c3ffaff")}>
                <PeopleIcon />
              </Box>
            </Box>
            <Box sx={changeTextSx("#ab47bc")}>
              <ArrowUpwardIcon sx={{ fontSize: "1rem", mr: 0.5 }} />
              +8.2%
            </Box>
          </Box>
        </Grid>

        <Grid size={3}>
          <Box sx={cardSx}>
            <Typography
              variant="body2"
              color="text.secondary"
              fontWeight="bold"
              sx={{ mb: 1 }}
            >
              Conversion Rate
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                3.24%
              </Typography>
              <Box sx={iconCircleSx("#eb7c37ff")}>
                <PercentIcon />
              </Box>
            </Box>
            <Box sx={changeTextSx("#f44336")}>
              <ArrowDownwardIcon sx={{ fontSize: "1rem", mr: 0.5 }} />
              -2.1%
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Statistic;
