"use client";
import React, { useEffect, useRef, useState } from "react";
import { Box, Typography, Paper, IconButton, Button } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function ClientProjectView({ data }) {
  const [projects, setProjects] = useState([]);
  const scrollRef = useRef(null);

  useEffect(() => {
    const arr = Array.isArray(data) ? data : data ? [data] : [];
    setProjects(arr);
  }, [data]);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -scrollRef.current.clientWidth,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: scrollRef.current.clientWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <Box
      id="projects"
      sx={{
        position: "relative",
        minHeight: "100vh",
        scrollSnapAlign: "start",
        p: 2,
        overflow: "hidden",
        // marginTop: 20,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "30%",
          left: "-10%",
          width: "120%",
          height: "200px",
          backgroundColor: "rgba(255,194,188,0.2)",
          transform: "rotate(-20deg)",
          zIndex: 0,
        }}
      />

      <Box
        sx={{
          position: "relative",
          zIndex: 1,
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
          sx={{ fontWeight: "bold", textTransform: "uppercase", color: "#333" }}
        >
          Projects
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

      <Box
        ref={scrollRef}
        sx={{
          display: "flex",
          gap: 2,
          overflowX: "auto",
          scrollSnapType: "x mandatory",
          "& > *": { scrollSnapAlign: "start" },
          pb: 2,
          px: 1,
          position: "relative",
          zIndex: 1,
          width: "100%",
          maxWidth: "1500px",
          mx: "auto",
        }}
      >
        {projects.length > 0 ? (
          projects.map((project, index) => (
            <Paper
              key={project._id || index}
              elevation={0}
              sx={{
                backgroundColor: "transparent",
                borderRadius: "16px",
                p: 2,
                width: "100%",
                height: "60vh",
                flexShrink: 0,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                textAlign: "center",
                opacity: 0.7,
                transition: "opacity 0.3s ease",
                "&:hover": { opacity: 1 },
              }}
            >
              {project.projectImage && (
                <Box
                  sx={{
                    // backgroundColor: "#fffbe6",
                    // width: "90%",
                    borderRadius: "12px",
                    p: 2,
                    display: "inline-flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Box
                    component="img"
                    src={project.projectImage}
                    alt={project.projectName}
                    sx={{
                      maxWidth: "100%",
                      maxHeight: "250px",
                      borderRadius: "8px",
                    }}
                  />
                </Box>
              )}
              <Typography variant="h4" sx={{ fontWeight: "bold", mt: 2 }}>
                {project.projectName}
              </Typography>
              <Typography variant="subtitle1" sx={{ mb: 2 }}>
                {project.projectDescription}
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
                {project.projectGitLink && (
                  <Button
                    variant="contained"
                    sx={{ backgroundColor: "#fffbe6", color: "black" }}
                    href={project.projectGitLink}
                    target="_blank"
                  >
                    GitHub
                  </Button>
                )}
                {project.projectWebLink && (
                  <Button
                    variant="contained"
                    sx={{ backgroundColor: "#fffbe6", color: "black" }}
                    href={project.projectWebLink}
                    target="_blank"
                  >
                    Live Demo
                  </Button>
                )}
              </Box>
            </Paper>
          ))
        ) : (
          <Typography variant="h6" align="center">
            No Project Data Available.
          </Typography>
        )}
      </Box>

      <IconButton
        onClick={scrollLeft}
        sx={{
          position: "absolute",
          left: 0,
          m: "auto",
          height: "60vh",
          width: "50px",
          backgroundColor: "rgba(255,255,255,0.3)",
          backdropFilter: "blur(5px)",
          borderRadius: 2,
          zIndex: 2,
          "&:hover": { backgroundColor: "rgba(255,255,255,0.5)" },
        }}
      >
        <ArrowBackIosNewIcon sx={{ color: "#333" }} />
      </IconButton>
      <IconButton
        onClick={scrollRight}
        sx={{
          position: "absolute",
          right: 0,
          m: "auto",
          height: "60vh",
          width: "50px",
          backgroundColor: "rgba(255,255,255,0.3)",
          backdropFilter: "blur(5px)",
          borderRadius: 2,
          zIndex: 2,
          "&:hover": { backgroundColor: "rgba(255,255,255,0.5)" },
        }}
      >
        <ArrowForwardIosIcon sx={{ color: "#333" }} />
      </IconButton>
    </Box>
  );
}
