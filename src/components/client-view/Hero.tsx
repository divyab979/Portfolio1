"use client";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Link from "next/link";

export default function Hero() {
  const [text, count] = useTypewriter({
    words: ["Hi! I am Diviya", "A developer turning ideas into reality."],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div
      className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden relative snap-start"
      style={{
        background:
          "linear-gradient(to bottom, rgb(255,194,188) 20%, white 80%)",
      }}
    >
      <BackgroundCircles />
      {/* Move the text higher */}
      <div className="absolute top-[30%] transform -translate-y-1/2 z-50">
        <h1 className="text-2xl md:text-4xl font-bold relative">
          <span>{text}</span>
          <Cursor cursorColor="rgb(0,61,67)" />
        </h1>
        <div className="pt-5 space-x-6">
          <Link href="#about">
            <button className="px-6 py-2 border border-gray-500 rounded-2xl uppercase text-sm tracking widest text-gray-500 transition-all hover:text-black hover:border-black">
              About
            </button>
          </Link>
          <Link href="#experience">
            <button className="px-6 py-2 border border-gray-500 rounded-2xl uppercase text-sm tracking widest text-gray-500 transition-all hover:text-black hover:border-black">
              Experience
            </button>
          </Link>
          <Link href="#skills">
            <button className="px-6 py-2 border border-gray-500 rounded-2xl uppercase text-sm tracking widest text-gray-500 transition-all hover:text-black hover:border-black">
              Skills
            </button>
          </Link>
          <Link href="#projects">
            <button className="px-6 py-2 border border-gray-500 rounded-2xl uppercase text-sm tracking widest text-gray-500 transition-all hover:text-black hover:border-black">
              Projects
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
