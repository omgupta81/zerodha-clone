import { Button, Container, Typography } from "@mui/material";
import HomeHero from "../../assets/homeHero.png";
export default function HeroSection() {
  return (
    <Container sx={{ textAlign: "center", py: 8 }}>
      <img
        src={HomeHero}
        alt="Hero Banner"
        style={{ maxWidth: "70%", height: "auto" }}
      />
      <Typography variant="h3" sx={{ mt: 4, fontWeight: "bold" ,color: "text.secondary" }}>
        Invest in everything
      </Typography>
      <Typography variant="h6" sx={{ mt: 2, color: "text.secondary" }}>
        Online platform to invest in stocks, derivatives, mutual funds, and more
      </Typography>
      <Button variant="contained" size="large" sx={{ mt: 4 }}>
        Sign up for free
      </Button>
    </Container>
  );
}
