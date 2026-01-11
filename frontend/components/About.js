"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import Link from "next/link";
import { useEffect, useState } from "react";
import { LoaderCircle } from "lucide-react";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});


// Parent container variant with stagger
const containerVariant = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // delay between children
    },
  },
  exit: { opacity: 0 },
};

// Child fall effect
const fallVariant = {
  hidden: { opacity: 0, y: -60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 60, damping: 12 },
  },
  exit: { opacity: 0, y: 60 },
};

export default function AboutPage() {
  const [aboutData, setaboutData] = useState(null)



  return (
    <div
      className={`${montserrat.className} flex flex-col md:flex-row items-center justify-center md:justify-between px-6 sm:px-10 py-16 gap-10 bg-gray-900`}
    >
      {/* Image Section */}
      <motion.div
        className="w-full md:w-1/2 flex justify-center"
        variants={fallVariant}
        initial="hidden"
        whileInView="show"
        exit="exit"
        viewport={{ once: false, amount: 0.3 }}
      >
        <motion.div
          className="relative w-70 h-70 sm:w-[350px] sm:h-[350px] md:w-[430px] md:h-[400px]"
          animate={{ y: [0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        >
          {/* Glow */}
          <motion.div
            className="absolute inset-0 rounded-full bg-gradient-to-r from-[#09162b] to-[#12041f] blur-3xl opacity-40"
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          />

        
                  {/* Background Image */}
                  <Image
                    src="/black-2.jpg"
                    alt=""
                    fill
                    className="relative shadow-lg object-cover rounded-full "
                  />
        
                  {/* Foreground Image */}
                  <Image
                    src="/imgs/favicon.JPG"
                    alt="pic"
                    fill
                    className="relative object-scale-down rounded-full mt-[2rem]"
                  />
        </motion.div>
      </motion.div>

      {/* Text Section with stagger */}
      <motion.div
        className="w-full md:w-1/2 flex flex-col justify-center px-4 md:px-8"
        variants={containerVariant}
        initial="hidden"
        whileInView="show"
        exit="exit"
        viewport={{ once: false, amount: 0.3 }}
      >
        <motion.span
          className="text-4xl font-bold mb-6n text-white"
          style={{ fontVariant: "small-caps" }}
          variants={fallVariant}
        >
          About M3
        </motion.span>

        <motion.p
          className="text-sm text-gray-100 sm:text-base leading-relaxed"
          variants={fallVariant}
        >
         The journey hasn't been easy and is not...  Yet i keep pushing Foward ! Beyond coding, I’m driven by a vision — to build digital systems that empower people and simplify the way we live and work.I believe technology should help make the world a better version of it self positively — intuitive, intelligent, and impactful.Every line of code I write is a step toward that future
        </motion.p>

        <motion.span className="mt-6" variants={fallVariant}>
          <Link
            href="/Ex_pages/fContact"
            className="text-green-300 hover:underline"
          >
            Contact Me
          </Link>
        </motion.span>
      </motion.div>
    </div>
  );
}
