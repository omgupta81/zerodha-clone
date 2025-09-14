import { Box, Container, Typography, Link } from "@mui/material"; 
import Pricing0 from "../assets/pricing0.svg";
import PricingEquity from "../assets/pricing0.svg";
import PricingMF from "../assets/otherTrades.svg";

export default function PricingSection() {
  const pricingItems = [
    { img: Pricing0, label: "Free account opening" },
    { img: PricingEquity, label: "Free equity delivery" },
    { img: PricingMF, label: "Direct mutual funds, Intraday & F&O" },
  ];

  return (
    <Box sx={{ py: 10, bgcolor: "white" }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            gap: 4,
          }}
        >
          {/* Left - Text */}
          <Box sx={{ flex: "0 0 45%", textAlign: { xs: "center", md: "left" } }}>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              Unbeatable pricing
            </Typography>
            <Typography variant="body1" color="text.secondary" mb={4}>
              We pioneered the concept of discount broking and price transparency in India. 
              Flat fees and no hidden charges.
            </Typography>
            <Typography>
              <Link
                href="/pricing"
                underline="hover"
                sx={{ fontSize: "20px", fontWeight: 600 }}
              >
                See pricing →
              </Link>
            </Typography>
          </Box>

          {/* Right - Images with small text below */}
          <Box
            sx={{
              flex: "1",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 3,
              flexWrap: "wrap",
            }}
          >
            {pricingItems.map((item, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  width: 140,
                  textAlign: "center",
                }}
              >
                <Box
                  component="img"
                  src={item.img}
                  alt={item.label}
                  sx={{ width: "100%", height: "auto" }}
                />
                <Typography
                  sx={{
                    mt: 1,
                    fontSize: "0.8rem", // very small text
                    color: "text.secondary",
                    lineHeight: 1.2,
                  }}
                >
                  {item.label}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
