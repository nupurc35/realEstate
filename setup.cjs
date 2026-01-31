const fs = require("fs");
const path = require("path");

const write = (file, content) => {
  if (fs.existsSync(file)) {
    console.log("⏭ Skipped existing file:", file);
    return;
  }
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, content);
  console.log("✅ Created:", file);
}



console.log("🚀 Installing Real Estate Lead Operating System...");

// folders
[
  "src/app",
  "src/pages",
  "src/analytics",
  "src/hooks",
  "src/config",
  "src/components"
].forEach(dir => fs.mkdirSync(dir, { recursive: true }));

// config
write("src/config/analytics.config.js",
`export const GA_ID = "G-XXXXXXX";`
);

// analytics
write("src/analytics/ga4.js",
`export const trackEvent = (eventName, params = {}) => {
  if (!window.gtag) return;
  window.gtag("event", eventName, params);
};`
);

write("src/analytics/leadLock.js",
`export const canFireLead = () => {
  return !localStorage.getItem("lead_confirmed");
};

export const lockLead = () => {
  localStorage.setItem("lead_confirmed", "true");
};`
);

// hooks
write("src/hooks/usePageView.js",
`import { useEffect } from "react";
import { trackEvent } from "../analytics/ga4";

export default function usePageView(title) {
  useEffect(() => {
    trackEvent("page_view", {
      page_title: title,
      page_path: window.location.pathname
    });
  }, [title]);
}`
);

write("src/hooks/useLeadConfirm.js",
`import { trackEvent } from "../analytics/ga4";
import { canFireLead, lockLead } from "../analytics/leadLock";

export const confirmLead = (source) => {
  if (!canFireLead()) return;
  trackEvent("lead_confirmed", { source });
  lockLead();
};`
);

// app
write("src/app/App.jsx",
`import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}`
);

write("src/app/routes.jsx",
`import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Dashboard from "../pages/Dashboard";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}`
);

// pages
write("src/pages/Home.jsx",
`import usePageView from "../hooks/usePageView";

export default function Home() {
  usePageView("Home");
  return <h1>Amaze Realtors</h1>;
}`
);

write("src/pages/Contact.jsx",
`import usePageView from "../hooks/usePageView";
import { confirmLead } from "../hooks/useLeadConfirm";

export default function Contact() {
  usePageView("Contact");

  const submit = (e) => {
    e.preventDefault();
    confirmLead("contact_form");
  };

  return (
    <form onSubmit={submit}>
      <input placeholder="Name" required />
      <input placeholder="Phone" required />
      <button>Submit</button>
    </form>
  );
}`
);

write("src/pages/Dashboard.jsx",
`import usePageView from "../hooks/usePageView";

export default function Dashboard() {
  usePageView("Dashboard");

  return (
    <div>
      <h1>Total Verified Leads</h1>
      <h2>84</h2>
      <ul>
        <li>Calls: 26</li>
        <li>WhatsApp: 38</li>
        <li>Chat: 12</li>
        <li>Forms: 8</li>
      </ul>
    </div>
  );
}`
);

console.log("✅ Lead Operating System installed successfully.");


console.log("🚀 Installing Amaze Realtors Web System...");

/* ================= FOLDERS ================= */
[
  "src/app",
  "src/pages",
  "src/components/layout",
  "src/components/hero",
  "src/components/property",
  "src/components/search",
  "src/styles"
].forEach((dir) => fs.mkdirSync(dir, { recursive: true }));

/* ================= ROUTES ================= */
write(
  "src/app/routes.jsx",
  `import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Properties from "../pages/Properties";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/properties" element={<Properties />} />
    </Routes>
  );
}`
);

/* ================= APP ================= */
write(
  "src/app/App.jsx",
  `import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";
import "../styles/main.css";

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}`
);

/* ================= LAYOUT ================= */
write(
  "src/components/layout/TopBar.jsx",
  `export default function TopBar() {
  return (
    <div className="top-bar">
      <span>+91-8486000010</span>
      <span>info@amazerealtors.com</span>
      <span>RERA NO. ARERAKMPA0000102017-12</span>
    </div>
  );
}`
);

