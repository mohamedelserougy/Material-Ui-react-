import {
  Container,
  Box,
  Typography,
  Avatar,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Link,
} from "@mui/material";
const orders = [
  {
    id: "#ORD-001",
    customerName: "John Smith",
    customerAvatar: "https://mui.com/static/images/avatar/1.jpg",
    product: "Premium Package",
    amount: "$299.00",
    status: "Completed",
    statusColor: "#4caf50",
    statusBg: "#e8f5e9",
  },
  {
    id: "#ORD-002",
    customerName: "Emma Davis",
    customerAvatar: "https://mui.com/static/images/avatar/3.jpg",
    product: "Basic Package",
    amount: "$99.00",
    status: "Pending",
    statusColor: "#ffc107",
    statusBg: "#fffde7",
  },
  {
    id: "#ORD-003",
    customerName: "Michael Brown",
    customerAvatar: "https://mui.com/static/images/avatar/5.jpg",
    product: "Standard Package",
    amount: "$199.00",
    status: "Processing",
    statusColor: "#2196f3",
    statusBg: "#e3f2fd",
  },
];
const Orders = () => {
  const containerBoxSx = {
    p: 3,
    borderRadius: 2,
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
    backgroundColor: "background.paper",
  };

  return (
    <Container sx={{ py: 8 }}>
      <Box sx={containerBoxSx}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 2,
          }}
        >
          <Typography variant="h6" component="h2" sx={{ fontWeight: "bold" }}>
            Recent Orders
          </Typography>
          <Link
            href="#"
            underline="hover"
            sx={{ fontWeight: "bold", fontSize: "0.875rem" }}
          >
            View All
          </Link>
        </Box>

        <TableContainer>
          <Table aria-label="recent orders table">
            <TableHead>
              <TableRow>
                {["Order ID", "Customer", "Product", "Amount", "Status"].map(
                  (header) => (
                    <TableCell
                      key={header}
                      sx={{
                        fontWeight: "bold",
                        color: "text.secondary",
                        borderBottom: "1px solid #eee",
                      }}
                    >
                      {header}
                    </TableCell>
                  )
                )}
              </TableRow>
            </TableHead>

            <TableBody>
              {orders.map((row) => (
                <TableRow key={row.id}>
                  <TableCell sx={{ fontWeight: "bold" }}>{row.id}</TableCell>

                  <TableCell>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <Avatar
                        src={row.customerAvatar}
                        sx={{ width: 30, height: 30 }}
                      />
                      <Typography variant="body2" sx={{ fontWeight: "medium" }}>
                        {row.customerName}
                      </Typography>
                    </Box>
                  </TableCell>

                  <TableCell>{row.product}</TableCell>

                  <TableCell sx={{ fontWeight: "bold" }}>
                    {row.amount}
                  </TableCell>

                  <TableCell>
                    <Chip
                      label={row.status}
                      size="small"
                      sx={{
                        backgroundColor: row.statusBg,
                        color: row.statusColor,
                        fontWeight: "bold",
                        minWidth: 90,
                      }}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  );
};

export default Orders;
