import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Code,
  Briefcase,
  Server,
  Database,
  Globe,
  ChevronRight,
  Github,
} from "lucide-react";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 md:py-28">
        <div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight text-center">
            CREATING THE FUTURE
            <br />
          </h1>
        </div>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                Hi, I'm <span className="text-blue-600">Akshar Tyagi</span>
                <br />
                <span className="text-slate-600">Student at ISR</span>
              </h1>
              <p className="text-lg text-slate-600 mb-8 max-w-lg">
                I am a student at a prestigious international IB school with a
                strong drive to make a difference in the world. Specifically, I
                am learning more about coding, software development and
                mathematics.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/projects"
                  className="inline-flex h-12 items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex h-12 items-center justify-center rounded-md border border-slate-300 bg-white px-6 py-3 text-base font-medium text-slate-700 shadow-sm hover:bg-slate-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Contact Me
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
                <Image
                  src="/images/Pics/Akshar_Pic.jpeg"
                  alt="Akshar Tyagi"
                  width={400}
                  height={400}
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="section-heading text-3xl font-bold text-slate-900">
              About Me
            </h2>
            <p className="text-lg text-slate-600 mb-6">
              Hello. I am Akshar Tyagi, a student at one of the world's top IB
              schools. This portfolio highlights my projects, skills,
              accomplishments, and character. On this webpage, you can find all
              my articles about leading cutting-edge breakthroughs in fields
              such AI, Economics, or Engineering.{" "}
            </p>
            <p className="text-lg text-slate-600 mb-8">
              I am a student at ISR(International School on the Rhine) and I am
              currently in the 11th grade. I am studying the IB Diploma and I am
              very passionate about coding and software development. I have
              always been interested in technology and I am always looking for
              new ways to learn and improve my skills. I am also very interested
              in mathematics and I am always looking for new ways to learn and
              improve my skills.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  Education
                </h3>
                <ul className="space-y-3">
                  <li className="flex">
                    <ChevronRight className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">IB Diploma</p>
                      <p className="text-sm text-slate-500">
                        ISR(International school on the Rhine), 2024-2026
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  Exploration
                </h3>
                <ul className="space-y-3">
                  <li className="flex">
                    <ChevronRight className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">CS50 courses</p>
                      <p className="text-sm text-slate-500">CS50 Courses</p>
                    </div>
                  </li>
                  <li className="flex">
                    <ChevronRight className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Open Days</p>
                      <p className="text-sm text-slate-500">
                        Open Days at different universities
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-slate-900 mb-4">
              My Skills
            </h3>
            <div className="flex flex-wrap gap-2 mb-8">
              <span className="skill-badge">JavaScript</span>
              <span className="skill-badge">TypeScript</span>
              <span className="skill-badge">React</span>
              <span className="skill-badge">Next.js</span>
              <span className="skill-badge">Node.js</span>
              <span className="skill-badge">Express</span>
              <span className="skill-badge">MongoDB</span>
              <span className="skill-badge">PostgreSQL</span>
              <span className="skill-badge">HTML/CSS</span>
              <span className="skill-badge">Tailwind CSS</span>
              <span className="skill-badge">Git</span>
              <span className="skill-badge">Docker</span>
            </div>

            <Link
              href="/about"
              className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center group"
            >
              Learn more about me
              <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-12">
            <div>
              <h2 className="section-heading text-3xl font-bold text-slate-900">
                Featured Projects
              </h2>
              <p className="text-slate-600">Some of my recent Projects</p>
            </div>
            <Link
              href="/projects"
              className="mt-4 md:mt-0 text-blue-600 hover:text-blue-800 font-medium inline-flex items-center group"
            >
              View all projects
              <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Card 1 */}
            <article className="project-card rounded-xl overflow-hidden border border-slate-200 shadow-sm bg-white flex flex-col h-full">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="E-commerce Platform"
                  width={600}
                  height={400}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  <Link
                    href="/projects/ecommerce-platform"
                    className="hover:text-blue-600 transition-colors"
                  >
                    E-commerce Platform
                  </Link>
                </h3>
                <p className="text-slate-600 mb-4 flex-grow">
                  A full-featured online store with product management, cart
                  functionality, and payment processing.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                    React
                  </span>
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                    Node.js
                  </span>
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                    MongoDB
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <Link
                    href="/projects/ecommerce-platform"
                    className="text-blue-600 hover:text-blue-800 font-medium text-sm inline-flex items-center"
                  >
                    View Details
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                  <Link
                    href="https://github.com"
                    className="text-slate-600 hover:text-slate-900 font-medium text-sm inline-flex items-center"
                  >
                    <Github className="mr-1 h-3 w-3" />
                    Code
                  </Link>
                  <Link
                    href="#"
                    className="text-slate-600 hover:text-slate-900 font-medium text-sm inline-flex items-center"
                  >
                    <Globe className="mr-1 h-3 w-3" />
                    Demo
                  </Link>
                </div>
              </div>
            </article>

            {/* Project Card 2 */}
            <article className="project-card rounded-xl overflow-hidden border border-slate-200 shadow-sm bg-white flex flex-col h-full">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Task Management App"
                  width={600}
                  height={400}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  <Link
                    href="/projects/task-management"
                    className="hover:text-blue-600 transition-colors"
                  >
                    Task Management App
                  </Link>
                </h3>
                <p className="text-slate-600 mb-4 flex-grow">
                  A productivity application for managing tasks, projects, and
                  team collaboration.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                    Next.js
                  </span>
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                    TypeScript
                  </span>
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                    PostgreSQL
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <Link
                    href="/projects/task-management"
                    className="text-blue-600 hover:text-blue-800 font-medium text-sm inline-flex items-center"
                  >
                    View Details
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                  <Link
                    href="https://github.com"
                    className="text-slate-600 hover:text-slate-900 font-medium text-sm inline-flex items-center"
                  >
                    <Github className="mr-1 h-3 w-3" />
                    Code
                  </Link>
                  <Link
                    href="#"
                    className="text-slate-600 hover:text-slate-900 font-medium text-sm inline-flex items-center"
                  >
                    <Globe className="mr-1 h-3 w-3" />
                    Demo
                  </Link>
                </div>
              </div>
            </article>

            {/* Project Card 3 */}
            <article className="project-card rounded-xl overflow-hidden border border-slate-200 shadow-sm bg-white flex flex-col h-full">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Weather Dashboard"
                  width={600}
                  height={400}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  <Link
                    href="/projects/weather-dashboard"
                    className="hover:text-blue-600 transition-colors"
                  >
                    Weather Dashboard
                  </Link>
                </h3>
                <p className="text-slate-600 mb-4 flex-grow">
                  A real-time weather application with forecasts, maps, and
                  location-based services.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                    React
                  </span>
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                    API Integration
                  </span>
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                    Tailwind CSS
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <Link
                    href="/projects/weather-dashboard"
                    className="text-blue-600 hover:text-blue-800 font-medium text-sm inline-flex items-center"
                  >
                    View Details
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                  <Link
                    href="https://github.com"
                    className="text-slate-600 hover:text-slate-900 font-medium text-sm inline-flex items-center"
                  >
                    <Github className="mr-1 h-3 w-3" />
                    Code
                  </Link>
                  <Link
                    href="#"
                    className="text-slate-600 hover:text-slate-900 font-medium text-sm inline-flex items-center"
                  >
                    <Globe className="mr-1 h-3 w-3" />
                    Demo
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
