// src/components/RaiseTicketButton.jsx
import React, { useState } from "react";
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField, Typography } from "@mui/material";

export default function RaiseTicketButton() {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleOpen = () => {
    setOpen(true);
    setSubmitted(false);
  };

  const handleClose = () => setOpen(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Ticket Data:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <>
      <Button
        variant="contained"
        onClick={handleOpen}
        sx={{
          backgroundColor: "#1565c0",
          color: "#fff",
          fontWeight: 600,
          borderRadius: 3,
          px: 4,
          py: 1.5,
          textTransform: "none",
          transition: "0.3s",
          "&:hover": { backgroundColor: "#1e88e5", boxShadow: "0 4px 15px rgba(0,0,0,0.2)" },
        }}
      >
        Raise a Ticket
      </Button>

      {/* Dialog Modal */}
      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle sx={{ fontWeight: 700, color: "#1565c0" }}>Raise a Support Ticket</DialogTitle>
        <DialogContent>
          {submitted ? (
            <Typography sx={{ mt: 2, color: "#2e7d32" }}>Your ticket has been submitted successfully!</Typography>
          ) : (
            <form onSubmit={handleSubmit}>
              <TextField
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                fullWidth
                required
                margin="normal"
              />
              <TextField
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                fullWidth
                required
                margin="normal"
              />
              <TextField
                label="Subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                fullWidth
                required
                margin="normal"
              />
              <TextField
                label="Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                fullWidth
                required
                multiline
                rows={4}
                margin="normal"
              />
            </form>
          )}
        </DialogContent>
        <DialogActions>
          {!submitted && (
            <Button type="submit" onClick={handleSubmit} variant="contained" sx={{ backgroundColor: "#1565c0" }}>
              Submit
            </Button>
          )}
          <Button onClick={handleClose} variant="outlined" sx={{ color: "#1565c0", borderColor: "#1565c0" }}>
            {submitted ? "Close" : "Cancel"}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
