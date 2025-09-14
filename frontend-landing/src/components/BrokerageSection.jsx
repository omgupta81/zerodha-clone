import { useState } from "react";
import { Box, Container, Typography, Tabs, Tab } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import DataTable from "./DataTable";
import { brokerageConfig } from "./brokerageConfig";

export default function BrokerageSection() {
  const [activeTab, setActiveTab] = useState("equity");

  return (
    <Box sx={{ py: 6, bgcolor: "background.default" }}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          gutterBottom
          align="center"
          sx={{ fontWeight: "600", mb: 4 }}
        >
          Brokerage & Charges
        </Typography>

        {/* Tabs */}
        <Tabs
          value={activeTab}
          onChange={(e, val) => setActiveTab(val)}
          centered
          sx={{
            borderBottom: 1,
            borderColor: "divider",
            mb: 4,
            "& .MuiTab-root": { fontWeight: 600, fontSize: "1rem" },
          }}
        >
          {Object.entries(brokerageConfig).map(([key, { label }]) => (
            <Tab key={key} label={label} value={key} />
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
    </Box>
  );
}
