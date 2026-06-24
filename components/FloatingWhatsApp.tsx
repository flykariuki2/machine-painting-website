"use client";

export default function FloatingWhatsApp() {
  const message = encodeURIComponent(
    "Hello The Machine Painting Co Ltd, I would like to make an inquiry."
  );

  return (
    <a
      href={`https://wa.me/254785285828?text=${message}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with The Machine Painting Co Ltd on WhatsApp"
      className="fixed bottom-6 left-6 z-[55] grid h-12 w-12 place-items-center rounded-full bg-[#25d366] text-lg font-black text-white shadow-2xl shadow-green-500/30 transition hover:scale-105"
    >
      ☎
    </a>
  );
}