export type Lang = "en";

export type ServiceColor = "orangey" | "pink" | "lilac" | "blue";

export const translations = {
  en: {
    banner: {
      text: "Your partner for entering the Saudi market",
      link: "Get in touch",
    },
    nav: {
      services: "Services",
      mission: "Mission",
      why: "Why Saudi",
      contact: "Contact",
      cta: "Get in Touch",
    },
    hero: {
      headline: ["Start your journey", "in", "Saudi."],
      sub: "We are a Saudi based startup and market entry partner helping international startups successfully enter and grow in the Saudi Arabian market.",
      cta: "Get in Touch",
      explore: "Explore Services",
    },
    intro: {
      headline: "We bridge the gap.",
      body: "Entering a new market requires more than simply launching a product. Startups need local knowledge, the right partners, market understanding, cultural adaptation, and access to the right business and funding networks.",
      body2:
        "Through our local network of partners and industry experts, we help startups adapt their products and materials to the Saudi market, connect with relevant stakeholders, explore funding opportunities, and build the foundations needed for sustainable growth in the Kingdom.",
    },
    mission: {
      headline: "Simpler, faster market entry.",
      body: "To make entering the Saudi market simpler, faster, and more accessible for ambitious startups.",
      body2:
        "Our mission is to connect innovative startups with the Saudi ecosystem and provide the local expertise, partnerships, and strategic support they need to succeed.",
      quote: "Great startups should not have to navigate a new market alone.",
    },
    services: {
      headline: "Four pathways into the Kingdom.",
      items: [
        {
          id: "entry",
          label: "Entry",
          color: "orangey" as ServiceColor,
          title: "Saudi Market Entry",
          body: "We help startups understand the Saudi market and develop a practical strategy for entering it.",
          points: [
            "Market entry strategy",
            "Local market research",
            "Identifying potential customers and partners",
            "Connecting with relevant local stakeholders",
            "Business development support",
            "Guidance on establishing a presence in Saudi Arabia",
          ],
          explore: "Explore Entry",
        },
        {
          id: "localization",
          label: "Localization",
          color: "pink" as ServiceColor,
          title: "Localization",
          body: "A successful Saudi launch requires more than translating content. We help startups localize their products, messaging, marketing materials, and business approach.",
          points: [
            "Arabic and English localization",
            "Marketing and sales materials",
            "Cultural adaptation",
            "Local customer positioning",
            "Product and communication adaptation",
            "Saudi-specific market messaging",
          ],
          explore: "Explore Localization",
          tagline: "Don't just enter Saudi Arabia fit the market.",
        },
        {
          id: "funding",
          label: "Funding",
          color: "lilac" as ServiceColor,
          title: "Funding & Investor Access",
          body: "Saudi Arabia has developed a rapidly growing startup and venture capital ecosystem, creating increasing opportunities for international startups seeking regional funding.",
          points: [
            "Funding strategy",
            "Investor introductions",
            "Pitch and fundraising preparation",
            "Connecting with relevant funding networks",
            "Identifying strategic investment opportunities",
          ],
          explore: "Explore Funding",
        },
        {
          id: "consulting",
          label: "Consulting",
          color: "blue" as ServiceColor,
          title: "Consulting & Strategic Support",
          body: "Every startup has different challenges when entering a new market. We provide tailored consulting to help founders make better decisions and move faster.",
          points: [
            "Saudi market strategy",
            "Go-to-market planning",
            "Business development",
            "Partnerships",
            "Localization",
            "Funding strategy",
            "Strategic introductions",
            "Regional expansion",
          ],
          explore: "Explore Consulting",
        },
      ],
    },
    whySaudi: {
      headline: "Vision 2030 opens the door.",
      body: "Saudi Arabia is becoming one of the region's most important markets for startups, technology, investment, and innovation. The Kingdom's Vision 2030 strategy places strong emphasis on entrepreneurship, technology, private-sector growth, and attracting international investment.",
      body2:
        "For international startups, this creates significant opportunities — but successfully accessing those opportunities requires local knowledge and relationships. That's where we come in.",
    },
    advantage: {
      headline: "Local knowledge. Real partnerships.",
      body: "We combine local market knowledge, strategic consulting, and a network of Saudi partners to give startups a practical pathway into the Kingdom.",
      quote: "We don't just advise startups from the outside.",
    },
    contact: {
      headline: "Let's talk.",
      body: "Whether you're exploring Saudi market entry, seeking local partners, or looking for strategic support — we'd love to hear from you.",
      name: "Your name",
      email: "Your email",
      message: "Your message",
      submit: "Send Message",
      success: "Message sent. We will be in touch soon.",
      error: "Something went wrong. Please try again.",
    },
    footer: {
      tagline: "Helping startups enter, understand, and grow in Saudi Arabia.",
      copy: "© 2024 - 2026 Shortku. All rights reserved.",
      privacy: "Privacy Notice",
      terms: "Terms of Use",
      links: {
        services: "Services",
        mission: "Mission",
        why: "Why Saudi",
        contact: "Contact",
      },
    },
  },
} as const;

export type Translations = (typeof translations)[Lang];
