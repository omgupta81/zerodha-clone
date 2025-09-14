// src/components/Header/NavLinks.jsx
import { Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
import navItems from "./NavItems";

export default function NavLinks() {
  return (
    <Box>
      {navItems.map((item) => (
        <Button
          key={item.label}
          component={Link}
          to={item.path}
          sx={{ color: "black", mx: 1 }}
        >
          {item.label}
        </Button>
      ))}
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
  );
}
