import { Container, Typography, Box } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#f9f9f9", // light grey background
        py: 4,
        mt: "auto",
        borderTop: "1px solid #e0e0e0",
      }}
    >
      <Container sx={{ textAlign: "center" }}>
        <Typography variant="body2" color="text.secondary">
          © {new Date().getFullYear()} Zerodha Clone. All rights reserved.
        </Typography>
        <Typography variant="caption" color="text.secondary" display="block">
          Built for learning purposes only.
        </Typography>
      </Container>
    </Box>
  );
}
