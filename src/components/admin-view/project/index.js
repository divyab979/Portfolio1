"use client";

import React from "react";
import PropTypes from "prop-types";
import { Button, Paper, Box, TextField, Typography } from "@mui/material";

const controls = [
  {
    name: "projectName",
    placeholder: "Project Name",
    type: "text",
    label: "Project Name",
  },
  {
    name: "projectDescription",
    placeholder: "Description",
    type: "text",
    label: "Description",
  },
  {
    name: "projectGitLink",
    placeholder: "Github Link",
    type: "text",
    label: "Github Link",
  },
  {
    name: "projectWebLink",
    placeholder: "Web Link",
    type: "text",
    label: "Web Link",
  },
];

export default function AdminProjectView({
  formData = {},
  setFormData = () => {},
  handleSaveData,
  data = [],
}) {
  // Handle text input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle file upload for project image
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setFormData({ ...formData, projectImage: imageUrl });
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
          backgroundColor: "rgba(255,194,188,0.2)",
        }}
      >
        <Typography variant="h5" component="h1" align="center" gutterBottom>
          Admin Projects
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
                {item.projectImage && (
                  <Box
                    component="img"
                    src={item.projectImage}
                    alt={item.projectName}
                    sx={{
                      width: "100%",
                      height: "auto",
                      borderRadius: "8px",
                      marginBottom: 1,
                    }}
                  />
                )}
                <Typography>{item.projectName}</Typography>
                <Typography>{item.projectDescription}</Typography>
                <Typography>{item.projectGitLink}</Typography>
                <Typography>{item.projectWebLink}</Typography>
              </Box>
            ))}
        </Box>

        {/* Project Image Input: URL field with Upload button */}
        <Box display="flex" alignItems="center" gap={2} mt={2}>
          <TextField
            label="Project Image URL"
            name="projectImage"
            type="text"
            placeholder="Enter Project Image URL"
            fullWidth
            value={formData?.projectImage || ""}
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

        {/* Render remaining text input fields */}
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
        ))}

        {/* Save Button */}
        <Button
          variant="contained"
          onClick={() => handleSaveData("project")}
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

AdminProjectView.propTypes = {
  formData: PropTypes.object,
  setFormData: PropTypes.func,
  handleSaveData: PropTypes.func.isRequired,
  data: PropTypes.array,
};
