import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg"; // import your SVG

export default function Header() {
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{ bgcolor: "white", borderBottom: "1px solid #e0e0e0" }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
         {/*  Logo */}
         <Link to="/" style={{ textDecoration: "none", display: "flex", alignItems: "center" }}>
     
      {/* <img src={Logo} alt="Zerodha Clone Logo" className="h-8 w-auto mr-2" /> */}

      {/* Optional text next to logo */}
      <Typography
        variant="h6"
        component="span"
        sx={{ color: "black", fontWeight: "bold" }}
      >
        Zerodha Clone
      </Typography>
    </Link>

        {/* Navigation Links */}
        <Box>
          
          <Button component={Link} to="/about" sx={{ color: "black", mx: 1 }}>
            About
          </Button>
          <Button
            component={Link}
            to="/products"
            sx={{ color: "black", mx: 1 }}
          >
            Products
          </Button>
          <Button component={Link} to="/pricing" sx={{ color: "black", mx: 1 }}>
            Pricing
          </Button>
          <Button component={Link} to="/support" sx={{ color: "black", mx: 1 }}>
            Support
          </Button>
          <Button
            variant="contained"
            component={Link}
            to="/signup"
            sx={{
              bgcolor: "#387ed1",
              color: "white",
              textTransform: "none",
              ml: 2,
              "&:hover": { bgcolor: "#245ea6" },
            }}
          >
            Sign Up
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
