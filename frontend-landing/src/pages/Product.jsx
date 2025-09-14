import { Box, Container, Typography, Button } from "@mui/material";

// Product images
import Kite from "../assets/kite.png";
import Console from "../assets/console.png";
import Coin from "../assets/coin.png";
import KiteConnect from "../assets/kiteConnect.png";
import Varsity from "../assets/varsity.png";

// Import Universe Component
import ZerodhaUniverse from "../components/ZerodhaUniverse";

export default function Product() {
  const products = [
    {
      img: Kite,
      title: "Kite",
      description:
        "Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more.",
      details:
        "Trade stocks, commodities, and currencies with real-time data and advanced charting tools.",
      buttons: ["Try demo", "Learn more"],
    },
    {
      img: Console,
      title: "Console",
      description:
        "The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations.",
      details:
        "View P&L, capital allocation, and tax statements, all in one intuitive interface.",
      buttons: ["Learn more"],
    },
    {
      img: Coin,
      title: "Coin",
      description:
        "Buy direct mutual funds online, commission-free, delivered directly to your Demat account.",
      details:
        "Invest in direct mutual funds seamlessly with zero commissions and track your portfolio easily.",
      buttons: ["Learn more"],
    },
    {
      img: KiteConnect,
      title: "Kite Connect API",
      description:
        "Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs.",
      details:
        "Develop algorithmic trading systems or custom apps with robust APIs.",
      buttons: ["Learn more"],
    },
    {
      img: Varsity,
      title: "Varsity Mobile",
      description:
        "An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations.",
      details:
        "Learn trading and investing concepts at your own pace with interactive lessons.",
      buttons: ["Learn more"],
    },
  ];

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: "#f9f9f9" }}>
      <Container maxWidth="lg">
        {/* Heading */}
        <Typography
          variant="h4"
          fontWeight={700}
          textAlign="center"
          gutterBottom
          sx={{ color: "#2c2c2c" }}
        >
          Zerodha Products
        </Typography>
        <Typography
          variant="subtitle1"
          textAlign="center"
          mb={6}
          sx={{ color: "#555" }}
        >
          Sleek, modern, and intuitive trading platforms
        </Typography>

        {/* Products Section */}
        {products.map((product, idx) => (
          <Box
            key={idx}
            sx={{
              display: "flex",
              flexDirection: {
                xs: "column",
                md: idx % 2 === 0 ? "row" : "row-reverse",
              },
              alignItems: "center",
              gap: 4,
              mb: 10,
              p: 3,
              bgcolor: "#fff",
              boxShadow: 3,
              borderRadius: 2,
            }}
          >
            <Box
              component="img"
              src={product.img}
              alt={product.title}
              sx={{
                width: { xs: "80%", md: 320 },
                height: "auto",
                objectFit: "contain",
                borderRadius: 2,
              }}
            />
            <Box sx={{ flex: 1 }}>
              <Typography
                variant="h5"
                fontWeight={600}
                gutterBottom
                sx={{ color: "#2c2c2c" }}
              >
                {product.title}
              </Typography>
              <Typography variant="body1" sx={{ color: "#444", mb: 1 }}>
                {product.description}
              </Typography>
              <Typography variant="body2" sx={{ color: "#666", mb: 2 }}>
                {product.details}
              </Typography>
              {product.buttons.map((btn, i) => (
                <Button
                  key={i}
                  variant="outlined"
                  sx={{ mr: 1, mt: 1, textTransform: "none" }}
                >
                  {btn}
                </Button>
              ))}
            </Box>
          </Box>
        ))}

        {/* Universe Section */}
        <ZerodhaUniverse />
      </Container>
    </Box>
  );
}
