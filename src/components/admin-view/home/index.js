"use client";

import React from "react";
import PropTypes from "prop-types";
import { Button, Paper, Box, TextField, Typography } from "@mui/material";

const controls = [
  {
    name: "myName",
    placeholder: "Enter Your Name",
    type: "text",
    label: "Name",
  },
  {
    name: "oneLineSummary",
    placeholder: "Enter One Line Summary",
    type: "text",
    label: "One Line Summary",
  },
];

export default function AdminHomeView({
  formData = {},
  setFormData = () => {},
  handleSaveData,
}) {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log("Input changed:", name, value); // Debug log
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
          Admin Home DONT USE THE FORM
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
              backgroundColor: "rgba(255,194,188,0.3)", // Matches styling of About and Login forms
              borderRadius: "8px",
              "& .MuiOutlinedInput-root": {
                "& fieldset": { border: "none" },
              },
              "& .MuiInputBase-input": {
                color: "black",
              },
            }}
          />
        ))}
        <Button
          variant="contained"
          onClick={() => {
            console.log("Saving home data:", formData); // Debug log
            handleSaveData("home");
          }}
          sx={{
            marginTop: 2,
            width: "100%",
            fontWeight: "bold",
            backgroundColor: "rgb(255,194,188)",
            color: "white",
            "&:hover": { backgroundColor: "rgb(255,180,170)" },
          }}
        >
          Add Info
        </Button>
      </Paper>
    </Box>
  );
}

AdminHomeView.propTypes = {
  formData: PropTypes.object,
  setFormData: PropTypes.func,
  handleSaveData: PropTypes.func.isRequired,
};
