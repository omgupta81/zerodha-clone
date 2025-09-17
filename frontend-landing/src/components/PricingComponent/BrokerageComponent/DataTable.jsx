// src/components/DataTable.jsx
import React from "react";
import { Table, Card } from "react-bootstrap";

export default function DataTable({ headers, rows, isDark = false }) {
  const tableBg = isDark ? "#1e1e1e" : "#fafafa";
  const headerBg = isDark ? "#2c2c2c" : "#f0f0f0";
  const rowHoverBg = isDark ? "#2a2a2a" : "#f9f9f9";
  const textColor = isDark ? "#ddd" : "#000";

  return (
    <Card
      className="mt-3 p-3"
      style={{
        borderRadius: "1rem",
        backgroundColor: tableBg,
        overflowX: "auto",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      }}
    >
      <Table responsive hover bordered className="mb-0" style={{ marginBottom: 0 }}>
        <thead style={{ backgroundColor: headerBg, position: "sticky", top: 0, zIndex: 1 }}>
          <tr>
            {headers.map((h, idx) => (
              <th
                key={idx}
                style={{
                  fontWeight: "bold",
                  color: isDark ? "#eee8e8ff" : "#000",
                  padding: "0.75rem 1rem",
                  fontSize: "0.95rem",
                }}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              style={{
                backgroundColor: tableBg,
                transition: "0.2s ease-in-out",
                cursor: "default",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = rowHoverBg)}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = tableBg)}
            >
              {row.map((cell, j) => (
                <td
                  key={j}
                  style={{
                    padding: "0.75rem 1rem",
                    fontSize: "0.9rem",
                    lineHeight: 1.6,
                    color: textColor,
                  }}
                >
                  <span dangerouslySetInnerHTML={{ __html: cell }} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </Card>
  );
}

