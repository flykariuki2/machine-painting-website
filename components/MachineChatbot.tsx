"use client";

import { Bot, Send, X } from "lucide-react";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type FormEvent,
} from "react";

interface Message {
  id: string;
  sender: "bot" | "user";
  text: string;
  time: string;
}

interface ChatRule {
  keywords: string[];
  response: string;
}

const formatTime = () =>
  new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

const fallbackResponse =
  "I do not have enough confirmed information to answer that accurately. Please use the green WhatsApp button to speak directly with The Machine Painting Co Ltd team on 0785 285 828.";

const chatRules: ChatRule[] = [
  {
    keywords: ["hello", "hi", "hey", "jambo", "good morning", "good afternoon"],
    response:
      "Jambo! I can help with painting services, paint packages, quotations, site visits, project videos, the gallery, painter registration, and company contact details. What would you like to know?",
  },
  {
    keywords: [
      "what do you do",
      "what does the company do",
      "services",
      "service",
      "painting services",
    ],
    response:
      "The Machine Painting Co Ltd provides interior painting, exterior painting, machine spray painting, commercial painting, renovation painting, wall skimming, surface preparation, repairs, finishing, and professional project handover.",
  },
  {
    keywords: [
      "machine spray painting",
      "spray painting",
      "spray paint",
      "machine painting",
    ],
    response:
      "Machine spray painting uses professional spray equipment to apply paint efficiently and evenly. It is especially suitable for larger surfaces and helps achieve smoother, more consistent coverage with fewer visible brush marks.",
  },
  {
    keywords: ["interior painting", "inside painting", "indoor painting"],
    response:
      "Interior painting covers homes, rooms, apartments, offices, and interior commercial spaces. The team focuses on surface preparation, smooth application, clean edges, consistent coverage, and a neat handover.",
  },
  {
    keywords: ["exterior painting", "outside painting", "external walls"],
    response:
      "Exterior painting is available for homes, apartments, buildings, offices, and commercial properties. The work is planned around surface condition, preparation, access, weather exposure, finish expectations, and durability.",
  },
  {
    keywords: ["commercial painting", "warehouse", "factory", "office painting"],
    response:
      "Commercial painting is available for offices, apartments, buildings, warehouses, factories, and business premises. Machine spray painting may be used where suitable to improve speed and consistency across larger surfaces.",
  },
  {
    keywords: ["renovation", "repainting", "makeover", "property refresh"],
    response:
      "The company supports renovation painting, property refreshes, repainting work, office conversions, apartment makeovers, surface repairs, preparation, finishing, and clean project handover.",
  },
  {
    keywords: [
      "wall skimming",
      "skimming",
      "surface preparation",
      "prepare walls",
      "wall repair",
      "primer",
    ],
    response:
      "Surface preparation may include cleaning, smoothing, wall skimming, repairs, protection of surrounding areas, and priming where required. Proper preparation helps produce a cleaner and more durable final finish.",
  },
  {
    keywords: [
      "residential",
      "home",
      "house",
      "apartment",
      "villa",
      "townhouse",
    ],
    response:
      "Yes. The company handles residential projects including homes, rooms, apartments, villas, townhouses, exterior walls, interior spaces, repainting, and renovation projects.",
  },
  {
    keywords: ["paint packages", "packages", "package options"],
    response:
      "The main paint packages are One Day Painting, Commercial Painting, and Paint for Free. The most suitable option depends on the project size, property type, surface condition, preparation work, timeline, access, and expected finish.",
  },
  {
    keywords: ["one day painting", "one day package", "fast painting"],
    response:
      "One Day Painting is intended for suitable quick-refresh projects where speed and neatness matter. It can work for rooms, homes, or offices, subject to the project size, surface condition, preparation required, and site assessment.",
  },
  {
    keywords: ["paint for free", "free painting", "paint free"],
    response:
      "Paint for Free is a flexible project option discussed during quotation or site assessment. The final arrangement depends on the project scope, requirements, eligibility, and approval. Please contact the team on WhatsApp for the exact terms.",
  },
  {
    keywords: [
      "commercial package",
      "business package",
      "commercial painting package",
    ],
    response:
      "The Commercial Painting package supports offices, apartments, buildings, warehouses, factories, and other business premises. The scope may include interior work, exterior work, preparation, and machine spray painting where suitable.",
  },
  {
    keywords: [
      "quote",
      "quotation",
      "estimate",
      "pricing",
      "price",
      "cost",
      "how much",
      "charges",
      "rate",
    ],
    response:
      "You can request a working estimate or detailed quotation through the website quotation form. Final pricing depends on measurements, surface condition, preparation work, access, paint system, location, finish requirements, and project scope.",
  },
  {
    keywords: ["calculator", "estimator", "instant estimate", "budget"],
    response:
      "The homepage includes an instant cost estimator for early budget guidance. Enter the approximate wall dimensions, surface type, and finish type. The displayed amount is a working estimate; final pricing is confirmed after reviewing the actual project.",
  },
  {
    keywords: ["site visit", "site assessment", "visit my site", "inspection"],
    response:
      "Yes. You can book a site visit before the final quotation. The assessment helps the team review measurements, access, surface condition, preparation requirements, project scope, and the expected finish.",
  },
  {
    keywords: [
      "quote and site visit",
      "quotation and site visit",
      "both quotation and site visit",
    ],
    response:
      "Yes. The website form supports both quotation requests and site-visit bookings. You can select the request type and provide your service, location, preferred date, contact details, and project information.",
  },
  {
    keywords: [
      "process",
      "how it works",
      "painting process",
      "project process",
      "steps",
    ],
    response:
      "The standard process is: consultation, quotation or site assessment, surface preparation, paint application, final inspection, and clean handover. The exact process may vary according to the surface and project scope.",
  },
  {
    keywords: ["how long", "timeline", "duration", "turnaround", "completion"],
    response:
      "Project duration depends on the property size, surface condition, preparation work, access, weather, paint system, and required finish. Suitable quick-refresh projects may qualify for One Day Painting, while larger renovations require a longer schedule.",
  },
  {
    keywords: ["gallery", "before and after", "transformations", "photos"],
    response:
      "The Gallery page contains before-and-after transformations showing exterior repaints, residential refreshes, wall-finish improvements, multi-angle projects, and completed property repaint results.",
  },
  {
    keywords: [
      "projects",
      "project videos",
      "videos",
      "youtube",
      "portfolio",
    ],
    response:
      "The Projects page includes video case studies such as Westlands Office Renovations, Kihingo Village Kitsuru Villa, and Kileleshwa Apartment 360 Renovations. Select a project card to open its YouTube video.",
  },
  {
    keywords: ["westlands project", "westlands office"],
    response:
      "The Westlands Office Renovations project involved subdividing part of an existing hall to create an additional office space. The covered area was approximately 288 square metres.",
  },
  {
    keywords: ["kihingo", "kitsuru villa", "kitsuru project"],
    response:
      "The Kihingo Village Kitsuru project involved renovation and painting work on a modern 5,500-square-foot, four-bedroom ensuite townhouse on approximately 0.7 acres. The work took almost eight weeks.",
  },
  {
    keywords: ["kileleshwa", "apartment 360", "kileleshwa apartment"],
    response:
      "The Kileleshwa Apartment 360 Renovations project included kitchen cabinets, granite countertops and floors, bathroom tiling, ceiling improvements, floor varnishing, and final painting works.",
  },
  {
    keywords: [
      "join us",
      "career",
      "careers",
      "job",
      "painter registration",
      "register as a painter",
      "work with you",
    ],
    response:
      "Painters and skilled crew members can register through the Join Us page. Applicants provide their details and select exactly two skill areas during registration.",
  },
  {
    keywords: ["location", "address", "office", "where are you located"],
    response:
      "The head office is at Kasuku Villas, Umoja Road off Magadi Road, Nairobi, Kenya.",
  },
  {
    keywords: [
      "phone",
      "telephone",
      "call",
      "contact number",
      "whatsapp number",
      "contact details",
    ],
    response:
      "WhatsApp or call 0785 285 828. Other telephone contacts are +254 719 383 020 and +254 720 945 088. You can also use the green WhatsApp button on this page.",
  },
  {
    keywords: ["email", "email address"],
    response:
      "You can email info@themachinepainting.com or themachinepainting@gmail.com.",
  },
  {
    keywords: ["whatsapp", "speak to someone", "human", "agent", "representative"],
    response:
      "Use the green WhatsApp button to speak directly with the team, or contact them on 0785 285 828.",
  },
  {
    keywords: ["nairobi", "service area", "areas covered", "where do you work"],
    response:
      "The company is based in Nairobi and handles residential, commercial, and renovation projects. For confirmation that your specific location is covered, please send the location through WhatsApp on 0785 285 828.",
  },
  {
    keywords: ["opening hours", "working hours", "what time", "open today"],
    response:
      "The website does not publish confirmed operating hours. Please use the green WhatsApp button or contact 0785 285 828 to confirm availability.",
  },
  {
    keywords: ["paint brand", "paint brands", "colour", "color", "which paint"],
    response:
      "Paint selection depends on the surface, location, expected finish, durability requirements, and budget. Please share the project details on WhatsApp so the team can recommend an appropriate paint system.",
  },
  {
    keywords: ["thank you", "thanks", "asante"],
    response:
      "You’re welcome. You can ask another question or use the green WhatsApp button whenever you are ready to discuss your project directly with the team.",
  },
];

