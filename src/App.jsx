import React from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImageCardSlider from "./slide.jsx"
import Locationx from "./Location.jsx"
import ServiceSlide from "./service.jsx";
// import myphoto from './public/project.gpg.jpg';
// import newbuilding from './public/newbuilding.jpg'

// Single-file React component for a Construction / Builder website
// Requirements: Tailwind CSS configured in the project for styling

const Navbar = () => {
const [isOpen, setIsOpen] = React.useState(false);

return (
<header className="w-full bg-white/80 backdrop-blur-sm fixed top-0 left-0 z-40 shadow-sm">
<div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-6">
{/* Logo */}
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-md bg-orange-600 flex items-center justify-center text-white font-bold">
R.K
</div>
<div>
<h1 className="text-lg font-semibold">R K Construction and Supplers</h1>
<p className="text-xs text-gray-500">Reliable construction services</p>
</div>
</div>

    {/* Desktop Menu */}
    <nav className="hidden md:flex items-center gap-6 text-sm">
      <a href="#home" className="hover:text-orange-600">Home</a>
      <a href="#Services" className="hover:text-orange-600">Services</a>
      <a href="#projects" className="hover:text-orange-600">Projects</a>
      <a href="#about" className="hover:text-orange-600">About</a>
      <a
        href="#contact"
        className="bg-orange-600 text-white px-4 py-2 rounded-md shadow-sm hover:opacity-95"
      >
        Contact
      </a>
    </nav>

    {/* Mobile Menu Button */}
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-orange-500"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={
              isOpen
                ? "M6 18L18 6M6 6l12 12" // X icon
                : "M4 6h16M4 12h16M4 18h16" // Hamburger icon
            }
          />
        </svg>
      </button>
    </div>
  </div>

  {/* Mobile Menu Dropdown */}
  {isOpen && (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="md:hidden bg-white border-t shadow-sm"
    >
      <div className="flex flex-col px-6 py-4 space-y-3 text-sm">
        <a href="#home" onClick={() => setIsOpen(false)} className="hover:text-orange-600">Home</a>
        <a href="#services" onClick={() => setIsOpen(false)} className="hover:text-orange-600">Services</a>
        <a href="#projects" onClick={() => setIsOpen(false)} className="hover:text-orange-600">Projects</a>
        <a href="#about" onClick={() => setIsOpen(false)} className="hover:text-orange-600">About</a>
        <a
          href="#contact"
          onClick={() => setIsOpen(false)}
          className="bg-orange-600 text-white px-4 py-2 rounded-md w-max hover:opacity-95"
        >
          Contact
        </a>
      </div>
    </motion.nav>
  )}
</header>


);
};

const Hero = () => (
  <section id="home" className="pt-24 bg-linear-to-b from-white to-gray-50">
    <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-8 items-center py-16" style={{padding: "15px"}}>
      <div className="md:col-span-7">
        <motion.h2 initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="text-4xl md:text-5xl font-extrabold leading-tight">
          Building tomorrow's spaces — <span className="text-orange-600">strong</span>, <span className="text-sky-600">safe</span>, and <span className="text-emerald-600">sustainable</span>.
        </motion.h2>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="mt-6 text-gray-600 max-w-xl">
          R K Construction and Supplers builds more than structures — we build trust. From concept to completion, we deliver top-quality residential, commercial, and industrial projects with precision, safety, and on-time excellence.
        </motion.p>

        <div className="mt-8 flex gap-4">
          <a href="#contact" className="inline-block bg-orange-600 text-white px-5 py-3 rounded-md shadow hover:opacity-95">Request Quote</a>
          <a href="#projects" className="inline-block border border-gray-200 px-5 py-3 rounded-md">Our Projects</a>
        </div>

        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
          <div className="flex flex-col">
            <span className="text-2xl font-bold">75+</span>
            <span className="text-gray-500">Projects</span>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-bold">13 yrs</span>
            <span className="text-gray-500">Experience</span>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-bold">98%</span>
            <span className="text-gray-500">Client Satisfaction</span>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-bold">35+</span>
            <span className="text-gray-500">Skilled Team</span>
          </div>
        </div>
      </div>

      <div className="md:col-span-5">
        <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.6 }} className="relative rounded-2xl overflow-hidden shadow-lg">
          <img src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg" alt="construction" className="w-full h-80 object-cover" />
          <div className="absolute left-4 bottom-4 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow">
            <p className="text-sm text-gray-700">Residential high-rise — Phase III</p>
            <p className="text-xs text-gray-500">Completion: Dec 2025</p>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);


