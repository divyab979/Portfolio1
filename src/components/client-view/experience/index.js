"use client";
import React, { useEffect, useRef, useState } from "react";
import { Box, Typography, Paper, IconButton } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

export default function ClientExperienceView({ data }) {
  const [experiences, setExperiences] = useState([]);
  const scrollRef = useRef(null);

  useEffect(() => {
    // Ensure data is always treated as an array.
    const arr = Array.isArray(data) ? data : data ? [data] : [];
    setExperiences(arr);
  }, [data]);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -500, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 500, behavior: "smooth" });
    }
  };

  return (
    <Box
      id="experience"
      sx={{
        minHeight: "100vh",
        scrollSnapAlign: "start",
        backgroundColor: "white",
        p: 2,
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
            fontSize: "2rem",
          }}
        >
          Experience
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

      {/* Horizontal Scroll Container with Arrow Buttons */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          maxWidth: "1500px",
          mx: "auto",
          "&:hover .arrow": { opacity: 1 },
        }}
      >
        <Box
          ref={scrollRef}
          sx={{
            display: "flex",
            gap: 2,
            overflowX: "auto",
            pb: 2,
            px: 1,
          }}
        >
          {experiences.length > 0 ? (
            experiences.map((item, index) => (
              <Paper
                key={item._id || index}
                elevation={3}
                sx={{
                  backgroundColor: "#fffbe6",
                  borderRadius: "16px",
                  p: 3,
                  minWidth: "500px",
                  height: "60vh",
                  flexShrink: 0,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  textAlign: "center",
                  opacity: 0.7,
                  transition: "opacity 0.3s ease",
                  "&:hover": {
                    opacity: 1,
                  },
                }}
              >
                <Typography variant="h3" sx={{ fontWeight: "bold", mb: 1 }}>
                  {item.jobTitle}
                </Typography>
                <Typography variant="h5" sx={{ mb: 1 }}>
                  Company: {item.company}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mb: 1,
                  }}
                >
                  <CalendarTodayIcon sx={{ fontSize: 20, mr: 0.5 }} />
                  <Typography variant="h5">
                    Duration: {item.duration}
                  </Typography>
                </Box>
                <Typography variant="h6">{item.experienceSummary}</Typography>
              </Paper>
            ))
          ) : (
            <Typography variant="h6" align="center">
              No Experience Data Available.
            </Typography>
          )}
        </Box>

        {/* Left Arrow Button */}
        <IconButton
          className="arrow"
          onClick={scrollLeft}
          sx={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            m: "auto",
            height: "60vh",
            width: "50px",
            opacity: 0,
            transition: "opacity 0.3s ease",
            backgroundColor: "rgba(255,255,255,0.3)",
            backdropFilter: "blur(5px)",
            borderRadius: 2,
            "&:hover": {
              backgroundColor: "rgba(255,255,255,0.5)",
            },
          }}
        >
          <ArrowBackIosNewIcon sx={{ color: "#333" }} />
        </IconButton>

        {/* Right Arrow Button */}
        <IconButton
          className="arrow"
          onClick={scrollRight}
          sx={{
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            m: "auto",
            height: "60vh",
            width: "50px",
            opacity: 0,
            transition: "opacity 0.3s ease",
            backgroundColor: "rgba(255,255,255,0.3)",
            backdropFilter: "blur(5px)",
            borderRadius: 2,
            "&:hover": {
              backgroundColor: "rgba(255,255,255,0.5)",
            },
          }}
        >
          <ArrowForwardIosIcon sx={{ color: "#333" }} />
        </IconButton>
      </Box>
    </Box>
  );
}
