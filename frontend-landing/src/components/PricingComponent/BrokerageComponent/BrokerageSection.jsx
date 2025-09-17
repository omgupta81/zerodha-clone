
// src/components/BrokerageSection.jsx
import { useState } from "react";
import { Container, Tabs, Tab } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";
import DataTable from "./DataTable";
import { brokerageConfig } from "./brokerageConfig";

export default function BrokerageSection() {
  const [activeTab, setActiveTab] = useState("equity");

  return (
    <section className="py-5" style={{ backgroundColor: "#f8f9fa" }}>
      <Container>
        <h2 className="text-center mb-4 fw-bold" style={{ color: "#1a237e" }}>
          Brokerage & Charges
        </h2>

        {/* Bootstrap Tabs */}
        <Tabs
          activeKey={activeTab}
          onSelect={(k) => setActiveTab(k)}
          className="mb-4 justify-content-center"
          fill
        >
          {Object.entries(brokerageConfig).map(([key, { label }]) => (
            <Tab
              key={key}
              eventKey={key}
              title={<span className="fw-semibold">{label}</span>}
            />
          ))}
        </Tabs>

        {/* Animate Table */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <DataTable
              headers={brokerageConfig[activeTab].headers}
              rows={brokerageConfig[activeTab].rows}
            />
          </motion.div>
        </AnimatePresence>
      </Container>
    </section>
  );
}
