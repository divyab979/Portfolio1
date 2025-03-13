"use client";
import React, { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  Container,
  Box,
  IconButton,
  Typography,
} from "@mui/material";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import EmailIcon from "@mui/icons-material/Email";

export default function Navbar() {
  const [scrollActive, setScrollActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollActive(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleContactClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "rgb(255,194,188)",
        boxShadow: scrollActive ? "0px 4px 20px rgba(0,0,0,0.3)" : "none",
        transition: "box-shadow 0.3s ease",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* Left Section: Social Icons */}
          <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
            <motion.div
              initial={{ x: -100, opacity: 0, scale: 0.8 }}
              animate={{ x: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              <SocialIcon
                url="https://www.linkedin.com/in/diviya-bhatia-88027920b/"
                fgColor="gray"
                bgColor="transparent"
                style={{ height: 40, width: 40 }}
              />
            </motion.div>
            <motion.div
              initial={{ x: -100, opacity: 0, scale: 0.8 }}
              animate={{ x: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <SocialIcon
                url="https://github.com/divyab979"
                fgColor="gray"
                bgColor="transparent"
                style={{ height: 40, width: 40 }}
              />
            </motion.div>
          </Box>

          {/* Right Section: Contact Me (clickable) */}
          <Box
            onClick={handleContactClick}
            sx={{
              display: "flex",
              gap: 1,
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <motion.div
              initial={{ x: 100, opacity: 0, scale: 0.8 }}
              animate={{ x: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              <IconButton color="inherit">
                <EmailIcon sx={{ color: "gray" }} />
              </IconButton>
            </motion.div>
            <motion.div
              initial={{ x: 100, opacity: 0, scale: 0.8 }}
              animate={{ x: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <Typography
                variant="body1"
                sx={{
                  color: "gray",
                  textTransform: "uppercase",
                  display: { xs: "none", md: "block" },
                }}
              >
                Contact Me
              </Typography>
            </motion.div>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
