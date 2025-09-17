// src/components/ChargesExplained.jsx
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

export default function ChargesExplained() {
  const leftItems = [
    {
      title: "Securities/Commodities transaction tax",
      desc: `Tax by the government when transacting on the exchanges. Charged as above on both buy and sell sides when trading equity delivery. Charged only on selling side when trading intraday or on F&O.

When trading at Zerodha, STT/CTT can be a lot more than the brokerage we charge. Important to keep a tab.`,
    },
    {
      title: "Transaction/Turnover Charges",
      desc: `Charged by exchanges (NSE, BSE, MCX) on the value of your transactions.

BSE has revised transaction charges in XC, XD, XT, Z and ZP groups to ₹10,000 per crore w.e.f 01.01.2016. (XC and XD groups have been merged into a new group X w.e.f 01.12.2017)

BSE has revised transaction charges in SS and ST groups to ₹1,00,000 per crore of gross turnover.

BSE has revised transaction charges for group A, B and other non-exclusive scrips (non-exclusive scrips from group E, F, FC, G, GC, W, T) at ₹375 per crore of turnover on flat rate basis w.e.f. December 1, 2022.

BSE has revised transaction charges in M, MT, TS and MS groups to ₹275 per crore of gross turnover.`,
    },
    { title: "Call & trade", desc: "Additional charges of ₹50 per order for orders placed through a dealer at Zerodha including auto square off orders." },
    { title: "Stamp charges", desc: "Stamp charges by the Government of India as per the Indian Stamp Act of 1899 for transacting in instruments on the stock exchanges and depositories." },
    { title: "NRI brokerage charges", desc: `For a non-PIS account, 0.5% or ₹50 per executed order for equity and F&O (whichever is lower).
For a PIS account, 0.5% or ₹200 per executed order for equity (whichever is lower).
₹500 + GST as yearly account maintenance charges (AMC) charges.` },
    { title: "Account with debit balance", desc: "If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order." },
    { title: "Charges for Investor's Protection Fund Trust (IPFT) by NSE", desc: `Equity and Futures - ₹10 per crore + GST of the traded value.
Options - ₹50 per crore + GST traded value (premium value).
Currency - ₹0.05 per lakh + GST of turnover for Futures and ₹2 per lakh + GST of premium for Options.` },
    { title: "Margin Trading Facility (MTF)", desc: `MTF Interest: 0.04% per day (₹40 per lakh) on the funded amount. Interest applied from T+1 day until stocks are sold.
MTF Brokerage: 0.3% or ₹20/executed order, whichever is lower.
MTF pledge charge: ₹15 + GST per pledge and unpledge request per ISIN.` },
  ];

  const rightItems = [
    { title: "GST", desc: "Tax levied by the government on the services rendered. 18% of ( brokerage + SEBI charges + transaction charges)" },
    { title: "SEBI Charges", desc: "Charged at ₹10 per crore + GST by Securities and Exchange Board of India for regulating the markets." },
    { title: "DP (Depository participant) charges", desc: `₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST) is charged on the trading account ledger when stocks are sold, irrespective of quantity.
Female demat account holders (as first holder) will enjoy a discount of ₹0.25 per transaction on the CDSL fee.
Debit transactions of mutual funds & bonds get an additional discount of ₹0.25 on the CDSL fee.` },
    { title: "Pledging charges", desc: "₹30 + GST per pledge request per ISIN." },
    { title: "AMC (Account maintenance charges)", desc: `For BSDA demat account: Zero charges if holding value is less than ₹4,00,000. 
For non-BSDA demat accounts: ₹300/year + 18% GST charged quarterly (90 days).` },
    { title: "Corporate action order charges", desc: "₹20 plus GST will be charged for OFS / buyback / takeover / delisting orders placed through Console." },
    { title: "Off-market transfer charges", desc: "₹25 per transaction." },
    { title: "Physical CMR request", desc: "First CMR request is free. ₹20 + ₹100 (courier charge) + 18% GST for subsequent requests." },
    { title: "Payment gateway charges", desc: "₹9 + GST (Not levied on transfers done via UPI)" },
    { title: "Delayed Payment Charges", desc: "Interest is levied at 18% a year or 0.05% per day on the debit balance in your trading account." },
    { title: "Trading using 3-in-1 account with block functionality", desc: `Delivery & MTF Brokerage: 0.5% per executed order.
Intraday Brokerage: 0.05% per executed order.` },
  ];

  return (
    <section className="py-5" style={{ backgroundColor: "#f4f6f8" }}>
      <Container>
        {/* Heading */}
        <h2 className="text-primary fw-bold mb-5">Charges Explained</h2>

        {/* Two-column layout */}
        <Row className="g-4">
          <Col md={6}>
            {leftItems.map((item, idx) => (
              <div key={idx} className="mb-4">
                <h5 className="text-primary fw-semibold">{item.title}</h5>
                <p className="text-secondary" style={{ whiteSpace: "pre-line", lineHeight: 1.6 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </Col>

          <Col md={6}>
            {rightItems.map((item, idx) => (
              <div key={idx} className="mb-4">
                <h5 className="text-primary fw-semibold">{item.title}</h5>
                <p className="text-secondary" style={{ whiteSpace: "pre-line", lineHeight: 1.6 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </Col>
        </Row>

        {/* Disclaimer */}
        <Card className="mt-5 p-4" style={{ backgroundColor: "#e3f2fd", borderRadius: "0.5rem" }}>
          <Card.Body>
            <p className="text-secondary" style={{ lineHeight: 1.6 }}>
              Disclaimer: For Delivery based trades, a minimum of ₹0.01 will be charged per contract note. Clients who opt to receive physical contract notes will be charged ₹20 per contract note plus courier charges. Brokerage will not exceed the rates specified by SEBI and the exchanges. All statutory and regulatory charges will be levied at actuals. Brokerage is also charged on expired, exercised, and assigned options contracts. Free investments are available only for retail individual clients. Companies, Partnerships, Trusts, and HUFs need to pay 0.1% or ₹20 (whichever is less) as delivery brokerage. A brokerage of 0.25% of the contract value will be charged for contracts where physical delivery happens. For netted off positions in physically settled contracts, a brokerage of 0.1% will be charged.
            </p>
          </Card.Body>
        </Card>
      </Container>
    </section>
  );
}
