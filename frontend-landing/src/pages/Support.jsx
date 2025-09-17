// src/pages/Support.jsx
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import SupportNavbar from "../components/SupportComponent/SupportNavbar";
import SupportHero from "../components/SupportComponent/SupportHero";
import CategoriesSection from "../components/SupportComponent/CategoriesSection";
import FAQSection from "../components/SupportComponent/FAQSection";
import SupportFooter from "../components/SupportComponent/SupportFooter";

// Bootstrap Icons via react-icons
import {
  BsPersonCircle,
  BsWallet2,
  BsBarChart,
  BsFileText,
  BsBank,
  BsQuestionCircle,
} from "react-icons/bs";

export default function Support() {
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    {
      title: "Account Opening",
      desc: "Get help with opening your trading & demat account, KYC, and documentation.",
      icon: <BsPersonCircle size={40} className="text-primary" />,
    },
    {
      title: "Funds",
      desc: "Learn about adding money, withdrawals, settlements, and fund transfers.",
      icon: <BsWallet2 size={40} className="text-success" />,
    },
    {
      title: "Trading",
      desc: "Guides on using Kite, Console, and other platforms for seamless trading.",
      icon: <BsBarChart size={40} className="text-warning" />,
    },
    {
      title: "Reports",
      desc: "Get detailed info on P&L statements, tax reports, and other documents.",
      icon: <BsFileText size={40} className="text-purple" />,
    },
    {
      title: "Funds & Banking",
      desc: "Understand linked bank accounts, UPI, netbanking, and payment gateways.",
      icon: <BsBank size={40} className="text-info" />,
    },
    {
      title: "General",
      desc: "Browse FAQs, common queries, and platform usage tips.",
      icon: <BsQuestionCircle size={40} className="text-danger" />,
    },
  ];

  const faqs = [
    {
      q: "How do I reset my Kite password?",
      a: "To reset your Kite password, click on ‘Forgot password’ on the Kite login page. Enter your user ID and PAN, verify OTP, and set a new password.",
    },
    {
      q: "How can I add funds to my trading account?",
      a: "You can add funds via UPI, Netbanking, or IMPS/NEFT/RTGS. Go to ‘Funds’ in Kite, select ‘Add funds’, choose a method, and follow the instructions.",
    },
    {
      q: "Where can I view my P&L statement?",
      a: "Login to Console, navigate to ‘Reports → P&L’, and choose the desired segment and date range. You can also download statements in Excel or PDF format.",
    },
    {
      q: "How do I withdraw money from my account?",
      a: "Go to the ‘Funds’ section in Kite, click on ‘Withdraw’, enter the withdrawal amount, and confirm. Funds are credited to your registered bank within 24 hours.",
    },
    {
      q: "How can I update my bank details?",
      a: "To update bank details, raise a modification request on Console under ‘Account → Profile’. Upload cancelled cheque / bank proof and submit digitally signed form.",
    },
  ];

  return (
    <div className="bg-light min-vh-100">
      {/* Navbar */}
      <SupportNavbar />

      {/* Hero / Search Section */}
      <SupportHero searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      {/* Categories Section */}
      <section id="categories-section" className="py-5">
        <Container>
          <CategoriesSection searchQuery={searchQuery} categories={categories} />
        </Container>
      </section>

      {/* FAQ Section */}
      <section id="faq-section" className="py-5">
        <Container>
          <FAQSection searchQuery={searchQuery} faqs={faqs} />
        </Container>
      </section>

      {/* Raise Ticket / Footer Section */}
      <section id="raise-ticket-section" className="py-5">
        <Container>
          <SupportFooter />
        </Container>
      </section>
    </div>
  );
}
