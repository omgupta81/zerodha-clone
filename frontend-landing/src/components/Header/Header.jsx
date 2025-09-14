// src/components/Header/Header.jsx
import { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";

import Logo from "./Logo";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width:900px)");

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  return (
    <>
      <AppBar
        position="static"
        elevation={0}
        sx={{ bgcolor: "white", borderBottom: "1px solid #e0e0e0" }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Logo />

          {!isMobile ? (
            <NavLinks />
          ) : (
            <IconButton onClick={handleDrawerToggle}>
              <MenuIcon sx={{ color: "black" }} />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* Drawer for mobile */}
      <MobileMenu open={mobileOpen} onClose={handleDrawerToggle} />
    </>
  );
}