const normalizeText = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s]/gu, " ")
    .replace(/\s+/g, " ")
    .trim();

const getBotResponse = (question: string) => {
  const normalizedQuestion = normalizeText(question);

  const matchingRule = chatRules
    .map((rule) => ({
      rule,
      score: rule.keywords.reduce((total, keyword) => {
        const normalizedKeyword = normalizeText(keyword);

        if (!normalizedQuestion.includes(normalizedKeyword)) {
          return total;
        }

        return total + normalizedKeyword.split(" ").length;
      }, 0),
    }))
    .filter((match) => match.score > 0)
    .sort((first, second) => second.score - first.score)[0];

  return matchingRule?.rule.response ?? fallbackResponse;
};

export default function MachineChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");

  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      sender: "bot",
      text: "Jambo! Welcome to The Machine Painting Co. I can help with services, packages, quotations, site visits, projects, gallery work, painter registration, and contact details. How may I assist you?",
      time: formatTime(),
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const responseTimerRef = useRef<number | null>(null);

  const scrollToLatestMessage = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    if (isOpen) {
      scrollToLatestMessage();
    }
  }, [isOpen, messages, scrollToLatestMessage]);

  useEffect(() => {
    return () => {
      if (responseTimerRef.current !== null) {
        window.clearTimeout(responseTimerRef.current);
      }
    };
  }, []);

  const handleSend = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const cleanInput = input.trim();

    if (!cleanInput) {
      return;
    }

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      sender: "user",
      text: cleanInput,
      time: formatTime(),
    };

    setMessages((current) => [...current, userMessage]);
    setInput("");

    if (responseTimerRef.current !== null) {
      window.clearTimeout(responseTimerRef.current);
    }

    responseTimerRef.current = window.setTimeout(() => {
      const botResponse: Message = {
        id: `bot-${Date.now()}`,
        sender: "bot",
        text: getBotResponse(cleanInput),
        time: formatTime(),
      };

      setMessages((current) => [...current, botResponse]);
      responseTimerRef.current = null;
    }, 800);
  };

  return (
    <div className="fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-5 z-[60]">
      {!isOpen && (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          aria-label="Open Machine Assistant chat"
          aria-expanded="false"
          title="Machine Assistant"
          className="flex h-[56px] w-[56px] flex-col items-center justify-center rounded-full bg-[#f5b400] text-[#043079] shadow-[0_14px_35px_rgba(245,180,0,0.35)] transition duration-200 hover:-translate-y-1 hover:scale-105 hover:bg-[#ffc62f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f5b400]"
        >
          <Bot aria-hidden="true" className="h-5 w-5" />

          <span className="mt-0.5 text-[7px] font-black uppercase leading-none tracking-[0.08em]">
            Chat
          </span>
        </button>
      )}

      {isOpen && (
        <section
          aria-label="Machine Assistant chat"
          className="flex h-[min(500px,calc(100svh-7rem))] w-[calc(100vw-2rem)] max-w-sm flex-col overflow-hidden rounded-2xl border border-[#043079]/15 bg-white shadow-2xl"
        >
          <header className="flex items-center justify-between border-b border-white/10 bg-[#043079] p-4 text-white">
            <div className="flex items-center gap-3">
              <div className="grid h-9 w-9 place-items-center rounded-full bg-[#f5b400] text-[#043079]">
                <Bot aria-hidden="true" className="h-5 w-5" />
              </div>

              <div>
                <h2 className="text-sm font-extrabold">
                  Machine Assistant
                </h2>

                <p className="mt-0.5 text-[10px] font-semibold text-white/70">
                  Online assistance
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close Machine Assistant"
              className="grid h-9 w-9 place-items-center rounded-full text-white/75 transition hover:bg-white/10 hover:text-white"
            >
              <X aria-hidden="true" className="h-5 w-5" />
            </button>
          </header>

          <div className="flex-1 space-y-3 overflow-y-auto bg-slate-50 p-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={[
                  "flex flex-col",
                  message.sender === "user"
                    ? "items-end"
                    : "items-start",
                ].join(" ")}
              >
                <div
                  className={[
                    "max-w-[84%] rounded-xl px-3.5 py-2.5 text-[13px] leading-5",
                    message.sender === "user"
                      ? "rounded-br-none bg-[#043079] text-white"
                      : "rounded-bl-none border border-slate-200 bg-white text-slate-700 shadow-sm",
                  ].join(" ")}
                >
                  {message.text}
                </div>

                <span className="mt-1 px-1 text-[9px] text-slate-400">
                  {message.time}
                </span>
              </div>
            ))}

            <div ref={messagesEndRef} />
          </div>

          <form
            onSubmit={handleSend}
            className="flex gap-2 border-t border-slate-200 bg-white p-3"
          >
            <label htmlFor="machine-chat-input" className="sr-only">
              Message
            </label>

            <input
              id="machine-chat-input"
              type="text"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Ask about painting or pricing..."
              autoComplete="off"
              className="min-w-0 flex-1 rounded-lg border border-slate-200 px-3 py-2.5 text-sm text-[#043079] outline-none transition focus:border-[#f5b400]"
            />

            <button
              type="submit"
              aria-label="Send message"
              className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-[#043079] text-white transition hover:bg-[#0453b1]"
            >
              <Send aria-hidden="true" className="h-4 w-4" />
            </button>
          </form>
        </section>
      )}
    </div>
  );
}