const Services = () => {
  const items = [
    { title: "White Building", desc: "Turnkey construction for residential and commercial buildings.", img: "/bsDegineTop.jpg"},
    { title: "Project Management", desc: "Planning, coordination and on-site supervision.", img: "/projectManage.jpg" },
    { title: "Renovation & Interiors", desc: "Modern interiors and efficient renovations.", img: "/Renovation.jpg" },
    { title: "Sustainable Design", desc: "Green building practices and energy-efficient solutions.", img: "/bsDegine.jpg" },
  ];

  return (
    <section id="services" className="py-16" style={{padding: '25px'}}>
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-2xl font-bold">Our Services</h3>
        <p className="text-gray-600 mt-2 max-w-2xl">Comprehensive services to cover every stage of your project.</p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it, idx) => (
            <motion.div key={idx} whileHover={{ y: -6 }} className="p-6 rounded-xl bg-white shadow">
              <img 
              src={it.img}
              alt={it.title}
              />
              <div className="w-12 h-12 rounded-md bg-orange-50 flex items-center justify-center font-bold text-orange-600">{idx + 1}</div>
              <h4 className="mt-4 font-semibold">{it.title}</h4>
              <p className="mt-2 text-sm text-gray-600">{it.desc}</p>
              <div className="mt-4">
                <a href="#contact" className="text-sm text-orange-600 font-medium">Get Started →</a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ title, subtitle, image }) => (
  <motion.div whileHover={{ scale: 1.03 }} className="rounded-lg overflow-hidden shadow-md bg-white">
    <img src={image} alt={title} className="w-full h-44 object-cover" />
    <div className="p-4">
      <h5 className="font-semibold">{title}</h5>
      <p className="text-sm text-gray-500 mt-1">{subtitle}</p>
      <div className="mt-3">
        <a href="#" className="text-orange-600 text-sm">View details</a>
      </div>
    </div>
  </motion.div>
);

