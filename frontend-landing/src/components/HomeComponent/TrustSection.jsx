import { Box, Container, Typography, Link } from "@mui/material";
import EcosystemImg from "../../assets/ecosystem.png";
import PressLogos from "../../assets/pressLogos.png";

export default function TrustSection() {
  return (
    <Box component="section" sx={{ py: 8, bgcolor: "white" }}>
      <Container maxWidth="lg">
        {/* Flex line: text (left) + image (right) */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" }, // stack on mobile, side-by-side on desktop
            alignItems: "center",
            justifyContent: "space-between",
            gap: 4,
          }}
        >
          {/* Left - Text box */}
          <Box
            sx={{
              flex: "0 0 40%", // take 40% of space
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <Typography variant="h4" fontWeight="bold" gutterBottom  sx={{  color: "#1a1a1a" }}>
              Trust with confidence
            </Typography>

            <Box sx={{ mb: 3 }}>
              <Typography variant="h6" gutterBottom  sx={{ fontSize: "18px", fontWeight: "600", color: "#1a1a1a" }}>
                Customer-first always
              </Typography>
              <Typography variant="body1" color="text.secondary">
                That's why{" "}
                <Box component="span" fontWeight="bold">
                  1.6+ crore
                </Box>{" "}
                customers trust Zerodha with{" "}
                <Box component="span" fontWeight="bold">
                  ~ ₹6 lakh crores
                </Box>{" "}
                of equity investments, making us India’s largest broker;
                contributing to 15% of daily retail exchange volumes in India.
              </Typography>
            </Box>

            <Box sx={{ mb: 3 }}>
              <Typography variant="h6" gutterBottom   sx={{ fontSize: "18px", fontWeight: "600", color: "#1a1a1a" }}>
                No spam or gimmicks
              </Typography>
              <Typography variant="body1" color="text.secondary">
                No gimmicks, spam, "gamification", or annoying push
                notifications. High quality apps that you use at your pace, the
                way you like.{" "}
                <Link href="/about/philosophy" underline="hover">
                  Our philosophies
                </Link>
                .
              </Typography>
            </Box>

            <Box>
              <Typography variant="h6" gutterBottom   sx={{ fontSize: "18px", fontWeight: "600", color: "#1a1a1a" }}>
                The Zerodha universe
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Not just an app, but a whole ecosystem. Our investments in 30+
                fintech startups offer you tailored services specific to your
                needs.
              </Typography>
            </Box>
          </Box>

          {/* Right - Image */}
          <Box
            sx={{
              flex: "1", // take remaining space
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box textAlign="center">
              <Link href="/products">
                <Box
                  component="img"
                  src={EcosystemImg}
                  alt="The Zerodha Universe"
                  sx={{
                    width: { xs: "90%", md: "100%" },
                    maxWidth: 550,
                    height: "auto",
                  }}
                />
              </Link>
              <Typography textAlign="center" sx={{ mt: 2 }}>
                <Link href="/products" underline="hover">
                  Explore our products →
                </Link>
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Press logos section */}
        <Box textAlign="center" sx={{ mt: 6 }}>
          <Link href="/media">
            <Box
              component="img"
              src={PressLogos}
              alt="Press Logos"
              sx={{ width: "100%", maxWidth: 800, height: "auto" }}
            />
          </Link>
        </Box>
      </Container>
    </Box>
  );
}
