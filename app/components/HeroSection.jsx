"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="lg:py-16 ">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-8 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-600">
              Hello, I'm{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Zoran Milosevic",
                1000,
                "Full-Stack Engineer",
                1000,
                "Web Developer",
                1000,
                "Python Engineer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base mb-6 sm:text-lg lg:text-xl">
            I'm a Software Engineer skilled in software architecture,
            microservices, automation, asynchronous programming, testing and
            deployment.
          </p>
          <div>
            <Link href="https://portfolio-zoranmilosevic-b2d59.web.app/">
              <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-green-500 to-green-500 hover:bg-slate-200 text-white hover:cursor-pointer">
                Hire Me
              </button>

              <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-blue-500 to-green-500 hover:bg-slate-800 text-white mt-3">
                <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                  Download CV
                </span>
              </button>
            </Link>
          </div>
        </div>
        <div className="col-span-4 place-self-center mt-4 lg:mt-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="rounded-full bg-gradient-to-r from-blue-500 via-green-400 to-green-500 w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative overflow-hidden"
          >
            <Image
              src="/images/zoran.PNG"
              alt="Profile picture"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={500}
              height={500}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
