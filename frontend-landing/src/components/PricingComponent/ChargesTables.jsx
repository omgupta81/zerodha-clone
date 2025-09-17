
// src/components/ChargesTables.jsx
import React from "react";
import { Container, Table } from "react-bootstrap";

export default function ChargesTables() {
  const optionalServices = [
    { service: "Tickertape", billing: "Monthly / Annual", charges: "Free: 0 | Pro: 249/2399" },
    { service: "Smallcase", billing: "Per transaction", charges: "Buy & Invest More: 100 | SIP: 10" },
    { service: "Kite Connect", billing: "Monthly", charges: "Connect: 500 | Personal: Free" },
  ];

  const accountOpening = [
    { type: "Online account", charges: "Free" },
    { type: "Offline account", charges: "Free" },
    { type: "NRI account (offline only)", charges: "₹ 500" },
    { type: "Partnership, LLP, HUF, or Corporate accounts (offline only)", charges: "₹ 500" },
  ];

  const dematAMC = [
    { value: "Up to ₹4 lakh", amc: "Free*" },
    { value: "₹4 lakh - ₹10 lakh", amc: "₹ 100 per year, charged quarterly" },
    { value: "Above ₹10 lakh", amc: "₹ 300 per year, charged quarterly" },
  ];

  const renderTable = (headings, rows, keys) => (
    <Table responsive bordered hover className="mb-5" style={{ borderRadius: "0.5rem", overflow: "hidden" }}>
      <thead className="bg-light">
        <tr>
          {headings.map((h, idx) => (
            <th key={idx} className="fw-bold py-2">{h}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, idx) => (
          <tr key={idx} className="align-middle">
            {keys.map((key, i) => (
              <td key={i} data-label={headings[i]} className="py-2">
                {row[key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  );

  return (
    <section className="py-5" style={{ backgroundColor:   "#f4f6f8" }}>
      <Container>
        {/* Optional Services Table */}
        <h5 className="fw-bold text-primary mb-3">Charges for Optional Value Added Services</h5>
        {renderTable(
          ["Service", "Billing Frequency", "Charges"],
          optionalServices,
          ["service", "billing", "charges"]
        )}

        {/* Account Opening Table */}
        <h5 className="fw-bold text-primary mb-3">Charges for Account Opening</h5>
        {renderTable(
          ["Type of Account", "Charges"],
          accountOpening,
          ["type", "charges"]
        )}

        {/* Demat AMC Table */}
        <h5 className="fw-bold text-primary mb-3">Demat AMC (Annual Maintenance Charge)</h5>
        {renderTable(
          ["Value of Holdings", "AMC"],
          dematAMC,
          ["value", "amc"]
        )}
      </Container>
    </section>
  );
}
