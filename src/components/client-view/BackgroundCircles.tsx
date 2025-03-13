import React from "react";
import { motion } from "framer-motion";

type Props = {};

function BackgroundCircles({}: Props) {
  return (
    <div className="relative flex justify-center items-center w-full h-full">
      <div className="absolute mt-26 border border-white rounded-full h-[200px] w-[200px] animate-ping" />
      <div className="absolute mt-26 border border-[#333333] rounded-full h-[300px] w-[300px] opacity-10" />
      <div className="absolute mt-26 border border-[#333333] rounded-full h-[500px] w-[500px] opacity-10" />
      <div className="absolute mt-26 border border-white rounded-full h-[650px] w-[650px] animate-ping" />
      <div className="absolute  mt-26 border border-white rounded-full h-[800px] w-[800px] opacity-10" />
      {/* Add other circles here similarly if needed */}
    </div>
  );
}

export default BackgroundCircles;
