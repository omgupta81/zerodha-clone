// src/pages/PricingPage.jsx
import { Box, Container, Typography, Button } from "@mui/material"; 
import Pricing0 from "../assets/pricing0.svg";
import PricingEquity from "../assets/pricing0.svg";
import PricingMF from "../assets/otherTrades.svg";

export default function PricingPage() {
  const pricingItems = [
    { 
      img: Pricing0, 
      label: "Free account opening", 
      description: "All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage." 
    },
    { 
      img: PricingMF, 
      label: "Direct mutual funds, Intraday & F&O", 
      description: "Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades." 
    },
    { 
      img: PricingEquity, 
      label: "Free equity delivery", 
      description: "All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges." 
    },
  ];

  return (
    <Box sx={{ py: 10, bgcolor: "#f4f6f8" }}>
      <Container maxWidth="lg">
        {/* Header */}
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography variant="h4" fontWeight={700} gutterBottom sx={{ color: "#1a237e" }}>
            Charges
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Explore all charges and taxes for trading, investing, and mutual funds.
          </Typography>
        </Box>

        {/* Pricing Cards */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "stretch",
            gap: 7,
            flexWrap: "wrap",
          }}
        >
          {pricingItems.map((item, index) => (
            <Box
              key={index}
              sx={{
                backgroundColor: "#fff",
                borderRadius: 3,
                boxShadow: 3,
                p: 4,
                width: { xs: "100%", sm: 220, md: 260 },
                textAlign: "center",
                transition: "0.3s",
                cursor: "pointer",
                "&:hover": {
                  boxShadow: 8,
                  transform: "translateY(-8px) scale(1.03)",
                },
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {/* Icon with gradient circle */}
              <Box
                sx={{
                  width: 80,
                  height: 80,
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #42a5f5, #1976d2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mb: 2,
                  boxShadow: 2,
                }}
              >
                <Box
                  component="img"
                  src={item.img}
                  alt={item.label}
                  sx={{ width: 40, height: 40 }}
                />
              </Box>

              {/* Label */}
              <Typography variant="h6" fontWeight={700} sx={{ mb: 1, color: "#1565c0" }}>
                {item.label}
              </Typography>

              {/* Description */}
              <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.5 }}>
                {item.description}
              </Typography>
            </Box>
          ))}
        </Box>

        
      </Container>
    </Box>
  );
}
