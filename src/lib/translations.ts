export type Lang = "en";

export type ServiceColor = "orangey" | "pink" | "lilac" | "blue";

export const translations = {
  en: {
    banner: {
      text: "Introducing Mimi — voice-first thought capture",
      link: "Get in touch",
    },
    nav: {
      services: "Features",
      mission: "How it works",
      why: "Why voice",
      contact: "Contact",
      cta: "Get in touch",
    },
    hero: {
      headline: ["Speak your thought.", "Mimi", "writes."],
      sub: "Mimi is a voice-first thought-capture app. Speak naturally — Mimi structures your idea into lists, outlines, tables, and calendar events while you keep thinking.",
      cta: "Get in touch",
      explore: "See how it works",
    },
    intro: {
      headline: "Thoughts move faster than you can type.",
      body: "Your best ideas arrive while you are walking, driving, or moving between meetings. By the time you unlock a notes app, pick a template, and start indenting a list, the thought has already changed shape — or it is gone.",
      body2:
        "Mimi removes that gap. You speak; the structure is chosen for you, so the first note is already useful.",
    },
    mission: {
      headline: "Speak first. Structure second.",
      body: "Push to talk to open a turn. Talk for as long as you need, pause as long as you want, tap again to commit. Mimi transcribes the clip, chooses the right structure, and writes the block on the page.",
      body2:
        "A grocery thought becomes a checklist. Meeting prep becomes an outline. A comparison becomes a table. \"Dentist Tuesday at three\" becomes a calendar event you can see in day, week, or month view.",
      quote: "You talk; Mimi writes.",
    },
    services: {
      headline: "What Mimi does.",
      items: [
        {
          id: "capture",
          label: "Capture",
          color: "orangey" as ServiceColor,
          title: "Voice-first capture",
          body: "Push-to-talk turns: tap to open, speak with any pauses you want, tap to commit. A dictation pause never splits one thought into two.",
          points: [
            "Push-to-talk turn taking",
            "Pauses of any length stay inside one turn",
            "Speech-to-text on commit, not on silence",
            "One batch clip per turn — no live audio channel",
          ],
          explore: "Learn about capture",
        },
        {
          id: "structure",
          label: "Structure",
          color: "pink" as ServiceColor,
          title: "Structured, not just transcribed",
          body: "Mimi routes each captured thought to the right kind of block: lists, outlines, tables, checklists, flashcards, quotes, code, or math — chosen from your words, not from a template you had to pick first.",
          points: [
            "Bullet lists and numbered lists",
            "Checklists and outlines",
            "Tables and flashcards",
            "Code blocks, math, and quotes",
          ],
          explore: "Explore structures",
          tagline: "Structure chosen from your words, not your taps.",
        },
        {
          id: "calendar",
          label: "Calendar",
          color: "lilac" as ServiceColor,
          title: "Calendar built in",
          body: "A dated commitment becomes an event, not just a line in a note. \"Dentist Tuesday at three\" lands on a calendar you can see in day, week, or month view — and \"move it to Thursday\" finds it and changes it.",
          points: [
            "Events with real dates, times, and time zones",
            "Day, week, and month views",
            "Recurring events with per-occurrence edits",
            "Edit or reschedule by voice, from the same capture flow",
          ],
          explore: "See the calendar",
        },
        {
          id: "memory",
          label: "Memory",
          color: "blue" as ServiceColor,
          title: "Personalized over time",
          body: "Per-user retrieval so Mimi remembers how you prefer similar thoughts to be shaped. The more you use it, the less you have to explain. Corrections teach the router — you say something differently, Mimi files it differently next time.",
          points: [
            "Per-user routing memory",
            "Cross-turn context inside a session",
            "Older turns compressed into a digest, not evicted",
            "Corrections steer future structuring",
          ],
          explore: "Learn about memory",
        },
      ],
    },
    whyVoice: {
      headline: "Why voice.",
      body: "Typing is where thoughts go to be trimmed. You pick a template, indent a bullet, pause to search for a word — and half of what you meant is already gone by the time the first line is done.",
      body2:
        "Speech is the fastest input you have. Mimi is designed to take that speech and do the organizing work for you, so the note starts useful instead of blank.",
    },
    advantage: {
      headline: "Built for the moment before organization starts.",
      body: "Mimi is not another editor with a microphone bolted on. Voice is the primary way in; the editor is where the result lives. The alternative today is a voice memo you never replay, a blank note you avoid, or a piece of paper you lose.",
      quote: "Great captures shouldn't need a template first.",
    },
    contact: {
      headline: "Questions about Mimi?",
      body: "Reach out — about what Mimi does today, where it is going, or how to try it.",
      name: "Your name",
      email: "Your email",
      message: "Your message",
      submit: "Send message",
      success: "Message sent. We will be in touch.",
      error: "Something went wrong. Please try again.",
    },
    footer: {
      tagline: "Voice-first thought capture. You talk; Mimi writes.",
      copy: "© 2024 - 2026 Eyeeai. All rights reserved.",
      privacy: "Privacy Notice",
      terms: "Terms of Use",
      links: {
        services: "Features",
        mission: "How it works",
        why: "Why voice",
        contact: "Contact",
      },
    },
  },
} as const;

export type Translations = (typeof translations)[Lang];
