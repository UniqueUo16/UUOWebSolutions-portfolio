"use client";

import { useEffect, useState } from "react";
import { Montserrat } from "next/font/google";
import { motion } from "framer-motion";
import {
  Code2Icon,
  BrainIcon,
  CheckCircle2,
  Lightbulb,
} from "lucide-react";
import {
  SiNextdotjs,
  SiReact,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiPython,
  SiDotnet,
  SiGit,
  SiFigma,
  SiMysql,
} from "react-icons/si";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

/* ------------------ Circular Skill ------------------ */

const radius = 50;
const stroke = 8;
const normalizedRadius = radius - stroke * 2;
const circumference = normalizedRadius * 2 * Math.PI;

function CircularSkill({ skill, percentage, color, icon }) {
  const [offset, setOffset] = useState(circumference);

  useEffect(() => {
    setOffset(circumference - (percentage / 100) * circumference);
  }, [percentage]);

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative">
        <svg height={radius * 2} width={radius * 2}>
          <circle
            stroke="#e5e7eb"
            fill="transparent"
            strokeWidth={stroke}
            r={normalizedRadius}
            cx={radius}
            cy={radius}
          />
          <motion.circle
            stroke={color}
            fill="transparent"
            strokeWidth={stroke}
            r={normalizedRadius}
            cx={radius}
            cy={radius}
            strokeDasharray={`${circumference} ${circumference}`}
            strokeDashoffset={offset}
            strokeLinecap="round"
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: offset }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
        </svg>

        <div className="absolute inset-0 flex items-center justify-center text-xl">
          {icon}
        </div>
      </div>

      <p className="font-semibold text-sm">{skill}</p>
      <span className="text-xs text-gray-400">{percentage}%</span>
    </div>
  );
}

/* ------------------ Main Component ------------------ */

export default function Skills() {
  const technicalSkills = [
    { skill: "Technical Skills", percentage: 93, color: "#f87171", icon: <Code2Icon /> },
    { skill: "Critical Thinking", percentage: 96, color: "#60a5fa", icon: <BrainIcon /> },
    { skill: "Problem Solving", percentage: 94, color: "#facc15", icon: <Lightbulb /> },
    { skill: "Results Driven", percentage: 100, color: "#34d399", icon: <CheckCircle2 /> },
  ];

  const professionalSkills = [
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "React.js", icon: <SiReact /> },
    { name: "HTML5", icon: <SiHtml5 /> },
    { name: "CSS3", icon: <SiCss3 /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "Node.js", icon: <SiNodedotjs /> },
    { name: "Python", icon: <SiPython /> },
    { name: "C# / .NET", icon: <SiDotnet /> },
    { name: "SQL / Databases", icon: <SiMysql /> },
    { name: "Git & GitHub", icon: <SiGit /> },
    { name: "UI/UX (Figma)", icon: <SiFigma /> },
  ];

  return (
    <section className={`${montserrat.className} py-16 px-6 sm:px-10 max-w-7xl mx-auto`}>
      <h2 className="text-3xl font-bold mb-12 text-center" style={{ fontVariant: "small-caps" }}>
        My Skills
      </h2>

      <div className="flex flex-col lg:flex-row gap-20 justify-center">
        {/* Technical */}
        <div className="text-center">
          <h3 className="flex items-center justify-center gap-2 text-xl font-semibold mb-8">
            Technical Strength <Code2Icon className="text-violet-500" />
          </h3>

          <div className="flex flex-wrap gap-8 justify-center">
            {technicalSkills.map((s, idx) => (
              <CircularSkill key={idx} {...s} />
            ))}
          </div>
        </div>

        {/* Professional */}
        <div>
          <h3 className="flex items-center justify-center gap-2 text-xl font-semibold mb-8">
            Professional Stack <Code2Icon className="text-emerald-500" />
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            {professionalSkills.map((s, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3 border rounded-xl px-4 py-3 shadow-sm hover:shadow-md transition"
              >
                <span className="text-xl text-violet-600">{s.icon}</span>
                <span className="font-medium text-sm">{s.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
