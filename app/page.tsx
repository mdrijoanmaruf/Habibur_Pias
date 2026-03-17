import AnimatedBackground from "./components/AnimatedBackground";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Md Habibur Rahaman Bhuiyan",
  jobTitle: "Finance Executive",
  description:
    "Experienced Finance Executive and Risk Controller at Global Brand PLC with expertise in accounting, credit control, financial analysis, and corporate risk management.",
  url: "https://habibur-pias.vercel.app",
  image: "https://habibur-pias.vercel.app/me.png",
  email: "mdhabibbhuiyan7@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dhaka",
    addressCountry: "Bangladesh",
  },
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "National University",
    address: {
      "@type": "PostalAddress",
      addressCountry: "Bangladesh",
    },
  },
  worksFor: {
    "@type": "Organization",
    name: "Global Brand PLC.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dhaka",
      addressCountry: "Bangladesh",
    },
  },
  sameAs: [
    "https://www.linkedin.com/in/md-habibur-rahaman-bhuiyan-4728b4207",
  ],
  knowsAbout: [
    "Finance",
    "Risk Management",
    "Credit Control",
    "Accounting",
    "Financial Analysis",
    "Corporate Risk Management",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="bg-white text-gray-900 relative">
        <AnimatedBackground />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Experience />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