const Projects = () => {
  const projects = [
    { title: "Skyline Residences", subtitle: "Luxury apartment complex — 120 units", image: "/bsDegineTop.jpg" },
    { title: "RK Construction Site Project", subtitle: "Commercial retail development", image: "/project.gpg.jpg"},
    { title: "Luxury Home Project — RK Construction", subtitle: "Gated community with landscaping", image: "/newbuilding.jpg"},
  ];

  return (
    <section id="projects" className="py-16 bg-gray-50" style={{padding: "22px"}}>
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-2xl font-bold">Featured Projects</h3>
        <p className="text-gray-600 mt-2">A quick look at some of our recent work.</p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={i} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
};

const AboutAndSidebar = () => (
  <section id="about" className="py-16">
    <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-8">
      <div className="md:col-span-8">
        <h3 className="text-2xl font-bold">About Us</h3>
        <p className="text-gray-600 mt-4 max-w-2xl">Construct & Build is a family-owned construction company with a focus on quality, safety and sustainability. Our multidisciplinary team covers architecture, engineering, project management and skilled construction crews.</p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-6 bg-white rounded-xl shadow">
            <h4 className="font-semibold">Our Mission</h4>
            <p className="text-sm text-gray-600 mt-2">Deliver exceptional construction outcomes with integrity and innovation.</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow">
            <h4 className="font-semibold">Safety First</h4>
            <p className="text-sm text-gray-600 mt-2">Stringent safety protocols and on-site training for all staff.</p>
          </div>
        </div>
      </div>

      <aside className="md:col-span-4">
        <div className="p-6 bg-white rounded-2xl shadow sticky top-28">
          <div className="flex items-center gap-4">
            <img src="#Properietor" alt="Properietor" className="w-16 h-16 rounded-full object-cover" />
            <div>
              <h5 className="font-semibold">Rakesh Kumar</h5>
            </div>
          </div>
          <p className="text-sm text-gray-600 mt-4 font-semibold">GSTIN - 09CUMPK9875P1ZB</p>
          <p className="text-sm text-gray-600 mt-4 font-semibold">Address  -  Bajhiyabari, POST-Birapatti 
            Varanasi (U.P) 221105
          </p>

          <div className="mt-4 flex gap-2">
            <a className="text-sm py-2 px-3 rounded-md border">Download Brochure</a>
            <a className="text-sm py-2 px-3 rounded-md bg-orange-600 text-white">Hire Us</a>
          </div>

          <div className="mt-6">
            <h6 className="text-sm font-semibold">Contact</h6>
            <p className="text-xs text-gray-500 mt-1 font-semibold">+91 7985349708</p>
            <p className="text-xs text-gray-500 font-semibold"><a href="email.com">rakeshkumar5392@gmail.com</a></p>
          </div>
        </div>
      </aside>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="py-16 bg-white">
    <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
      <div>
        <h3 className="text-2xl font-bold">Get a Quote</h3>
        <p className="text-gray-600 mt-2">Tell us about your project and we'll get back with an estimate.</p>

        <form className="mt-6 grid grid-cols-1 gap-4">
          <input className="p-3 rounded-md border" placeholder="Your name" />
          <input className="p-3 rounded-md border" placeholder="Email address" />
          <input className="p-3 rounded-md border" placeholder="Phone number" />
          <textarea className="p-3 rounded-md border" rows={5} placeholder="Project details" />
          <button className="bg-orange-600 text-white px-5 py-3 rounded-md w-max">Send Request</button>
        </form>
      </div>

      <div>
        <div className="p-6 rounded-xl bg-gray-50 shadow">
          <h4 className="font-semibold">Office</h4>
          <p className="text-sm text-gray-600 mt-2">123 Builder Lane, Sector 45, Cityname</p>

          <div className="mt-4">
            <h6 className="text-sm font-semibold">Hours</h6>
            <p className="text-xs text-gray-500">Mon - Sat: 9:00 AM - 6:00 PM</p>
          </div>

          <div className="mt-6">
            <h6 className="text-sm font-semibold">Follow Us</h6>
            <div className="mt-2 flex gap-3">
              <a className="text-sm border px-3 py-2 rounded-md">LinkedIn</a>
              <a className="text-sm border px-3 py-2 rounded-md">Instagram</a>
            </div>
          </div>
        </div>

        <div className="mt-6 p-6 rounded-xl bg-white shadow">
          <h6 className="text-sm font-semibold">Quick facts</h6>
          <ul className="mt-2 text-sm text-gray-600 list-disc list-inside">
            <li>Licensed contractors</li>
            <li>100% insured</li>
            <li>24/7 site support</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-gray-900 text-gray-200 py-8 mt-12">
    <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-sm">© {new Date().getFullYear()} Construct & Build — All rights reserved.</p>
      <div className="flex gap-4 text-sm">
        <a>Privacy</a>
        <a>Terms</a>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen font-sans text-gray-800">
      <Navbar />
      <main>
        <Hero />
        <ServiceSlide/>
        <Services />
        <ImageCardSlider/>
        <Projects />
        <AboutAndSidebar />
        <Contact />
        <Locationx />
      </main>
      <Footer />
    </div>
  );
}
