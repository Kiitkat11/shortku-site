export type Lang = "en";

export const translations = {
  en: {
    nav: {
      cta: "Get in Touch",
    },
    hero: {
      headline: ["Building the Future of", "Autonomous Delivery"],
      sub: "Shortku develops autonomous drone systems that make delivery faster, more efficient, and more sustainable.",
      scroll: "Scroll to explore",
    },
    why: {
      eyebrow: "Why It Matters",
      headline: "Cities are growing.\nDelivery must evolve.",
      body: "As demand for faster delivery increases, traditional transportation methods are becoming more expensive, congested, and less efficient. Autonomous aerial delivery can solve these challenges.",
      items: [
        { num: "01", text: "Reduce traffic congestion in cities" },
        { num: "02", text: "Lower the cost of last-mile delivery" },
        { num: "03", text: "Significantly decrease delivery times" },
        { num: "04", text: "Improve energy efficiency" },
        { num: "05", text: "Expand access to remote and hard-to-reach locations" },
      ],
    },
    vision: {
      eyebrow: "Our Vision",
      headline: "Drones as everyday infrastructure.",
      body: "We envision a future where autonomous drones operate seamlessly alongside existing transportation networks. By combining advanced robotics, artificial intelligence, and aerospace engineering, we are building technology that enables faster, smarter, and more sustainable logistics.",
      quote:
        "We are not simply building drones — we are accelerating the future of autonomous transportation and redefining how the world moves.",
    },
    contact: {
      eyebrow: "Contact",
      headline: "Work with us.",
      body: "Whether you are an investor, a potential partner, or simply curious about what we are building — we would love to hear from you.",
      name: "Your name",
      email: "Your email",
      message: "Your message",
      submit: "Send Message",
      success: "Message sent. We will be in touch soon.",
      error: "Something went wrong. Please try again.",
    },
    footer: {
      tagline: "Accelerating the future of autonomous drones.",
      copy: "© 2025 Shortku. All rights reserved.",
    },
  },
} as const;

export type Translations = (typeof translations)[Lang];
