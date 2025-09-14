import { Box, Container, Typography, Button } from "@mui/material";
import VarsityImg from "../assets/education.svg";

export default function VarsitySection() {
  return (
    <Box sx={{ py: 10, bgcolor: "white" }}>
      <Container maxWidth="lg">
        {/* Flex layout: Image left, Text right */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" }, // stack on mobile
            alignItems: "center",
            justifyContent: "space-between",
            gap: 4,
          }}
        >
          {/* Left - Image */}
          <Box
            sx={{
              flex: "1",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              component="img"
              src={VarsityImg}
              alt="Varsity by Zerodha"
              sx={{
                width: { xs: "80%", md: "100%" },
                maxWidth: 500,
                height: "auto",
              }}
            />
          </Box>

          {/* Right - Text content */}
          <Box
            sx={{
              flex: "0 0 45%",
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              Varsity by Zerodha
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" mb={4}>
              An open-access, interactive, and extensive stock market education
              platform.
            </Typography>
            <Button
              variant="contained"
              sx={{
                bgcolor: "#387ed1",
                textTransform: "none",
                px: 4,
                py: 1.5,
                fontSize: "1rem",
                "&:hover": { bgcolor: "#245ea6" },
              }}
            >
              Explore Varsity
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
