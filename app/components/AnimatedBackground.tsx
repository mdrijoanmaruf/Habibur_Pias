"use client";

import { useEffect } from "react";

export default function AnimatedBackground() {
  useEffect(() => {
    const container = document.getElementById("particles-container");
    if (!container) return;
    const particleCount = 30;
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement("div");
      particle.className = "particle";
      particle.style.left = Math.random() * 100 + "%";
      particle.style.top = Math.random() * 100 + "%";
      particle.style.animationDelay = Math.random() * 5 + "s";
      particle.style.animationDuration = 3 + Math.random() * 3 + "s";
      container.appendChild(particle);
    }
  }, []);

  return (
    <div className="animated-bg">
      <div
        className="gradient-orb"
        style={{
          top: "25%",
          left: "25%",
          width: 384,
          height: 384,
          background:
            "linear-gradient(90deg, rgba(6,182,212,0.15), rgba(20,184,166,0.15))",
          animationDelay: "0s",
        }}
      />
      <div
        className="gradient-orb"
        style={{
          bottom: "25%",
          right: "25%",
          width: 320,
          height: 320,
          background:
            "linear-gradient(90deg, rgba(59,130,246,0.15), rgba(6,182,212,0.15))",
          animationDelay: "1s",
        }}
      />
      <div
        className="gradient-orb"
        style={{
          top: "50%",
          left: "50%",
          width: 288,
          height: 288,
          background:
            "linear-gradient(90deg, rgba(20,184,166,0.1), rgba(59,130,246,0.1))",
          animationDelay: "2s",
          transform: "translate(-50%, -50%)",
        }}
      />
      <div
        className="gradient-orb"
        style={{
          top: "10%",
          right: "10%",
          width: 256,
          height: 256,
          background:
            "linear-gradient(90deg, rgba(147,51,234,0.12), rgba(6,182,212,0.12))",
          animationDelay: "3s",
        }}
      />
      <div
        className="gradient-orb"
        style={{
          bottom: "10%",
          left: "10%",
          width: 224,
          height: 224,
          background:
            "linear-gradient(90deg, rgba(20,184,166,0.12), rgba(59,130,246,0.12))",
          animationDelay: "4s",
        }}
      />
      <div id="particles-container" />
    </div>
  );
}
