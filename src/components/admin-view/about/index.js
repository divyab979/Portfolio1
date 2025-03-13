"use client";

import React from "react";
import PropTypes from "prop-types";
import { Button, Paper, Box, TextField, Typography } from "@mui/material";

const controls = [
  {
    name: "aboutTitle",
    placeholder: "Title",
    type: "text",
    label: "Title",
  },
  {
    name: "aboutSummary",
    placeholder: "Summary",
    type: "text",
    label: "Summary",
  },
];

export default function AdminAboutView({
  formData = {},
  setFormData = () => {},
  handleSaveData,
}) {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <Box width="100%" display="flex" justifyContent="center" marginTop="70px">
      <Paper
        elevation={3}
        sx={{
          padding: 3,
          width: "100%",
          maxWidth: 600,
          backgroundColor: "rgba(255,194,188,0.2)", // Light pink hue with transparency
        }}
      >
        <Typography variant="h5" component="h1" align="center" gutterBottom>
          Admin About
        </Typography>
        {controls.map((control) => (
          <TextField
            key={control.name}
            label={control.label}
            name={control.name}
            type={control.type}
            fullWidth
            margin="normal"
            placeholder={control.placeholder}
            value={formData?.[control.name] || ""}
            onChange={handleInputChange}
            sx={{
              backgroundColor: "rgba(255,194,188,0.3)", // Slightly darker for contrast
              borderRadius: "8px",
              "& .MuiOutlinedInput-root": {
                "& fieldset": { border: "none" }, // Removes the default border
              },
              "& .MuiInputBase-input": {
                color: "black", // Text color for readability
              },
            }}
          />
        ))}
        <Button
          variant="contained"
          onClick={() => handleSaveData("about")}
          sx={{
            marginTop: 2,
            width: "100%",
            fontWeight: "bold",
            backgroundColor: "rgb(255,194,188)", // Pink color
            color: "white",
            "&:hover": { backgroundColor: "rgb(255,180,170)" }, // Slightly darker pink on hover
          }}
        >
          Add Info
        </Button>
      </Paper>
    </Box>
  );
}

AdminAboutView.propTypes = {
  formData: PropTypes.object,
  setFormData: PropTypes.func,
  handleSaveData: PropTypes.func.isRequired,
};
