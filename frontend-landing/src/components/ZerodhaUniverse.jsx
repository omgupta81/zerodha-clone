import { Box, Container, Typography } from "@mui/material";

// Partner logos
import Tijori from "../assets/tijori.svg";
import Ditto from "../assets/dittoLogo.png";
import ZerodhaFundhouse from "../assets/zerodhaFundhouse.png";
import Streak from "../assets/streakLogo.png";
import Smallcase from "../assets/smallcaseLogo.png";
import Sensibull from "../assets/sensibullLogo.svg";

export default function ZerodhaUniverse() {
  const partners = [
    {
      img: Tijori,
      alt: "Tijori",
      details:
        "Our asset management venture creating simple and transparent index funds to help you save for your goals.",
    },
    {
      img: Ditto,
      alt: "Ditto",
      details:
        "Personalized advice on life and health insurance. No spam or mis-selling.",
    },
    {
      img: ZerodhaFundhouse,
      alt: "Zerodha Fundhouse",
      details:
        "Investment research and fund management platform offering insights into stocks, sectors, and supply chains.",
    },
    {
      img: Streak,
      alt: "Streak",
      details:
        "Systematic trading platform allowing strategy creation and backtesting without coding.",
    },
    {
      img: Smallcase,
      alt: "Smallcase",
      details:
        "Thematic investing platform with diversified stock baskets and ETFs.",
    },
    {
      img: Sensibull,
      alt: "Sensibull",
      details:
        "Options trading platform for strategy creation, position analysis, and data insights.",
    },
  ];

  return (
    <Box sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        {/* Heading */}
        <Typography
          variant="h5"
          fontWeight={700}
          textAlign="center"
          gutterBottom
          sx={{ color: "#2c2c2c" }}
        >
          The Zerodha Universe
        </Typography>
        <Typography
          variant="subtitle1"
          color="text.secondary"
          textAlign="center"
          mb={6}
          sx={{ color: "#2c2c2c" }}
        >
          Extend your trading and investment experience with our trusted
          partners. Each platform complements your journey with specialized
          services.
        </Typography>

        {/* Partner Grid */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "1fr 1fr",
              md: "1fr 1fr 1fr",
            },
            gap: 6,
          }}
        >
          {partners.map((partner, idx) => (
            <Box
              key={idx}
              textAlign="center"
              sx={{
                p: 3,
                bgcolor: "#fff",
                borderRadius: 2,
                boxShadow: 2,
                transition: "all 0.3s ease",
                "&:hover": { boxShadow: 5, transform: "translateY(-4px)" },
              }}
            >
              <Box
                component="img"
                src={partner.img}
                alt={partner.alt}
                sx={{
                  width: "120px",
                  height: "auto",
                  objectFit: "contain",
                  mb: 2,
                }}
              />
              <Typography
                variant="body2"
                color="#555"
                sx={{ lineHeight: 1.6 }}
              >
                {partner.details}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
