"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  Cpu,
  ArrowUpRight,
  Briefcase,
  GraduationCap,
  Award,
  Layers,
  CheckCircle2,
  Play,
  Sparkles,
  Mail,
  X,
  ArrowUp,
  Compass,
  Activity,
  Layout,
  FileText,
} from "lucide-react";
import { useState, useEffect } from "react";

// --- ANIMATION VARIANTS ---
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

interface Project {
  id: string;
  title: string;
  tagline: string;
  category: "AI & Vision" | "Full-Stack" | "Data & Urban" | "Core Systems";
  shortDesc: string;
  fullDesc: string;
  highlights: string[];
  tech: string[];
  status: string;
}

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeSkillTab, setActiveSkillTab] = useState<string>("All");

  // Ensure Tailwind CSS is always loaded in browser even if PostCSS config is missing
  useEffect(() => {
    if (!document.getElementById("tailwind-cdn-script")) {
      const script = document.createElement("script");
      script.id = "tailwind-cdn-script";
      script.src = "https://cdn.tailwindcss.com";
      document.head.appendChild(script);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = [
        "about",
        "passions",
        "projects",
        "skills",
        "experience",
        "education",
        "contact",
      ];
      for (const sec of sections) {
        const el = document.getElementById(sec);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 250 && rect.bottom >= 250) {
            setActiveSection(sec);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "About", id: "about" },
    { label: "Focus Areas", id: "passions" },
    { label: "Projects", id: "projects" },
    { label: "Skills", id: "skills" },
    { label: "Experience", id: "experience" },
    { label: "Background", id: "education" },
  ];

  const projects: Project[] = [
    {
      id: "percepta",
      title: "Percepta AI",
      tagline: "Touchless Human-Computer Interaction & Vision OS",
      category: "AI & Vision",
      shortDesc:
        "Real-time computer vision application enabling touchless cursor navigation, hand gesture recognition, and dynamic PC hardware control.",
      fullDesc:
        "Percepta AI redefines human-computer interaction by turning a standard webcam into a high-precision spatial controller. Built with OpenCV, MediaPipe, and YOLOv8 pose estimation, it tracks hand landmarks in real time to control system volume, display brightness, and cursor navigation without physical peripherals.",
      highlights: [
        "Real-time 21-point hand landmark tracking using MediaPipe & OpenCV",
        "Smooth gesture-to-action mapping for OS volume and screen brightness control",
        "Low-latency touchless cursor navigation and click execution",
        "Custom frame-smoothing algorithms to eliminate cursor jitter",
      ],
      tech: ["Python", "OpenCV", "MediaPipe", "YOLOv8", "FastAPI"],
      status: "Active Development",
    },
    {
      id: "aurenza",
      title: "AURENZA Luxury Storefront",
      tagline: "High-End Fashion E-Commerce Ecosystem",
      category: "Full-Stack",
      shortDesc:
        "Custom luxury apparel e-commerce platform featuring curated men's and women's collections, structured pricing, and a signature dark-and-gold UI.",
      fullDesc:
        "As Founder & CEO of AURENZA, I architected our digital storefront from the ground up to reflect modern luxury aesthetics. The platform delivers a seamless shopping experience across curated men's and women's apparel lines with responsive layouts, interactive product filtering, and fluid motion design.",
      highlights: [
        "Bespoke dark-and-gold luxury design system built with Tailwind CSS",
        "Curated multi-category catalog for Men's and Women's luxury apparel",
        "Fluid page transitions and micro-interactions powered by Framer Motion",
        "Optimized asset loading and responsive architecture across all devices",
      ],
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "GitHub Pages"],
      status: "Live Production",
    },
    {
      id: "quantum",
      title: "Quantum Urban Transit",
      tagline: "Real-Time Dhaka Traffic & Route Intelligence",
      category: "Data & Urban",
      shortDesc:
        "Interactive urban mobility platform analyzing live Dhaka traffic corridors, congestion bottlenecks, and optimal transit routing.",
      fullDesc:
        "Designed specifically around Dhaka's complex urban transit corridors, Quantum ingests real-time geospatial data to visualize congestion patterns and compute optimal navigation routes. It combines Streamlit's rapid data interface with Folium interactive maps and routing APIs.",
      highlights: [
        "Interactive geospatial mapping of Dhaka's primary traffic corridors using Folium",
        "Dynamic route optimization powered by OpenRouteService & TomTom APIs",
        "Automated congestion bottleneck analysis using Pandas dataframes",
        "Clean visual dashboard for real-time urban navigation insights",
      ],
      tech: ["Python", "Streamlit", "Folium", "OpenRouteService API", "Pandas"],
      status: "Completed Prototype",
    },
    {
      id: "aegis",
      title: "AegisAI Platform",
      tagline: "Decoupled Full-Stack AI Web Architecture",
      category: "Full-Stack",
      shortDesc:
        "Enterprise-grade web architecture pairing a reactive Next.js TypeScript frontend with a scalable Python AI processing backend.",
      fullDesc:
        "AegisAI was engineered to solve the bottleneck of running heavy AI workflows inside standard web applications. By decoupling the Next.js client interface from an asynchronous Python backend, the platform handles complex inference tasks while maintaining a snappy user interface.",
      highlights: [
        "Decoupled client-server architecture for independent scaling",
        "Type-safe frontend built with Next.js App Router and TypeScript",
        "Asynchronous Python REST API backend for AI model execution",
        "Modular component library with clean state management",
      ],
      tech: ["Next.js", "TypeScript", "Python", "FastAPI", "REST APIs"],
      status: "Completed",
    },
    {
      id: "command-center",
      title: "Student Command Center",
      tagline: "Generative AI Academic & Scholarship Hub",
      category: "AI & Vision",
      shortDesc:
        "Intelligent productivity and academic tracking dashboard powered by the Google Gemini API for personalized study workflows.",
      fullDesc:
        "An all-in-one academic companion that leverages Large Language Models to help students organize coursework, track global scholarship opportunities, and generate structured study plans tailored to their syllabus.",
      highlights: [
        "Context-aware AI assistant powered by the Google Gemini API",
        "Automated study schedule and milestone tracking dashboard",
        "Smart document summarization and research workflow tools",
        "Intuitive dark-mode interface designed for long study sessions",
      ],
      tech: ["Google Gemini API", "React", "Next.js", "Tailwind CSS", "Prompt Engineering"],
      status: "Completed",
    },
    {
      id: "rescuenet",
      title: "RescueNet & HealthPlus",
      tagline: "Emergency Response & Healthcare Coordination",
      category: "Core Systems",
      shortDesc:
        "Java OOP emergency dispatch system and digital healthcare assistance portal built for rapid crisis response in Bangladesh.",
      fullDesc:
        "A dual-project initiative focusing on critical public infrastructure. RescueNet utilizes core Object-Oriented Programming in Java to coordinate emergency responders, while HealthPlus provides a web-based portal connecting patients with urgent medical resources.",
      highlights: [
        "Robust Object-Oriented architecture in Java with clean class hierarchies",
        "Real-time emergency resource allocation and dispatch logic",
        "Accessible healthcare directory and patient assistance workflow",
        "Comprehensive UML system specifications and relational database design",
      ],
      tech: ["Java", "OOP", "MySQL", "System Design", "UML", "Web Technologies"],
      status: "Completed",
    },
    {
      id: "numerical-engine",
      title: "Numerical & Matrix Engine",
      tagline: "Algorithmic Computation & Visualization Suite",
      category: "Core Systems",
      shortDesc:
        "Computational engine implementing Newton-Cotes numerical integration and matrix transformations with automated graph plotting.",
      fullDesc:
        "Built to bridge theoretical mathematics with practical software engineering, this engine executes complex numerical methods, linear algebra matrix operations, and error-bound analysis while rendering high-precision visual plots.",
      highlights: [
        "Implementation of Trapezoidal and Simpson's Newton-Cotes integration rules",
        "Automated step-by-step matrix transformation and linear algebra solvers",
        "High-resolution mathematical plotting using Matplotlib",
        "Comparative error analysis between analytical and numerical results",
      ],
      tech: ["Python", "Matplotlib", "NumPy", "Linear Algebra", "Algorithms"],
      status: "Completed",
    },
    {
      id: "sky2edu-suite",
      title: "Sky2Edu Operations Analysis",
      tagline: "Organizational Strategy & Workflow Consulting",
      category: "Data & Urban",
      shortDesc:
        "Comprehensive operational analysis, workflow optimization framework, and strategic consulting deck for international education services.",
      fullDesc:
        "Developed during my internship with Sky2Edu Study Abroad, this deliverable examined end-to-end organizational workflows, student onboarding pipelines, and digital visibility strategies, culminating in an executive consulting report and presentation.",
      highlights: [
        "End-to-end operational audit and bottleneck identification",
        "Strategic roadmap for digital transformation and CRM workflow efficiency",
        "Executive-grade consulting report and visual presentation architecture",
        "Data-driven recommendations for student conversion optimization",
      ],
      tech: ["Business Analysis", "Strategic Planning", "Process Workflows", "Executive Reporting"],
      status: "Delivered",
    },
  ];

  const passionPillars = [
    {
      icon: <Cpu size={26} className="text-amber-400" />,
      title: "Computer Vision & AI Agents",
      desc: "Passionate about moving AI beyond chatboxes—building spatial gesture interfaces (OpenCV, MediaPipe) and autonomous agentic workflows that interact with the real world.",
      tags: ["Touchless HCI", "Pose Estimation", "AI Agents", "LLM Workflows"],
    },
    {
      icon: <Layout size={26} className="text-blue-400" />,
      title: "Luxury Digital Product Design",
      desc: "As the Founder of AURENZA, I obsess over visual polish, micro-interactions, and high-converting e-commerce interfaces where engineering meets luxury brand storytelling.",
      tags: ["Next.js", "Framer Motion", "Brand Strategy", "UI/UX Polish"],
    },
    {
      icon: <Compass size={26} className="text-emerald-400" />,
      title: "Urban Tech & Smart Mobility",
      desc: "Living in Dhaka inspired me to study localized traffic corridors and transit patterns—building geospatial tools like Quantum to turn urban chaos into actionable route data.",
      tags: ["Geospatial Data", "Route Optimization", "Dhaka Transit", "Folium"],
    },
    {
      icon: <Layers size={26} className="text-purple-400" />,
      title: "System Architecture & Technical Rigor",
      desc: "From UML modeling and relational databases to XeLaTeX technical documentation, I believe great software starts with disciplined architecture and crystal-clear specifications.",
      tags: ["System Design", "UML", "XeLaTeX / Overleaf", "Clean Code"],
    },
  ];

  const skillCategories = [
    {
      category: "AI & Vision",
      items: [
        { name: "OpenCV & Image Processing", level: "Advanced" },
        { name: "MediaPipe Gesture Tracking", level: "Advanced" },
        { name: "YOLOv8 Object & Pose Detection", level: "Proficient" },
        { name: "AI Workflows & Autonomous Agents", level: "Advanced" },
        { name: "Google Gemini API & LLM Integration", level: "Advanced" },
        { name: "Prompt Engineering & AI Strategy", level: "Advanced" },
      ],
    },
    {
      category: "Full-Stack Web",
      items: [
        { name: "Next.js (App Router) & React", level: "Advanced" },
        { name: "TypeScript & Modern JavaScript (ES6+)", level: "Advanced" },
        { name: "Tailwind CSS & Responsive Design", level: "Expert" },
        { name: "Framer Motion & Interactive UI", level: "Advanced" },
        { name: "Python FastAPI & RESTful Backends", level: "Proficient" },
        { name: "E-Commerce Storefront Architecture", level: "Advanced" },
      ],
    },
    {
      category: "Core CS & Data",
      items: [
        { name: "Python, C++, and Java (OOP)", level: "Advanced" },
        { name: "Data Structures & Algorithms", level: "Advanced" },
        { name: "MySQL & Relational Database Design", level: "Proficient" },
        { name: "System Analysis, UML & Software Design", level: "Advanced" },
        { name: "Numerical Methods & Linear Algebra", level: "Advanced" },
        { name: "Streamlit, Pandas, Folium & Matplotlib", level: "Advanced" },
      ],
    },
    {
      category: "Tools & Strategy",
      items: [
        { name: "Git, GitHub & Version Control", level: "Advanced" },
        { name: "LaTeX / XeLaTeX (Overleaf Typography)", level: "Expert" },
        { name: "VS Code & MySQL Workbench", level: "Advanced" },
        { name: "Project Management & Team Leadership", level: "Advanced" },
        { name: "SEO & Digital Brand Visibility", level: "Proficient" },
        { name: "Multimedia & Content Creation", level: "Advanced" },
      ],
    },
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  const filteredSkills =
    activeSkillTab === "All"
      ? skillCategories
      : skillCategories.filter((s) => s.category === activeSkillTab);

  return (
    <>
      {/* Load Tailwind CSS & Inter Font directly so styles never fail in production */}
      <script src="https://cdn.tailwindcss.com" async={false}></script>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
      />

      <main
        style={{ fontFamily: "'Inter', sans-serif", backgroundColor: "#06080e", color: "#e2e8f0" }}
        className="min-h-screen bg-[#06080e] text-slate-200 selection:bg-amber-500 selection:text-black relative overflow-x-hidden"
      >
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          <div className="absolute -top-40 -left-40 w-[550px] h-[550px] bg-amber-500/[0.06] rounded-full blur-[140px]" />
          <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] bg-blue-600/[0.05] rounded-full blur-[140px]" />
          <div className="absolute -bottom-40 left-1/3 w-[600px] h-[600px] bg-amber-600/[0.04] rounded-full blur-[160px]" />
        </div>

        <header
          className={`fixed top-0 w-full z-50 transition-all duration-300 ${
            scrolled
              ? "bg-[#06080e]/85 backdrop-blur-xl border-b border-white/[0.07] py-3.5 shadow-2xl"
              : "bg-transparent py-6"
          }`}
        >
          <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
            <a href="#about" className="flex items-center gap-3.5 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 text-slate-950 font-black flex items-center justify-center text-sm shadow-[0_0_20px_rgba(245,158,11,0.25)] group-hover:scale-105 transition-transform">
                NM
              </div>
              <div>
                <p className="font-bold text-white text-sm tracking-wide group-hover:text-amber-400 transition-colors">
                  Mohammad Nahid Mahmud
                </p>
                <p className="text-[11px] text-slate-400 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  AI & Full-Stack Engineer • Founder
                </p>
              </div>
            </a>

            <nav className="hidden lg:flex items-center gap-1 bg-white/[0.03] border border-white/[0.07] p-1.5 rounded-full backdrop-blur-md">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                      isActive
                        ? "bg-amber-500 text-slate-950 font-semibold shadow-sm"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
            </nav>

            <div className="flex items-center gap-3">
              <a
                href="#contact"
                className="px-5 py-2.5 rounded-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-xs tracking-wide transition-all shadow-[0_0_20px_rgba(245,158,11,0.2)]"
              >
                Let&apos;s Talk
              </a>
            </div>
          </div>
        </header>

        {/* HERO SECTION */}
        <section
          id="about"
          className="relative z-10 max-w-7xl mx-auto px-6 pt-36 pb-24 lg:pt-44 lg:pb-32 flex flex-col lg:flex-row items-center justify-between gap-16 min-h-screen"
        >
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="w-full lg:w-[58%]"
          >
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.08] text-amber-400 text-xs font-medium mb-8"
            >
              <Sparkles size={14} />
              <span>AI & Full-Stack Engineer • Founder & CEO @ AURENZA</span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-6xl lg:text-[68px] font-bold text-white leading-[1.08] tracking-tight mb-6"
            >
              Building intelligent{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-500 to-yellow-600">
                AI systems
              </span>{" "}
              & luxury digital products.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl mb-8 font-normal"
            >
              Hi, I&apos;m <strong className="text-white font-semibold">Mohammad Nahid Mahmud</strong>. Based in Dhaka, I architect touchless computer vision applications, real-time urban data platforms, and high-converting full-stack web experiences. Whether leading my luxury apparel brand{" "}
              <strong className="text-amber-400 font-medium">AURENZA</strong> or engineering complex software systems, I combine deep computer science fundamentals with executive-level visual polish.
            </motion.p>

            <motion.div variants={fadeUp} className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-10 max-w-2xl">
              <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                <p className="text-amber-400 font-bold text-sm">Founder & CEO</p>
                <p className="text-slate-400 text-xs mt-0.5">AURENZA Luxury Apparel</p>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                <p className="text-blue-400 font-bold text-sm">AI & Vision Lab</p>
                <p className="text-slate-400 text-xs mt-0.5">OpenCV, MediaPipe & YOLO</p>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.06] col-span-2 sm:col-span-1">
                <p className="text-emerald-400 font-bold text-sm">Project Lead</p>
                <p className="text-slate-400 text-xs mt-0.5">Full-Cycle System Design</p>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="px-7 py-4 rounded-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm flex items-center gap-2 transition-all shadow-[0_0_25px_rgba(245,158,11,0.25)] hover:-translate-y-0.5"
              >
                Explore My Work <ArrowUpRight size={18} />
              </a>

              <a
                href="#contact"
                className="px-7 py-4 rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] text-white font-semibold text-sm transition-all"
              >
                Get in Touch
              </a>

              <div className="flex items-center gap-2.5 ml-1">
                <a
                  href="https://github.com/nahidmahmud71"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="w-12 h-12 rounded-full bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-slate-300 hover:text-white hover:border-amber-500/50 hover:bg-amber-500/10 transition-all"
                >
                  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/mohammadnahidmahmud/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="w-12 h-12 rounded-full bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-slate-300 hover:text-[#0a66c2] hover:border-[#0a66c2]/50 hover:bg-[#0a66c2]/10 transition-all"
                >
                  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="w-full lg:w-[42%] flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[410px]" style={{ maxWidth: "410px", width: "100%" }}>
              <div className="absolute -inset-3 bg-gradient-to-tr from-amber-500/20 via-amber-400/10 to-blue-500/10 rounded-[2rem] blur-2xl pointer-events-none" />
              <div
                style={{ position: "relative", aspectRatio: "4/5", width: "100%", overflow: "hidden", borderRadius: "2rem" }}
                className="relative aspect-[4/5] w-full rounded-[2rem] overflow-hidden border border-white/15 bg-slate-900 shadow-[0_25px_70px_rgba(0,0,0,0.75)] group"
              >
                <Image
                  src="/profile.jpg"
                  alt="Mohammad Nahid Mahmud"
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-slate-950/75 backdrop-blur-md border border-white/10 flex items-center justify-between">
                  <div>
                    <p className="text-white font-bold text-sm">Mohammad Nahid Mahmud</p>
                    <p className="text-amber-400 text-xs font-medium mt-0.5">
                      Founder @ AURENZA • Software Engineer
                    </p>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-[11px] font-semibold flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    Dhaka
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* PASSIONS */}
        <section id="passions" className="relative z-10 py-28 border-t border-white/[0.06] bg-[#080b12]">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
              className="max-w-2xl mb-16"
            >
              <p className="text-amber-400 text-xs font-bold uppercase tracking-widest mb-3">
                Core Passions & Focus Areas
              </p>
              <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight mb-4">
                Where engineering rigor meets creative vision.
              </h2>
              <p className="text-slate-400 text-base leading-relaxed">
                My work spans four interconnected domains—combining real-time computer vision, luxury brand building, urban mobility analytics, and structured software architecture.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {passionPillars.map((pillar, idx) => (
                <motion.div
                  key={idx}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="p-8 rounded-3xl bg-white/[0.02] border border-white/[0.07] hover:border-amber-500/30 hover:bg-white/[0.035] transition-all group flex flex-col justify-between"
                >
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      {pillar.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-6">
                      {pillar.desc}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-white/[0.04]">
                    {pillar.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs font-medium text-slate-300 bg-white/[0.04] border border-white/[0.06] px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="relative z-10 py-28 border-t border-white/[0.06]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
              <div>
                <p className="text-amber-400 text-xs font-bold uppercase tracking-widest mb-3">
                  Featured Engineering Portfolio
                </p>
                <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
                  Selected Projects & Systems
                </h2>
              </div>

              <div className="flex flex-wrap gap-2">
                {["All", "AI & Vision", "Full-Stack", "Data & Urban", "Core Systems"].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                      selectedCategory === cat
                        ? "bg-amber-500 text-slate-950 shadow-[0_0_20px_rgba(245,158,11,0.3)]"
                        : "bg-white/[0.04] text-slate-400 hover:text-white border border-white/[0.07]"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((proj) => (
                  <motion.div
                    key={proj.id}
                    layout
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.35 }}
                    onClick={() => setSelectedProject(proj)}
                    className="group cursor-pointer rounded-3xl bg-white/[0.02] border border-white/[0.07] hover:border-amber-500/40 p-8 flex flex-col justify-between transition-all hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-4 mb-5">
                        <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold">
                          {proj.category}
                        </span>
                        <span className="text-xs text-slate-400 flex items-center gap-1 group-hover:text-amber-400 transition-colors">
                          Inspect Architecture <ArrowUpRight size={15} />
                        </span>
                      </div>

                      <h3 className="text-2xl font-bold text-white mb-1.5 group-hover:text-amber-400 transition-colors">
                        {proj.title}
                      </h3>
                      <p className="text-xs font-medium text-slate-400 mb-4">{proj.tagline}</p>
                      <p className="text-slate-300/80 text-sm leading-relaxed mb-6">
                        {proj.shortDesc}
                      </p>

                      <div className="space-y-2 mb-6">
                        {proj.highlights.slice(0, 2).map((h, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-slate-400">
                            <CheckCircle2 size={14} className="text-amber-400 shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-5 border-t border-white/[0.06] flex flex-wrap gap-2">
                      {proj.tech.map((t, i) => (
                        <span
                          key={i}
                          className="text-[11px] font-medium text-slate-300 bg-white/[0.04] px-3 py-1 rounded-lg"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>

        {/* MODAL */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            >
              <motion.div
                initial={{ scale: 0.92, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.92, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="w-full max-w-2xl rounded-3xl bg-[#0c101a] border border-white/15 p-6 sm:p-10 shadow-2xl relative max-h-[90vh] overflow-y-auto"
              >
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  <X size={18} />
                </button>

                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full bg-amber-500/15 text-amber-400 text-xs font-semibold">
                    {selectedProject.category}
                  </span>
                  <span className="text-xs text-emerald-400 font-medium">
                    • {selectedProject.status}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                  {selectedProject.title}
                </h3>
                <p className="text-sm text-amber-400 font-medium mb-6">
                  {selectedProject.tagline}
                </p>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
                  {selectedProject.fullDesc}
                </p>

                <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">
                  Key Architectural Highlights
                </h4>
                <ul className="space-y-3 mb-8">
                  {selectedProject.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-slate-300">
                      <CheckCircle2 size={16} className="text-amber-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-3">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-xs font-medium text-amber-300 bg-amber-500/10 border border-amber-500/20 px-3.5 py-1.5 rounded-xl"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* SKILLS */}
        <section id="skills" className="relative z-10 py-28 border-t border-white/[0.06] bg-[#080b12]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
              <div>
                <p className="text-amber-400 text-xs font-bold uppercase tracking-widest mb-3">
                  Technical Capabilities
                </p>
                <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
                  Skills, Stack & Engineering Tools
                </h2>
              </div>

              <div className="flex flex-wrap gap-2">
                {["All", "AI & Vision", "Full-Stack Web", "Core CS & Data", "Tools & Strategy"].map(
                  (tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveSkillTab(tab)}
                      className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                        activeSkillTab === tab
                          ? "bg-white text-slate-950"
                          : "bg-white/[0.04] text-slate-400 hover:text-white border border-white/[0.07]"
                      }`}
                    >
                      {tab}
                    </button>
                  )
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredSkills.map((group) => (
                <motion.div
                  key={group.category}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="p-8 rounded-3xl bg-white/[0.02] border border-white/[0.07]"
                >
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/[0.06]">
                    <h3 className="text-xl font-bold text-white">{group.category}</h3>
                    <span className="text-xs text-amber-400 font-medium">
                      {group.items.length} Core Competencies
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {group.items.map((skill, i) => (
                      <div
                        key={i}
                        className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:border-amber-500/30 transition-colors flex flex-col justify-between"
                      >
                        <p className="text-sm font-semibold text-white mb-1">{skill.name}</p>
                        <span className="text-[11px] text-amber-400/90 font-medium">
                          {skill.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="mt-8 p-8 rounded-3xl bg-gradient-to-r from-amber-500/10 via-blue-500/5 to-transparent border border-amber-500/20 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6"
            >
              <div className="flex items-start gap-4">
                <div className="p-3.5 rounded-2xl bg-amber-500/20 text-amber-400 shrink-0">
                  <FileText size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">
                    Precision Documentation & LaTeX Typesetting
                  </h4>
                  <p className="text-slate-400 text-sm leading-relaxed max-w-3xl">
                    Every complex engineering system I build is backed by formal UML specifications, system architecture diagrams, and publication-grade technical reports compiled using{" "}
                    <strong className="text-white">XeLaTeX in Overleaf</strong>.
                  </p>
                </div>
              </div>
              <span className="px-4 py-2 rounded-full bg-white/[0.06] border border-white/10 text-xs font-semibold text-amber-300 shrink-0">
                Clean Architecture Standard
              </span>
            </motion.div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="relative z-10 py-28 border-t border-white/[0.06]">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="max-w-2xl mb-16"
            >
              <p className="text-amber-400 text-xs font-bold uppercase tracking-widest mb-3">
                Leadership & Industry Roles
              </p>
              <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
                Executive & Engineering Experience
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="p-8 rounded-3xl bg-white/[0.02] border border-white/[0.07] hover:border-amber-500/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3.5">
                      <div className="w-12 h-12 rounded-2xl bg-amber-500/15 text-amber-400 flex items-center justify-center">
                        <Briefcase size={22} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">CEO & Founder</h3>
                        <p className="text-amber-400 text-xs font-semibold">AURENZA Luxury Apparel</p>
                      </div>
                    </div>
                    <span className="text-xs text-slate-400 bg-white/[0.04] px-3 py-1 rounded-full">
                      Founder
                    </span>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    Founded and lead AURENZA, directing both brand identity and full-stack e-commerce engineering. Designed curated men&apos;s and women&apos;s luxury collections with a responsive storefront architecture.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/[0.04]">
                  {["Brand Direction", "Full-Stack E-Commerce", "UI/UX Architecture", "Product Strategy"].map(
                    (t, i) => (
                      <span
                        key={i}
                        className="text-[11px] text-slate-300 bg-white/[0.04] px-3 py-1 rounded-lg"
                      >
                        {t}
                      </span>
                    )
                  )}
                </div>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="p-8 rounded-3xl bg-white/[0.02] border border-white/[0.07] hover:border-blue-500/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3.5">
                      <div className="w-12 h-12 rounded-2xl bg-blue-500/15 text-blue-400 flex items-center justify-center">
                        <Activity size={22} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">Operations & Strategy Intern</h3>
                        <p className="text-blue-400 text-xs font-semibold">Sky2Edu Study Abroad</p>
                      </div>
                    </div>
                    <span className="text-xs text-slate-400 bg-white/[0.04] px-3 py-1 rounded-full">
                      Internship
                    </span>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    Conducted an in-depth organizational operations analysis, producing a comprehensive final report and consulting-style executive presentation with strategic workflow recommendations.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/[0.04]">
                  {["Operations Analysis", "Strategic Consulting", "Workflow Optimization", "Executive Reporting"].map(
                    (t, i) => (
                      <span
                        key={i}
                        className="text-[11px] text-slate-300 bg-white/[0.04] px-3 py-1 rounded-lg"
                      >
                        {t}
                      </span>
                    )
                  )}
                </div>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="p-8 rounded-3xl bg-white/[0.02] border border-white/[0.07] hover:border-emerald-500/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3.5">
                      <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 text-emerald-400 flex items-center justify-center">
                        <Layers size={22} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">Project Manager & Report Lead</h3>
                        <p className="text-emerald-400 text-xs font-semibold">Team Andromeda</p>
                      </div>
                    </div>
                    <span className="text-xs text-slate-400 bg-white/[0.04] px-3 py-1 rounded-full">
                      Team Lead
                    </span>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    Led peer engineering teams across complex academic software deliverables, overseeing system architecture, UML modeling, and LaTeX technical documentation for Information Systems Design.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/[0.04]">
                  {["Project Management", "System Architecture", "UML Diagrams", "XeLaTeX Reports"].map(
                    (t, i) => (
                      <span
                        key={i}
                        className="text-[11px] text-slate-300 bg-white/[0.04] px-3 py-1 rounded-lg"
                      >
                        {t}
                      </span>
                    )
                  )}
                </div>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="p-8 rounded-3xl bg-white/[0.02] border border-white/[0.07] hover:border-red-500/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3.5">
                      <div className="w-12 h-12 rounded-2xl bg-red-500/15 text-red-400 flex items-center justify-center">
                        <Play size={22} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">Content Creator & Channel Manager</h3>
                        <p className="text-red-400 text-xs font-semibold">Future World (YouTube)</p>
                      </div>
                    </div>
                    <span className="text-xs text-slate-400 bg-white/[0.04] px-3 py-1 rounded-full">
                      Digital Media
                    </span>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    Produce and manage multimedia content exploring emerging technologies, AI innovations, and digital storytelling—combining video production with audience growth and SEO strategy.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/[0.04]">
                  {["Tech Storytelling", "Video Production", "YouTube SEO", "Digital Branding"].map(
                    (t, i) => (
                      <span
                        key={i}
                        className="text-[11px] text-slate-300 bg-white/[0.04] px-3 py-1 rounded-lg"
                      >
                        {t}
                      </span>
                    )
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* EDUCATION */}
        <section id="education" className="relative z-10 py-28 border-t border-white/[0.06] bg-[#080b12]">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-white/[0.02] border border-white/[0.07] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3.5 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-amber-500/15 text-amber-400 flex items-center justify-center">
                    <GraduationCap size={26} />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-amber-400">
                      Academic Foundation
                    </p>
                    <h3 className="text-2xl font-bold text-white">
                      B.Sc. in Computer Science & Engineering
                    </h3>
                  </div>
                </div>

                <p className="text-slate-300 font-medium text-sm mb-2">
                  Southeast University (SEU) • Dhaka, Bangladesh
                </p>
                <p className="text-slate-400 text-sm leading-relaxed mb-8">
                  Focused on advanced algorithmic problem-solving, software system architecture, computer networks, and applied artificial intelligence.
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">
                  Core Engineering Domains Studied
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Data Structures & Algorithms",
                    "Information Systems Design",
                    "Object-Oriented Programming (Java)",
                    "Computer Architecture",
                    "Digital Logic Design",
                    "Numerical Methods",
                    "Linear Algebra & Matrices",
                    "Computer Networks",
                    "Data Communication",
                    "Statistics & Probability",
                    "Engineering Ethics",
                  ].map((course, i) => (
                    <span
                      key={i}
                      className="text-xs text-slate-300 bg-white/[0.04] border border-white/[0.06] px-3.5 py-1.5 rounded-xl"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="lg:col-span-5 flex flex-col justify-between gap-4"
            >
              <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/[0.07] h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <Award className="text-amber-400" size={24} />
                    <h3 className="text-xl font-bold text-white">Professional Certifications</h3>
                  </div>

                  <div className="space-y-4">
                    {[
                      {
                        title: "AI Workflows & Agents",
                        issuer: "Grameenphone Academy",
                        focus: "Autonomous AI pipelines & agentic orchestration",
                      },
                      {
                        title: "Think AI Certification",
                        issuer: "Grameenphone Academy",
                        focus: "Applied AI strategy & modern machine learning foundations",
                      },
                      {
                        title: "Networking & Technical Coursework",
                        issuer: "Cisco Networking Academy",
                        focus: "Network protocols, routing architecture & security",
                      },
                      {
                        title: "Software & Career Specializations",
                        issuer: "Coursera & LinkedIn Learning",
                        focus: "Full-stack development & professional engineering workflows",
                      },
                    ].map((cert, i) => (
                      <div
                        key={i}
                        className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:border-amber-500/30 transition-colors"
                      >
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="text-sm font-bold text-white">{cert.title}</h4>
                          <span className="text-[11px] text-amber-400 font-medium">{cert.issuer}</span>
                        </div>
                        <p className="text-xs text-slate-400">{cert.focus}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FOOTER */}
        <footer id="contact" className="relative z-10 pt-28 pb-14 border-t border-white/[0.08] bg-[#04060a]">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="p-10 sm:p-16 rounded-[2.5rem] bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/[0.08] mb-16"
            >
              <span className="px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold inline-block mb-6">
                Available for Engineering Roles & Collaborations
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight mb-6">
                Let&apos;s build something extraordinary together.
              </h2>
              <p className="text-slate-400 text-base max-w-xl mx-auto mb-10 leading-relaxed">
                Whether you&apos;re looking to build an AI-powered product, scale a modern web platform, or collaborate on research and strategy—feel free to reach out.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4">
                <a
                  href="mailto:nahidmahmud826@gmail.com"
                  className="px-8 py-4 rounded-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm flex items-center gap-2.5 transition-all shadow-[0_0_30px_rgba(245,158,11,0.25)]"
                >
                  <Mail size={18} /> nahidmahmud826@gmail.com
                </a>
                <a
                  href="https://www.linkedin.com/in/mohammadnahidmahmud/"
                  target="_blank"
                  rel="noreferrer"
                  className="px-7 py-4 rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-white font-semibold text-sm transition-all"
                >
                  Connect on LinkedIn
                </a>
                <a
                  href="https://github.com/nahidmahmud71"
                  target="_blank"
                  rel="noreferrer"
                  className="px-7 py-4 rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-white font-semibold text-sm transition-all"
                >
                  GitHub Profile
                </a>
              </div>
            </motion.div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/[0.06] text-xs text-slate-500">
              <p>© 2026 Mohammad Nahid Mahmud. Crafted in Dhaka, Bangladesh.</p>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="flex items-center gap-2 text-slate-400 hover:text-amber-400 transition-colors cursor-pointer font-medium"
              >
                Back to top <ArrowUp size={14} />
              </button>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}