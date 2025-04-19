"use client";
import React from "react";
import { Box, Typography } from "@mui/material";

export default function ClientSkillView({ data }) {
  // Ensure data is treated as an array.
  const skills = Array.isArray(data) ? data : data ? [data] : [];

  return (
    <Box
      id="skills"
      sx={{
        minHeight: "100vh",
        scrollSnapAlign: "start",
        backgroundColor: "white",
        p: 4,
        position: "relative",
      }}
    >
      {/* Section Header */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mb: 4,
          width: "100%",
          mx: "auto",
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
          align="center"
          sx={{
            fontWeight: "bold",
            textTransform: "uppercase",
            color: "#333",
          }}
        >
          Skills
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

      {/* Horizontal Scroll Container */}
      {/* Horizontal Scroll Container */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          overflowX: "auto",
          pb: 2,
          px: 1,
        }}
      >
        <Box
          sx={{ position: "relative", width: "max-content", display: "flex" }}
        >
          {/* Pink Light Hue Background */}
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "250px",
              backgroundColor: "rgba(255,194,188,0.2)",
              zIndex: 0,
            }}
          />

          {/* Skill Cards */}
          <Box
            sx={{
              display: "flex",
              gap: 2,
              zIndex: 1,
            }}
          >
            {skills.length > 0 ? (
              skills.map((skill, index) => (
                <Box
                  key={skill._id || index}
                  sx={{
                    flexShrink: 0,
                    width: "200px",
                    height: "250px",
                    borderRadius: "8px",
                    overflow: "hidden",
                    position: "relative",
                    cursor: "pointer",
                  }}
                >
                  {skill.skillImage && (
                    <Box
                      component="img"
                      src={skill.skillImage}
                      alt={skill.skillTitle}
                      sx={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  )}
                  {/* Yellow Glass Hover Effect */}
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      backgroundColor: "rgba(255,223,100,0.3)",
                      backdropFilter: "blur(5px)",
                      opacity: 0,
                      transition: "opacity 0.3s ease",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      "&:hover": { opacity: 1 },
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: "bold", color: "#333" }}
                    >
                      {skill.skillTitle}
                    </Typography>
                  </Box>
                </Box>
              ))
            ) : (
              <Typography variant="h6" align="center">
                No Skill Data Available.
              </Typography>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