write(
  "src/components/layout/Navbar.jsx",
  `import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Amaze Realtors</div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/properties">Properties</Link>
        <a href="#">Projects</a>
        <a href="#">About Us</a>
        <a href="#">Services</a>
        <a href="#">Contact Us</a>
      </div>

      <button className="cta-btn">Submit Property</button>
    </nav>
  );
}`
);

/* ================= HERO ================= */
write(
  "src/components/hero/HeroBanner.jsx",
  `export default function HeroBanner({ title, subtitle }) {
  return (
    <section className="hero">
      <div className="hero-overlay">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </section>
  );
}`
);

/* ================= PROPERTY ================= */
write(
  "src/components/property/PropertyCard.jsx",
  `export default function PropertyCard() {
  return (
    <div className="property-card">
      <img src="https://via.placeholder.com/350x220" alt="Property" />
      <div className="property-info">
        <h3>1558 Sq.Ft. 3 BHK Residential Apartment</h3>
        <p>Bhetapara, Guwahati</p>
        <div className="property-meta">
          <span>1558 Sq.Ft.</span>
          <span>Immediately</span>
          <span>New</span>
        </div>
      </div>
    </div>
  );
}`
);

/* ================= SEARCH ================= */
write(
  "src/components/search/AdvancedSearch.jsx",
  `export default function AdvancedSearch() {
  return (
    <aside className="search-box">
      <h3>ADVANCED SEARCH</h3>
      <select><option>For Rent</option></select>
      <select><option>Residential Apartment</option></select>
      <button>Search</button>
    </aside>
  );
}`
);

/* ================= PAGES ================= */
write(
  "src/pages/Home.jsx",
  `import TopBar from "../components/layout/TopBar";
import Navbar from "../components/layout/Navbar";

export default function Home() {
  return (
    <>
      <TopBar />
      <Navbar />
      <h1 style={{ padding: "40px" }}>Amaze Realtors</h1>
    </>
  );
}`
);

write(
  "src/pages/Properties.jsx",
  `import TopBar from "../components/layout/TopBar";
import Navbar from "../components/layout/Navbar";
import HeroBanner from "../components/hero/HeroBanner";
import PropertyCard from "../components/property/PropertyCard";
import AdvancedSearch from "../components/search/AdvancedSearch";

export default function Properties() {
  return (
    <>
      <TopBar />
      <Navbar />
      <HeroBanner
        title="PROPERTIES LISTING"
        subtitle="Home > Properties Listing"
      />

      <div className="container">
        <div className="listing">
          <PropertyCard />
          <PropertyCard />
        </div>
        <AdvancedSearch />
      </div>
    </>
  );
}`
);

/* ================= CSS ================= */
write(
  "src/styles/main.css",
  `body { margin:0; font-family: Arial; }
.top-bar{background:#111;color:#fff;padding:8px 20px;display:flex;justify-content:space-between}
.navbar{display:flex;justify-content:space-between;padding:15px 20px}
.nav-links a{margin:0 10px;text-decoration:none;color:#333}
.cta-btn{background:orange;color:#fff;border:none;padding:8px 14px}
.hero{height:280px;background:#333;position:relative}
.hero-overlay{position:absolute;inset:0;background:rgba(0,0,0,.6);color:#fff;display:flex;flex-direction:column;align-items:center;justify-content:center}
.container{display:flex;padding:30px;gap:20px}
.listing{flex:3}
.search-box{flex:1;border:1px solid #ddd;padding:20px}
.property-card{display:flex;border:1px solid #ddd;margin-bottom:20px}
.property-card img{width:250px}
.property-info{padding:15px}`)


console.log("✅ Amaze Realtors system installed successfully.");

write(
  "src/pages/Contact.jsx",
  `export default function Contact() {
  return (
    <div style={{ padding: "40px", maxWidth: "600px", margin: "auto" }}>
      <h2>Contact Us</h2>

      <form className="contact-form">
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Email" required />
        <input type="tel" placeholder="Phone Number" required />
        <textarea placeholder="Your Message"></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}`
);



write(
  "src/components/layout/Navbar.jsx",
  `import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Amaze Realtors</div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/properties">Properties</Link>
        <a href="#">Projects</a>
        <a href="#">About Us</a>
        <a href="#">Services</a>
        <Link to="/contact">Contact Us</Link>
      </div>

      <button className="cta-btn">Submit Property</button>
    </nav>
  );
}`
); 


// Additional main css //

