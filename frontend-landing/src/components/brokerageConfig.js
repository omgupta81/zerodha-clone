// Brokerage charges configuration

export const brokerageConfig = {
  equity: {
    label: "Equity",
    headers: ["", "Equity delivery", "Equity intraday", "F&O - Futures", "F&O - Options"],
    rows: [
      ["Brokerage", "Zero Brokerage", "0.03% or ₹20/executed order whichever is lower", "0.03% or ₹20/executed order whichever is lower", "Flat ₹20 per executed order"],
      ["STT/CTT", "0.1% on buy & sell", "0.025% on sell side", "0.02% on sell side", "0.125% intrinsic value (if exercised)<br/>0.1% on premium (sell)"],
      ["Transaction charges", "NSE: 0.00297%<br/>BSE: 0.00375%", "NSE: 0.00297%<br/>BSE: 0.00375%", "NSE: 0.00173%<br/>BSE: 0", "NSE: 0.03503% (premium)<br/>BSE: 0.0325% (premium)"],
      ["GST", "18% on (brokerage + SEBI + transaction)", "18% on (brokerage + SEBI + transaction)", "18% on (brokerage + SEBI + transaction)", "18% on (brokerage + SEBI + transaction)"],
      ["SEBI charges", "₹10 / crore", "₹10 / crore", "₹10 / crore", "₹10 / crore"],
      ["Stamp charges", "0.015% or ₹1500 / crore (buy)", "0.003% or ₹300 / crore (buy)", "0.002% or ₹200 / crore (buy)", "0.003% or ₹300 / crore (buy)"],
    ],
  },

  currency: {
    label: "Currency",
    headers: ["", "Currency futures", "Currency options"],
    rows: [
      ["Brokerage", "0.03% or ₹20/executed order whichever is lower", "₹20/executed order"],
      ["STT/CTT", "No STT", "No STT"],
      ["Transaction charges", "NSE: 0.00035%<br/>BSE: 0.00045%", "NSE: 0.0311%<br/>BSE: 0.001%"],
      ["GST", "18% on (brokerage + SEBI + transaction)", "18% on (brokerage + SEBI + transaction)"],
      ["SEBI charges", "₹10 / crore", "₹10 / crore"],
      ["Stamp charges", "0.0001% or ₹10 / crore (buy)", "0.0001% or ₹10 / crore (buy)"],
    ],
  },

  commodity: {
    label: "Commodity",
    headers: ["", "Commodity futures", "Commodity options"],
    rows: [
      ["Brokerage", "0.03% or ₹20/executed order whichever is lower", "₹20/executed order"],
      ["STT/CTT", "0.01% on sell side (Non-Agri)", "0.05% on sell side"],
      ["Transaction charges", "MCX: 0.0021%<br/>NSE: 0.0001%", "MCX: 0.0418%<br/>NSE: 0.001%"],
      ["GST", "18% on (brokerage + SEBI + transaction)", "18% on (brokerage + SEBI + transaction)"],
      ["SEBI charges", "Agri: ₹1 / crore<br/>Non-agri: ₹10 / crore", "₹10 / crore"],
      ["Stamp charges", "0.002% or ₹200 / crore (buy)", "0.003% or ₹300 / crore (buy)"],
    ],
  },
};
