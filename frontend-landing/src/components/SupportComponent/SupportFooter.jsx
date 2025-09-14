// src/components/SupportFooter.jsx
import React from "react";
import { Box, Container, Grid, Typography, Link } from "@mui/material";
import RaiseTicketButton from "./RaiseTicketButton";

export default function SupportFooter() {
  return (
    <Box sx={{ backgroundColor: "#f5f5f5", py: 6, borderTop: "1px solid #e0e0e0" }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Popular Topics */}
          <Grid item xs={12} sm={6}>
            <Typography
              variant="h6"
              gutterBottom
              sx={{ fontWeight: 700, color: "#1565c0" }}
            >
              Popular Topics
            </Typography>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              <li>
                <Link href="#" sx={{ color: "#424242", textDecoration: "none" }}>
                  How to reset my Kite password?
                </Link>
              </li>
              <li>
                <Link href="#" sx={{ color: "#424242", textDecoration: "none" }}>
                  Adding funds using UPI
                </Link>
              </li>
              <li>
                <Link href="#" sx={{ color: "#424242", textDecoration: "none" }}>
                  Understanding P&L reports
                </Link>
              </li>
            </ul>
          </Grid>

          {/* Raise Ticket Section */}
          <Grid item xs={12} sm={6}>
            <Typography
              variant="h6"
              gutterBottom
              sx={{ fontWeight: 700, color: "#1565c0" }}
            >
              Need More Help?
            </Typography>
            <Typography
              variant="body2"
              sx={{ mb: 3, color: "#424242", lineHeight: 1.6 }}
            >
              If you can't find what you're looking for, raise a support ticket and our team will get back to you promptly.
            </Typography>
            <RaiseTicketButton />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
