// src/components/Header/Logo.jsx
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link
      to="/"
      style={{
        textDecoration: "none",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* Replace with <img src={Logo} alt="Logo" /> if you have one */}
      <Typography
        variant="h6"
        component="span"
        sx={{ color: "black", fontWeight: "bold" }}
      >
        Zerodha Clone
      </Typography>
    </Link>
  );
}
