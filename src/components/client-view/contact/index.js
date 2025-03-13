"use client";
import React, { useState } from "react";
import { Box, Typography, Paper, TextField, Button } from "@mui/material";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const subject = encodeURIComponent(`Contact from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );
    window.location.href = `mailto:divyab979@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <Box
      id="contact"
      sx={{
        minHeight: "100vh",
        scrollSnapAlign: "start",
        backgroundColor: "white",
        p: 4,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          p: 4,
          width: "100%",
          maxWidth: 600,
          borderRadius: "16px",
          backgroundColor: "rgba(255,194,188,0.2)", // Pink with 0.2 transparency
        }}
      >
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ fontWeight: "bold" }}
        >
          Contact Me
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate>
          <TextField
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
            sx={{
              backgroundColor: "white",
              borderRadius: "4px",
            }}
          />
          <TextField
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
            sx={{
              backgroundColor: "white",
              borderRadius: "4px",
            }}
          />
          <TextField
            label="Message (max 200 words)"
            name="message"
            value={formData.message}
            onChange={handleChange}
            fullWidth
            margin="normal"
            multiline
            rows={6}
            // helperText="Approximately 200 words max"
            required
            sx={{
              backgroundColor: "white",
              borderRadius: "4px",
            }}
          />
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              mt: 2,
              py: 1,
              fontWeight: "bold",
              backgroundColor: "rgba(255,194,188)",
              color: "black",
              textTransform: "none",
            }}
          >
            Submit
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}
