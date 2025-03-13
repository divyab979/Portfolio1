"use client";
import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

export default function ClientAboutView({ data }) {
  const title = data?.aboutTitle || "DEFAULT TITLE";
  const summary = data?.aboutSummary || "Default summary goes here.";

  return (
    <Box
      id="about"
      sx={{
        minHeight: "100vh",
        scrollSnapAlign: "start",
        backgroundColor: "white",
        position: "relative",
        p: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Diamond Design - positioned on the left, slightly lower */}
      <Box
        sx={{
          position: "absolute",
          top: "45%",
          left: 130,
          zIndex: 0,
        }}
      >
        {/* Larger Diamond */}
        <Box
          sx={{
            width: 90,
            height: 90,
            border: "2px solid rgb(255,194,188)",
            transform: "rotate(45deg)",
          }}
        />
        {/* Smaller Diamond, offset to the right (so it's not fully inside the larger one) */}
        <Box
          sx={{
            width: 60,
            height: 60,
            border: "2px solid rgb(255,194,188)",
            transform: "rotate(50deg)",
            position: "absolute",
            top: 40,
            left: 70,
          }}
        />
        <Box
          sx={{
            width: 100,
            height: 100,
            border: "2px solid rgb(255,194,188)",
            transform: "rotate(50deg)",
            position: "absolute",
            top: 50,
            left: 10,
          }}
        />
      </Box>

      <Box
        sx={{
          position: "absolute",
          top: "30%",
          right: 180,
          zIndex: 0,
        }}
      >
        {/* Larger Diamond */}
        <Box
          sx={{
            width: 90,
            height: 90,
            border: "2px solid rgb(255,194,188)",
            transform: "rotate(45deg)",
          }}
        />
        {/* Smaller Diamond, offset to the right (so it's not fully inside the larger one) */}
        <Box
          sx={{
            width: 60,
            height: 60,
            border: "2px solid rgb(255,194,188)",
            transform: "rotate(50deg)",
            position: "absolute",
            top: 40,
            left: 70,
          }}
        />
        <Box
          sx={{
            width: 100,
            height: 100,
            border: "2px solid rgb(255,194,188)",
            transform: "rotate(50deg)",
            position: "absolute",
            top: 50,
            left: 10,
          }}
        />
      </Box>

      {/* <Box sx={{ mb: 2 }}>
        <AutoAwesomeIcon sx={{ fontSize: 50, color: "rgb(255,194,188)" }} />
      </Box> */}

      {/* Header with horizontal lines and title */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mb: 4,
          position: "relative",
          zIndex: 1,
          width: "100%",
          maxWidth: 960,
        }}
      >
        <Box
          sx={{
            width: "80%",
            height: "2px",
            backgroundColor: "rgb(255,194,188)",
            mb: 1,
          }}
        />
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            textTransform: "uppercase",
            color: "#333",
          }}
        >
          {title}
        </Typography>
        <Box
          sx={{
            width: "80%",
            height: "2px",
            backgroundColor: "rgb(255,194,188)",
            mt: 1,
          }}
        />
      </Box>

      {/* Summary Card */}
      <Paper
        elevation={3}
        sx={{
          width: "90%",
          maxWidth: 960,
          backgroundColor: "#fffbe6", // Light yellow background
          borderRadius: "16px",
          p: 4,
          position: "relative",
          zIndex: 2,
        }}
      >
        <Typography variant="body1" sx={{ color: "#333", lineHeight: 1.6 }}>
          {summary}
        </Typography>
      </Paper>
    </Box>
  );
}
