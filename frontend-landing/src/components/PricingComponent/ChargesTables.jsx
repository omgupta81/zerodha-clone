// src/components/ChargesTables.jsx
import React from "react";
import {
  Box,
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  useMediaQuery,
} from "@mui/material";

export default function ChargesTables() {
  const optionalServices = [
    {
      service: "Tickertape",
      billing: "Monthly / Annual",
      charges: "Free: 0 | Pro: 249/2399",
    },
    {
      service: "Smallcase",
      billing: "Per transaction",
      charges: "Buy & Invest More: 100 | SIP: 10",
    },
    {
      service: "Kite Connect",
      billing: "Monthly",
      charges: "Connect: 500 | Personal: Free",
    },
  ];

  const accountOpening = [
    { type: "Online account", charges: "Free" },
    { type: "Offline account", charges: "Free" },
    { type: "NRI account (offline only)", charges: "₹ 500" },
    {
      type: "Partnership, LLP, HUF, or Corporate accounts (offline only)",
      charges: "₹ 500",
    },
  ];

  const dematAMC = [
    { value: "Up to ₹4 lakh", amc: "Free*" },
    { value: "₹4 lakh - ₹10 lakh", amc: "₹ 100 per year, charged quarterly" },
    { value: "Above ₹10 lakh", amc: "₹ 300 per year, charged quarterly" },
  ];

  const isSmallScreen = useMediaQuery("(max-width:768px)");

  const renderTable = (headings, rows, keys) => (
    <TableContainer component={Paper} sx={{ mb: 6, borderRadius: 2 }}>
      <Table>
        {!isSmallScreen && (
          <TableHead sx={{ bgcolor: "#e3f2fd" }}>
            <TableRow>
              {headings.map((h, idx) => (
                <TableCell key={idx} sx={{ fontWeight: 600, py: 2 }}>
                  {h}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
        )}
        <TableBody>
          {rows.map((row, idx) => (
            <TableRow
              key={idx}
              sx={{
                display: isSmallScreen ? "block" : "table-row",
                mb: isSmallScreen ? 3 : 0, // spacing between rows in mobile
                borderRadius: isSmallScreen ? 2 : 0,
                bgcolor: isSmallScreen ? "#fafafa" : "inherit",
                boxShadow: isSmallScreen ? 1 : "none",
                p: isSmallScreen ? 2 : 0,
              }}
            >
              {keys.map((key, i) => (
                <TableCell
                  key={i}
                  sx={{
                    display: isSmallScreen ? "flex" : "table-cell",
                    justifyContent: isSmallScreen ? "space-between" : "flex-start",
                    borderBottom: isSmallScreen ? "none" : "1px solid #e0e0e0",
                    py: isSmallScreen ? 1.5 : 2, // more breathing space
                    px: isSmallScreen ? 1.5 : 2,
                  }}
                >
                  {isSmallScreen && (
                    <b style={{ color: "#555", marginRight: "10px" }}>
                      {headings[i]}:
                    </b>
                  )}
                  <span>{row[key]}</span>
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );

  return (
    <Box sx={{ py: 10, bgcolor: "#f9fafb" }}>
      <Container maxWidth="lg">
        <Typography
          variant="h5"
          fontWeight={700}
          sx={{ mb: 3, color: "#1a237e" }}
        >
          Charges for Optional Value Added Services
        </Typography>
        {renderTable(
          ["Service", "Billing Frequency", "Charges"],
          optionalServices,
          ["service", "billing", "charges"]
        )}

        <Typography
          variant="h5"
          fontWeight={700}
          sx={{ mb: 3, color: "#1a237e" }}
        >
          Charges for Account Opening
        </Typography>
        {renderTable(
          ["Type of Account", "Charges"],
          accountOpening,
          ["type", "charges"]
        )}

        <Typography
          variant="h5"
          fontWeight={700}
          sx={{ mb: 3, color: "#1a237e" }}
        >
          Demat AMC (Annual Maintenance Charge)
        </Typography>
        {renderTable(["Value of Holdings", "AMC"], dematAMC, ["value", "amc"])}
      </Container>
    </Box>
  );
}

