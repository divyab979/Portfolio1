"use client";

import React from "react";
import PropTypes from "prop-types";
import { Button, Paper, Box, TextField, Typography } from "@mui/material";

const controls = [
  {
    name: "skillTitle",
    placeholder: "Skill Name",
    type: "text",
    label: "Skill Name",
  },
  // We will handle the skillImage field separately below.
];

export default function AdminSkillsView({
  formData = {},
  setFormData = () => {},
  handleSaveData,
  data = [],
}) {
  // Handler for text inputs in controls array
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handler for file upload for the skill image.
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Create a temporary URL for the file.
      const imageUrl = URL.createObjectURL(file);
      setFormData({ ...formData, skillImage: imageUrl });
    }
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
          Admin Skills
        </Typography>

        {/* Data List */}
        <Box mb={3}>
          {data &&
            data.length > 0 &&
            data.map((item, index) => (
              <Box
                key={item.id || index}
                sx={{
                  backgroundColor: "rgb(255,194,188)",
                  borderRadius: "8px",
                  padding: 2,
                  marginBottom: 2,
                }}
              >
                {item.skillImage && (
                  <Box
                    component="img"
                    src={item.skillImage}
                    alt={item.skillTitle}
                    sx={{
                      width: "100%",
                      height: "auto",
                      borderRadius: "8px",
                      marginBottom: 1,
                    }}
                  />
                )}
                <Typography>{item.skillTitle}</Typography>
              </Box>
            ))}
        </Box>

        {/* Input Fields for Skill Title */}
        {controls.map((control) => (
          <TextField
            key={control.name}
            label={control.label}
            name={control.name}
            type={control.type}
            placeholder={control.placeholder}
            fullWidth
            margin="normal"
            value={formData?.[control.name] || ""}
            onChange={handleInputChange}
            sx={{
              backgroundColor: "rgba(255,194,188,0.3)", // Matches styling in Login/AdminAboutView
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

        {/* Combined Input for Skill Image: URL + Upload */}
        <Box display="flex" alignItems="center" gap={2} mt={2}>
          <TextField
            label="Skill Image URL"
            name="skillImage"
            type="text"
            placeholder="Enter Skill Image URL"
            fullWidth
            value={formData?.skillImage || ""}
            onChange={handleInputChange}
            sx={{
              backgroundColor: "rgba(255,194,188,0.3)",
              borderRadius: "8px",
              "& .MuiOutlinedInput-root": {
                "& fieldset": { border: "none" },
              },
              "& .MuiInputBase-input": {
                color: "black",
              },
            }}
          />
          <Button
            variant="outlined"
            component="label"
            sx={{
              backgroundColor: "rgba(255,194,188,0.3)",
              borderRadius: "8px",
              color: "black",
              textTransform: "none",
              px: 2,
              py: 1,
            }}
          >
            Upload
            <input
              type="file"
              accept="image/*"
              hidden
              onChange={handleFileUpload}
            />
          </Button>
        </Box>

        {/* Save Button */}
        <Button
          variant="contained"
          onClick={() => handleSaveData("skills")}
          sx={{
            marginTop: 2,
            width: "100%",
            fontWeight: "bold",
            backgroundColor: "rgb(255,194,188)",
            color: "white",
            textTransform: "none",
            "&:hover": { backgroundColor: "rgb(255,180,170)" },
          }}
        >
          Add Info
        </Button>
      </Paper>
    </Box>
  );
}

AdminSkillsView.propTypes = {
  formData: PropTypes.object,
  setFormData: PropTypes.func,
  handleSaveData: PropTypes.func.isRequired,
  data: PropTypes.array,
};
