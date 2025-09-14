// src/pages/Support.jsx
import React, { useState } from "react";
import { Box } from "@mui/material";
import SupportNavbar from "../components/SupportNavbar";
import SupportHero from "../components/SupportHero";
import CategoriesSection from "../components/CategoriesSection";
import FAQSection from "../components/FAQSection";
import SupportFooter from "../components/SupportFooter";
import {
  AccountCircle,
  AccountBalanceWallet,
  BarChart,
  Description,
  AccountBalance,
  HelpOutline,
} from "@mui/icons-material";

export default function Support() {
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { title: "Account Opening", desc: "Get help with opening your trading & demat account, KYC, and documentation.", icon: <AccountCircle fontSize="large" sx={{ color: "#1565c0" }} /> },
    { title: "Funds", desc: "Learn about adding money, withdrawals, settlements, and fund transfers.", icon: <AccountBalanceWallet fontSize="large" sx={{ color: "#2e7d32" }} /> },
    { title: "Trading", desc: "Guides on using Kite, Console, and other platforms for seamless trading.", icon: <BarChart fontSize="large" sx={{ color: "#ef6c00" }} /> },
    { title: "Reports", desc: "Get detailed info on P&L statements, tax reports, and other documents.", icon: <Description fontSize="large" sx={{ color: "#6a1b9a" }} /> },
    { title: "Funds & Banking", desc: "Understand linked bank accounts, UPI, netbanking, and payment gateways.", icon: <AccountBalance fontSize="large" sx={{ color: "#00838f" }} /> },
    { title: "General", desc: "Browse FAQs, common queries, and platform usage tips.", icon: <HelpOutline fontSize="large" sx={{ color: "#c62828" }} /> },
  ];

  const faqs = [
    { q: "How do I reset my Kite password?", a: "To reset your Kite password, click on ‘Forgot password’ on the Kite login page. Enter your user ID and PAN, verify OTP, and set a new password." },
    { q: "How can I add funds to my trading account?", a: "You can add funds via UPI, Netbanking, or IMPS/NEFT/RTGS. Go to ‘Funds’ in Kite, select ‘Add funds’, choose a method, and follow the instructions." },
    { q: "Where can I view my P&L statement?", a: "Login to Console, navigate to ‘Reports → P&L’, and choose the desired segment and date range. You can also download statements in Excel or PDF format." },
    { q: "How do I withdraw money from my account?", a: "Go to the ‘Funds’ section in Kite, click on ‘Withdraw’, enter the withdrawal amount, and confirm. Funds are credited to your registered bank within 24 hours." },
    { q: "How can I update my bank details?", a: "To update bank details, raise a modification request on Console under ‘Account → Profile’. Upload cancelled cheque / bank proof and submit digitally signed form." },
  ];

  return (
    <Box sx={{ backgroundColor: "#fafafa", minHeight: "100vh" }}>
      {/* Navbar */}
      <SupportNavbar />

      {/* Hero / Search Section */}
      <SupportHero searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      {/* Categories Section */}
      <Box id="categories-section">
        <CategoriesSection searchQuery={searchQuery} categories={categories} />
      </Box>

      {/* FAQ Section */}
      <Box id="faq-section">
        <FAQSection searchQuery={searchQuery} faqs={faqs} />
      </Box>

      {/* Raise Ticket / Footer Section */}
      <Box id="raise-ticket-section">
        <SupportFooter />
      </Box>
    </Box>
  );
}
