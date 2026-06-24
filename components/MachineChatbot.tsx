"use client";

import { FormEvent, MouseEvent, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

type Message = {
  from: "bot" | "user";
  text: string;
};

type ChatTopic = {
  label: string;
  keywords: string[];
  response: string;
};

const chatTopics: ChatTopic[] = [
  {
    label: "Services",
    keywords: [
      "service",
      "services",
      "painting",
      "interior",
      "exterior",
      "spray",
      "sprayer",
      "machine",
      "skimming",
      "surface",
      "preparation",
      "commercial",
      "renovation",
      "walls",
      "finish",
      "finishing",
    ],
    response:
      "The Machine Painting Co Ltd offers interior painting, exterior painting, machine spray painting, wall skimming / surface preparation, commercial painting, and renovation painting. These services support homes, offices, apartments, buildings, warehouses, and commercial projects.",
  },
  {
    label: "Paint Packages",
    keywords: [
      "package",
      "packages",
      "paint package",
      "one day",
      "commercial package",
      "paint for free",
      "pricing package",
      "options",
    ],
    response:
      "The main paint packages are One Day Painting, Commercial Painting, and Paint for Free. One Day Painting is ideal for faster refresh projects, Commercial Painting supports offices and business premises, and Paint for Free is a flexible project option discussed during quotation or site assessment.",
  },
  {
    label: "Quotation",
    keywords: [
      "quote",
      "quotation",
      "estimate",
      "cost",
      "price",
      "pricing",
      "charges",
      "how much",
      "budget",
      "ksh",
      "kes",
    ],
    response:
      "You can request a quotation using the Project Request form at the bottom of the page. Select 'Get a Quotation', add your name, phone number, project location, service needed, preferred date if applicable, and project details. The final quotation depends on surface condition, preparation work, access, and project scope.",
  },
  {
    label: "Site Visit",
    keywords: [
      "site visit",
      "visit",
      "assessment",
      "book",
      "booking",
      "inspection",
      "measure",
      "measurements",
      "location",
      "come to site",
    ],
    response:
      "You can book a site visit using the Project Request form at the bottom of the page. Select 'Book a Site Visit', then add your project location, preferred site visit date, service needed, and project details so the team can plan the next step.",
  },
  {
    label: "Gallery",
    keywords: [
      "gallery",
      "photos",
      "pictures",
      "images",
      "before",
      "after",
      "transformation",
      "portfolio images",
      "work photos",
    ],
    response:
      "The Gallery page shows before-and-after transformations, including exterior refreshes, residential finishes, wall transformations, multi-angle before images, and completed painting results. It is useful if you want to see visual proof of finish quality.",
  },
  {
    label: "Projects",
    keywords: [
      "projects",
      "project",
      "videos",
      "youtube",
      "westlands",
      "kihingo",
      "kitsuru",
      "kileleshwa",
      "renovations",
      "office renovation",
      "villa",
      "apartment",
    ],
    response:
      "The Projects page includes video projects such as Westlands Office Renovations, Kihingo Village Kitsuru Villa, and Kileleshwa Apartment 360 Renovations. Key facts include Westlands office work covering about 288 sqm, Kihingo Village’s 5500 sqft townhouse on 0.7 acres, and Kileleshwa’s full 360 apartment makeover.",
  },
  {
    label: "About",
    keywords: [
      "about",
      "company",
      "who are you",
      "who we are",
      "machine painting",
      "brand",
      "tagline",
      "beautiful structures",
      "sprayed perfectly",
    ],
    response:
      "The Machine Painting Co Ltd is a professional painting and finishing company built around clean execution, modern painting methods, surface preparation, and strong final presentation. The company promise is: Beautiful Structures, Sprayed Perfectly.",
  },
  {
    label: "Process",
    keywords: [
      "process",
      "steps",
      "how it works",
      "how do you work",
      "procedure",
      "prepare",
      "primer",
      "application",
      "inspection",
      "handover",
    ],
    response:
      "The process usually starts with consultation or assessment, followed by quotation guidance, surface preparation, paint application, final inspection, and clean handover. Good preparation is important because the final finish depends on the condition of the surface before painting begins.",
  },
  {
    label: "Join Us",
    keywords: [
      "join",
      "career",
      "careers",
      "register",
      "painter",
      "crew",
      "worker",
      "job",
      "work",
      "employment",
      "skill",
      "skills",
      "sprayer",
      "skimming",
      "masonry",
      "electrical",
      "plumbing",
    ],
    response:
      "Painters and skilled crew members can register on the Join Us page. The registration form asks for name, age, location, estate, phone number, and exactly two skill selections. Skill options include Interior & Exterior Wall Painting, Special Effect, Wallmaster, Masonry Works, Sprayer, Skimming, Electrical Works, and Plumbing Works.",
  },
  {
    label: "Contact",
    keywords: [
      "contact",
      "phone",
      "call",
      "whatsapp",
      "email",
      "number",
      "reach",
      "location",
      "nairobi",
    ],
    response:
      "You can contact The Machine Painting Co Ltd through WhatsApp or phone on 0785 285 828. You can also email themachinepainting@gmail.com. The company is based in Nairobi, Kenya.",
  },
];

const fallbackResponse =
  "I can help with services, paint packages, quotations, site visits, gallery transformations, project videos, company information, process, painter registration, and contact details. Try asking something like 'How do I get a quote?', 'Do you offer site visits?', or 'Show me your projects.'";

function findResponse(input: string) {
  const normalizedInput = input.toLowerCase().trim();

  if (!normalizedInput) return fallbackResponse;

  const matchedTopic = chatTopics.find((topic) =>
    topic.keywords.some((keyword) =>
      normalizedInput.includes(keyword.toLowerCase())
    )
  );

  return matchedTopic?.response || fallbackResponse;
}

export default function MachineChatbot() {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      from: "bot",
      text: "Hi! I can help you with services, paint packages, quotations, site visits, gallery, projects, painter registration, and contact details.",
    },
  ]);

  const latestMessageRef = useRef<HTMLDivElement | null>(null);
  const typingRef = useRef<HTMLDivElement | null>(null);
  const typingTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const quoteHref = pathname === "/" ? "#quote" : `${pathname}#quote`;

  function scrollToLatestMessage() {
    requestAnimationFrame(() => {
      if (typing) {
        typingRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
        });

        return;
      }

      latestMessageRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }

  useEffect(() => {
    scrollToLatestMessage();
  }, [messages, typing, open]);

  useEffect(() => {
    return () => {
      if (typingTimeoutRef.current) {
        clearTimeout(typingTimeoutRef.current);
      }
    };
  }, []);

  function closeWhenOutside(event: MouseEvent<HTMLDivElement>) {
    if (event.target === event.currentTarget) {
      setOpen(false);
    }
  }

  function replyWithDelay(userText: string, botResponse: string) {
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }

    setMessages((current) => [...current, { from: "user", text: userText }]);
    setTyping(true);

    typingTimeoutRef.current = setTimeout(() => {
      setMessages((current) => [...current, { from: "bot", text: botResponse }]);
      setTyping(false);
    }, 1200);
  }

  function handleQuickReply(topic: ChatTopic) {
    if (typing) return;

    replyWithDelay(topic.label, topic.response);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const userText = input.trim();

    if (!userText || typing) return;

    setInput("");
    replyWithDelay(userText, findResponse(userText));
  }

  return (
    <>
      {open && (
        <div
          onMouseDown={closeWhenOutside}
          className="fixed inset-0 z-[60] bg-transparent"
        >
          <div className="fixed bottom-24 right-5 top-[92px] flex w-[calc(100vw-40px)] max-w-[380px] flex-col overflow-hidden border border-[#043079]/10 bg-white shadow-2xl md:right-6">
            {/* HEADER */}
            <div className="shrink-0 bg-[#043079] px-5 py-4 text-white">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[10px] font-extrabold uppercase tracking-[0.24em] text-[#f5b400]">
                    The Machine Assistant
                  </p>

                  <h3 className="mt-1 text-lg font-black tracking-[-0.03em]">
                    How can we help?
                  </h3>
                </div>

                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="grid h-8 w-8 place-items-center border border-white/20 text-lg leading-none text-white transition hover:bg-white hover:text-[#043079]"
                  aria-label="Close chatbot"
                >
                  ×
                </button>
              </div>
            </div>

            {/* MESSAGES */}
            <div className="min-h-0 flex-1 space-y-3 overflow-y-auto bg-[#f8f8f5] p-4">
              {messages.map((message, index) => {
                const isLatestMessage = index === messages.length - 1;

                return (
                  <div
                    key={`${message.from}-${index}`}
                    ref={isLatestMessage ? latestMessageRef : null}
                    className={`max-w-[90%] scroll-mt-4 px-4 py-3 text-sm leading-6 ${
                      message.from === "bot"
                        ? "bg-white text-slate-700 shadow-sm"
                        : "ml-auto bg-[#043079] text-white"
                    }`}
                  >
                    {message.text}
                  </div>
                );
              })}

              {typing && (
                <div
                  ref={typingRef}
                  className="max-w-[90%] bg-white px-4 py-3 text-sm leading-6 text-slate-600 shadow-sm"
                >
                  <span className="font-semibold text-[#043079]">
                    The Machine Assistant
                  </span>{" "}
                  is typing...
                </div>
              )}
            </div>

            {/* QUICK TOPICS */}
            <div className="shrink-0 border-t border-[#043079]/10 bg-white px-3 py-3">
              <div className="flex gap-2 overflow-x-auto pb-1">
                {chatTopics.map((topic) => (
                  <button
                    key={topic.label}
                    type="button"
                    disabled={typing}
                    onClick={() => handleQuickReply(topic)}
                    className="shrink-0 border border-[#043079]/15 bg-white px-3 py-2 text-[10px] font-extrabold text-[#043079] transition hover:border-[#cc0f06] hover:text-[#cc0f06] disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {topic.label}
                  </button>
                ))}
              </div>
            </div>

            {/* INPUT */}
            <form
              onSubmit={handleSubmit}
              className="shrink-0 border-t border-[#043079]/10 bg-white p-3"
            >
              <div className="flex gap-2">
                <input
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  placeholder="Type a keyword or question..."
                  className="min-w-0 flex-1 border border-[#043079]/20 px-3 py-3 text-sm text-slate-900 outline-none transition focus:border-[#f5b400] focus:ring-1 focus:ring-[#f5b400]"
                />

                <button
                  type="submit"
                  disabled={typing || !input.trim()}
                  className="bg-[#cc0f06] px-4 py-3 text-[10px] font-extrabold uppercase tracking-[0.14em] text-white transition hover:bg-[#a90d06] disabled:cursor-not-allowed disabled:bg-slate-300"
                >
                  Send
                </button>
              </div>

              <a
                href={quoteHref}
                onClick={() => setOpen(false)}
                className="mt-3 inline-flex w-full items-center justify-center bg-[#043079] px-5 py-3 text-[10px] font-extrabold uppercase tracking-[0.14em] text-white transition hover:bg-[#f5b400] hover:text-[#043079]"
              >
                Open Request Form
              </a>
            </form>
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="fixed bottom-6 right-6 z-[55] flex h-12 w-12 flex-col items-center justify-center rounded-full bg-[#f5b400] text-[#043079] shadow-2xl shadow-yellow-500/30 transition hover:scale-105 hover:bg-white"
        aria-label="Open chatbot"
      >
        {open ? (
          <span className="text-xl font-black leading-none">×</span>
        ) : (
          <>
            <span className="text-[15px] leading-none">💬</span>
            <span className="mt-[1px] text-[8px] font-black uppercase leading-none tracking-[0.04em]">
              Chat
            </span>
          </>
        )}
      </button>
    </>
  );
}