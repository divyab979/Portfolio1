"use client";

import React from "react";
import PropTypes from "prop-types";
import { Button, Paper, Box, TextField, Typography } from "@mui/material";

const controls = [
  {
    name: "username",
    placeholder: "Enter username",
    type: "text",
    label: "Username",
  },
  {
    name: "password",
    placeholder: "Enter password",
    type: "password",
    label: "Password",
  },
];

export default function Login({
  formData = {},
  setFormData = () => {},
  handleLogin,
}) {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <Box width="100%" display="flex" justifyContent="center" marginTop={"70px"}>
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
          Admin Login
        </Typography>
        {controls.map((control) => (
          <TextField
            key={control.name}
            label={control.label}
            name={control.name}
            type={control.type}
            fullWidth
            margin="normal"
            value={formData?.[control.name] || ""}
            onChange={handleInputChange}
            placeholder={control.placeholder}
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
          onClick={handleLogin}
          sx={{
            marginTop: 2,
            width: "100%",
            fontWeight: "bold",
            backgroundColor: "rgb(255,194,188)", // Pink color
            color: "white",
            "&:hover": { backgroundColor: "rgb(255,180,170)" }, // Slightly darker pink on hover
          }}
        >
          Login
        </Button>
      </Paper>
    </Box>
  );
}

Login.propTypes = {
  formData: PropTypes.object,
  setFormData: PropTypes.func,
  handleLogin: PropTypes.func.isRequired,
};
