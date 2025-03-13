"use client";
import React from "react";
import { Box, Typography, Button, Stack } from "@mui/material";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "../BackgroundCircles";
import Link from "next/link";

export default function ClientHomeView({ data }) {
  const [text] = useTypewriter({
    words: ["Hi! I am Diviya", "A developer turning ideas into reality."],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <Box
      sx={{
        height: "100vh",
        position: "relative",
        scrollSnapAlign: "start",
        background:
          "linear-gradient(to bottom, rgb(255,194,188) 20%, white 80%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      <BackgroundCircles />
      <Box
        sx={{
          position: "absolute",
          top: "30%",
          transform: "translateY(-50%)",
          zIndex: 50,
          width: "100%",
          pt: 20,
        }}
      >
        <Typography variant="h2" component="h1" sx={{ fontWeight: "bold" }}>
          {text}
          <Cursor cursorColor="rgb(0,61,67)" />
        </Typography>
        <Stack
          direction="row"
          spacing={2}
          sx={{ pt: 5, justifyContent: "center" }}
        >
          <Link href="#about" passHref>
            <Button
              variant="outlined"
              sx={{
                borderColor: "gray",
                textTransform: "uppercase",
                fontSize: "0.8rem",
                color: "gray",
                "&:hover": { borderColor: "black", color: "black" },
              }}
            >
              About
            </Button>
          </Link>
          <Link href="#experience" passHref>
            <Button
              variant="outlined"
              sx={{
                borderColor: "gray",
                textTransform: "uppercase",
                fontSize: "0.8rem",
                color: "gray",
                "&:hover": { borderColor: "black", color: "black" },
              }}
            >
              Experience
            </Button>
          </Link>
          <Link href="#skills" passHref>
            <Button
              variant="outlined"
              sx={{
                borderColor: "gray",
                textTransform: "uppercase",
                fontSize: "0.8rem",
                color: "gray",
                "&:hover": { borderColor: "black", color: "black" },
              }}
            >
              Skills
            </Button>
          </Link>
          <Link href="#projects" passHref>
            <Button
              variant="outlined"
              sx={{
                borderColor: "gray",
                textTransform: "uppercase",
                fontSize: "0.8rem",
                color: "gray",
                "&:hover": { borderColor: "black", color: "black" },
              }}
            >
              Projects
            </Button>
          </Link>
        </Stack>
      </Box>
    </Box>
  );
}
