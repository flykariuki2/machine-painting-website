"use client";

export default function FloatingWhatsApp() {
  const message = encodeURIComponent(
    "Hello The Machine Painting Co Ltd, I would like to make an inquiry.",
  );

  return (
    <a
      href={`https://wa.me/254785285828?text=${message}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with The Machine Painting Co Ltd on WhatsApp"
      title="Chat on WhatsApp"
      className="fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] left-5 z-[60] grid h-[52px] w-[52px] place-items-center rounded-full bg-[#25D366] text-white shadow-[0_14px_35px_rgba(37,211,102,0.35)] transition duration-200 hover:-translate-y-1 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#25D366]"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 32 32"
        className="h-7 w-7 fill-current"
      >
        <path d="M16.04 3C8.85 3 3 8.72 3 15.76c0 2.25.6 4.45 1.74 6.38L3 29l7.04-1.8a13.2 13.2 0 0 0 6 1.45h.01C23.23 28.65 29 22.94 29 15.9 29 8.85 23.22 3 16.04 3Zm0 23.5a11 11 0 0 1-5.6-1.52l-.4-.24-4.18 1.07 1.12-4.05-.26-.42a10.46 10.46 0 0 1-1.63-5.58c0-5.85 4.9-10.61 10.94-10.61 6.04 0 10.95 4.8 10.95 10.75 0 5.84-4.9 10.6-10.94 10.6Zm6-7.94c-.33-.16-1.95-.94-2.25-1.05-.3-.1-.52-.16-.74.16-.22.32-.85 1.05-1.04 1.27-.19.21-.38.24-.71.08-.33-.16-1.39-.5-2.65-1.6a9.8 9.8 0 0 1-1.83-2.23c-.2-.32-.02-.49.14-.65.15-.15.33-.38.5-.57.16-.19.21-.32.32-.54.11-.21.05-.4-.03-.57-.08-.16-.74-1.74-1.01-2.39-.27-.64-.54-.55-.74-.56h-.63c-.22 0-.58.08-.88.4-.3.33-1.15 1.1-1.15 2.68s1.18 3.1 1.34 3.32c.17.22 2.32 3.47 5.62 4.86.79.33 1.4.53 1.88.68.79.24 1.5.21 2.07.13.63-.09 1.95-.78 2.23-1.53.27-.76.27-1.4.19-1.54-.08-.13-.3-.21-.63-.37Z" />
      </svg>
    </a>
  );
}