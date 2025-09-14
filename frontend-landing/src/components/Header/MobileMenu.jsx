// src/components/Header/MobileMenu.jsx
import {
  Drawer,
  Box,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Button,
} from "@mui/material";
import { Close as CloseIcon } from "@mui/icons-material";
import { Link } from "react-router-dom";
import navItems from "./NavItems";

export default function MobileMenu({ open, onClose }) {
  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Box sx={{ width: 250, p: 2 }}>
        {/* Header inside drawer */}
        <Box
          sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}
        >
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Zerodha Clone
          </Typography>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>

        {/* Navigation list */}
        <List>
          {navItems.map((item) => (
            <ListItem key={item.label} disablePadding>
              <ListItemButton
                component={Link}
                to={item.path}
                onClick={onClose}
              >
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem>
            <Button
              fullWidth
              variant="contained"
              component={Link}
              to="/signup"
              sx={{
                bgcolor: "#387ed1",
                color: "white",
                textTransform: "none",
                "&:hover": { bgcolor: "#245ea6" },
              }}
              onClick={onClose}
            >
              Sign Up
            </Button>
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
}
