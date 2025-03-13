"use client";

import React from "react";
import PropTypes from "prop-types";
import { Paper, Box, Typography, Button, TextField } from "@mui/material";

const controls = [
  {
    name: "jobTitle",
    placeholder: "Job Title",
    type: "text",
    label: "Job Title",
  },
  {
    name: "company",
    placeholder: "Company",
    type: "text",
    label: "Company",
  },
  {
    name: "duration",
    placeholder: "Duration",
    type: "text",
    label: "Duration",
  },
  {
    name: "experienceSummary",
    placeholder: "Key Summary Points",
    type: "text",
    label: "Key Summary Points",
  },
];

export default function AdminExperienceView({
  formData = {},
  handleSaveData,
  setFormData,
  data = [],
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
          Admin Experience
        </Typography>

        {/* Existing Experience List */}
        <Box mb={3}>
          {data &&
            data.length > 0 &&
            data.map((item, index) => (
              <Box
                key={item.id || index}
                sx={{
                  backgroundColor: "rgb(255,194,188,0.7)",
                  borderRadius: "8px",
                  padding: 2,
                  marginBottom: 2,
                }}
              >
                <Typography>{item.jobTitle}</Typography>
                <Typography>{item.company}</Typography>
                <Typography>{item.duration}</Typography>
                <Typography>{item.experienceSummary}</Typography>
              </Box>
            ))}
        </Box>

        {/* Input Fields */}
        {controls.map((control) => (
          <TextField
            key={control.name}
            label={control.label}
            name={control.name}
            type={control.type}
            placeholder={control.placeholder}
            value={formData?.[control.name] || ""}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
            sx={{
              backgroundColor: "rgba(255,194,188,0.3)", // Same as login/adminaboutview
              borderRadius: "8px",
              "& .MuiOutlinedInput-root": {
                "& fieldset": { border: "none" }, // Remove default border
              },
              "& .MuiInputBase-input": {
                color: "black", // Text color for readability
              },
            }}
          />
        ))}

        {/* Save Button */}
        <Button
          variant="contained"
          onClick={() => handleSaveData("experience")}
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

AdminExperienceView.propTypes = {
  formData: PropTypes.object,
  setFormData: PropTypes.func,
  handleSaveData: PropTypes.func.isRequired,
  data: PropTypes.array,
};
