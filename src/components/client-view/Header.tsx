import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
type Props = {};

export default function Header({}: Props) {
  return (
    <header className="sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-20xl:items-center p-5">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center "
      >
        <SocialIcon
          url="https://www.linkedin.com/in/diviya-bhatia-88027920b/"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://github.com/divyab979"
          fgColor="gray"
          bgColor="transparent"
        />
      </motion.div>
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center text-gray-300 cursor-pointer"
      >
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="gray"
          bgColor="transparent"
        />
        <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
          Contact Me
        </p>
      </motion.div>
    </header>
  );
}
