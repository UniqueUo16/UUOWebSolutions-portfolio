"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import Typewriter from "typewriter-effect";
import { SiX, SiLinkedin, SiWhatsapp, SiMinutemailer } from "react-icons/si";
import { Linkedin } from "lucide-react";
import Link from "next/link";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const iconsMap = {
  linkedin: <SiLinkedin />,
  whatsapp: <SiWhatsapp />,
  x: <SiX />,
  minutemailer: <SiMinutemailer />
};

const social_links = [
  { icon: "linkedin", href: "https://www.linkedin.com/in/unique-uo-19b570341" },
  { icon: "whatsapp", href: "/Ex_pages/Watsapp" },
  { icon: "x", href: "https://www.tiktok.com/@uuo.websolutions?_r=1&_t=ZS-92xnoJE0qeI" },
  { icon: "minutemailer", href: "/Ex_pages/telegram" }
];

export default function Hero() {
  const [dark, setDark] = useState(false);

  return (
    <motion.section  
      initial={{ x: "-100vw", opacity: 0 }} 
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 60, damping: 20 }}
      className={`
        ${montserrat.className} 
        flex flex-col-reverse md:flex-row items-center justify-between 
        px-6 sm:px-10 md:px-20 py-27 sm:py-20 
        gap-10 md:gap-16 
        w-full max-w-7xl mx-auto
        transition-colors duration-500
        ${dark ? "bg-black text-white" : "bg-white text-black"}
      `}
    >
      {/* Dark Mode Toggle */}
      <span className="absolute top-6 right-4">
        <button
          onClick={() => setDark(!dark)}
          className="px-3 py-2 rounded-md bg-gray-200 dark:bg-gray-800"
        >
          {dark ? "🔦" : "🌙"}
        </button>
      </span>

      {/* Left Section */}
      <motion.div
        className="flex-1 text-center md:text-left"
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.2 } },
        }}
      >
        <motion.p
          className="text-lg sm:text-2xl font-medium mt-3 sm:mt-10"
          style={{ fontVariant: "small-caps" }}
          animate={{ y: [0, -8, 0] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
        >
          Unique Uo
        </motion.p>

        <motion.h1
          className="text-3xl sm:text-5xl font-bold leading-tight"
          variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
        >
          🌐 Full Stack Developer
        </motion.h1>

        <motion.div
          className="text-base sm:text-xl min-h-10 font-bold mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <Typewriter
            options={{
              strings: [
                "I create web solutions that help businesses grow online",
                "I build websites and apps that simplify operations and engage customers",
                "I deliver results that actually matter to your business"
              ],
              autoStart: true,
              loop: true,
              delay: 60,
              deleteSpeed: 40,
            }}
          />
        </motion.div>

        <motion.p
          className="mt-6 text-sm sm:text-base leading-relaxed max-w-lg mx-auto md:mx-0"
          variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
        >
The journey hasn’t been easy, and it’s far from over — yet I keep pushing forward! Beyond coding, I’m driven by a vision: to build digital systems that empower people and simplify life and work. I believe technology should make the world a better version of itself, intuitive, intelligent, and impactful. Every line of code I write is a step toward that future.        </motion.p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center md:justify-start">
          <a
            href="https://www.linkedin.com/in/unique-uo-19b570341"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 border border-gray-400 rounded-xl px-5 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
          >
            <Linkedin className="inline-block" /> View My LinkedIn
          </a>

          <Link
            href="/Ex/Teampage/#projects"
            className="border border-gray-500 rounded-xl px-5 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all text-center"
          >
            See My Projects
          </Link>
        </div>

        {/* Social Icons */}
        <div className="flex flex-wrap justify-center md:justify-start gap-4 sm:gap-6 mt-8 sm:mt-10 text-xl sm:text-2xl text-[#341f7e]">
          {social_links.map((item, idx) => (
            <motion.a
              key={idx}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="border rounded-full p-3 sm:p-4 flex items-center justify-center hover:bg-black hover:text-white transition-all"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.15 }}
            >
              {iconsMap[item.icon.toLowerCase()]}
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* Right Section (Images) */}
      <motion.div
        className="flex-1 flex justify-center items-center relative"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Main Image Container */}
        <motion.div
          className="relative w-52 sm:w-64 md:w-72 lg:w-80 aspect-square"
          animate={{ y: [0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        >
          <motion.div
            className="absolute inset-0 rounded-full bg-gradient-to-r from-[#09162b] to-[#12041f] blur-3xl opacity-40"
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          />

          <motion.div
            animate={{ y: [45, 5, 50] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          >
            <Image
              src="/imgs/binary.gif"
              alt="Binary animation"
              width={70}
              height={70}
              className="rounded-full shadow-lg m-1 -mt-2 -ml-23 sm:-mt-4 bg-amber-700"
            />
          </motion.div>

          <Image
            src="/imgs/potrait.PNG"
            alt="Profile portrait"
            fill
            className="object-cover rounded-full shadow-lg"
          />
        </motion.div>

        <motion.div
          animate={{ y: [5, 1805, 2020] }}
          transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
          className="absolute top-0 right-0"
        >
          <Image
            src="/imgs/encrypted.png"
            alt="Encrypted graphic"
            width={70}
            height={70}
            className="m-2 ml-56 sm:ml-0 sm:m-4 mt-30 sm:-mt-20 "
          />
        </motion.div>

        {/* Floating dots */}
        <div className="rounded-full bg-white shadow-lg h-4 w-4 sm:h-5 sm:w-5 absolute right-30 sm:right-80 sm:p-1 bottom-24 text-transparent">
          .
        </div>

        <div className="rounded-full bg-[#341f7e] shadow-lg text-white absolute bottom-6 left-10 p-4 sm:p-6">
          Let's connect
        </div>
      </motion.div>
    </motion.section>
  );
}
