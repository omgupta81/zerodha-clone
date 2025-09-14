import { Box, Container, Typography, Divider } from "@mui/material";
import AboutImg from "../assets/nithinKamath.jpg"; // replace with your image

export default function About() {
  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: "#f9f9f9" }}>
      <Container maxWidth="lg">
        {/* Section Heading */}
        <Typography
          variant="h4"
          fontWeight={700}
          gutterBottom
          textAlign="center"
          sx={{ color: "#2c2c2c" }}
        >
          About Zerodha
        </Typography>

        <Typography
          variant="subtitle1"
          color="text.secondary"
          textAlign="center"
          mb={8}
          sx={{ lineHeight: 1.7 }}
        >
          We pioneered the discount broking model in India. Now, we are breaking
          ground with our technology.
        </Typography>

        {/* Top Section: Two-column text */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 6,
            mb: 6,
          }}
        >
          {/* Left Text */}
          <Box sx={{ flex: 1, textAlign: { xs: "center", md: "left" } }}>
            <Typography
              variant="body1"
              color="text.secondary"
              mb={3}
              sx={{ lineHeight: 1.7 }}
            >
              We kick-started operations on the 15th of August, 2010 with the
              goal of breaking all barriers that traders and investors face in
              India in terms of cost, support, and technology. We named the
              company Zerodha, a combination of Zero and "Rodha", the Sanskrit
              word for barrier.
            </Typography>

            <Typography
              variant="body1"
              color="text.secondary"
              mb={3}
              sx={{ lineHeight: 1.7 }}
            >
              Today, our disruptive pricing models and in-house technology have
              made us the biggest stock broker in India.
            </Typography>

            <Typography
              variant="body1"
              color="text.secondary"
              mb={3}
              sx={{ lineHeight: 1.7 }}
            >
              Over 1.6+ crore clients place billions of orders every year
              through our powerful ecosystem of investment platforms,
              contributing over 15% of all Indian retail trading volumes.
            </Typography>
          </Box>

          {/* Right Text */}
          <Box sx={{ flex: 1, textAlign: { xs: "center", md: "left" } }}>
            <Typography
              variant="body1"
              color="text.secondary"
              mb={3}
              sx={{ lineHeight: 1.7 }}
            >
              In addition, we run a number of popular open online educational
              and community initiatives to empower retail traders and investors.
            </Typography>

            <Typography
              variant="body1"
              color="text.secondary"
              mb={3}
              sx={{ lineHeight: 1.7 }}
            >
              Rainmatter, our fintech fund and incubator, has invested in
              several fintech startups with the goal of growing the Indian
              capital markets.
            </Typography>

            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ lineHeight: 1.7 }}
            >
              And yet, we are always up to something new every day. Catch up on
              the latest updates on our blog or see what the media is saying
              about us or learn more about our business and product
              philosophies.
            </Typography>
          </Box>
        </Box>

        {/* Divider line */}
        <Divider sx={{ my: 6, borderColor: "rgba(0,0,0,0.1)" }} />

        {/* Bottom Section: Image with text right */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            gap: 4,
          }}
        >
          {/* Image */}
          <Box
            sx={{
              flex: { xs: "unset", md: 0.4 },
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box
              component="img"
              src={AboutImg}
              alt="Nithin Kamath"
              sx={{
                width: { xs: "50%", md: "100%" },
                maxWidth: 200,
                height: "auto",
                borderRadius: "50%", // rounded
                boxShadow: 3,
              }}
            />
            {/* Caption below image */}
            <Typography
              variant="subtitle2"
              color="text.secondary"
              sx={{ mt: 1, textAlign: "center" }}
            >
              Nithin Kamath
              <br />
              Founder, CEO
            </Typography>
          </Box>

          {/* Text Right */}
          <Box sx={{ flex: 1, textAlign: { xs: "center", md: "left" } }}>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ lineHeight: 1.7 }}
            >
              Nithin bootstrapped and founded Zerodha in 2010 to overcome the
              hurdles he faced during his decade long stint as a trader. Today,
              Zerodha has changed the landscape of the Indian broking industry.
            </Typography>

            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ lineHeight: 1.7, mt: 2 }}
            >
              He is a member of the SEBI Secondary Market Advisory Committee
              (SMAC) and the Market Data Advisory Committee (MDAC).
            </Typography>
          </Box>
        </Box>

        {/* Divider line below bottom section */}
        <Divider sx={{ mt: 6, borderColor: "rgba(0,0,0,0.1)" }} />
      </Container>
    </Box>
  );
}
