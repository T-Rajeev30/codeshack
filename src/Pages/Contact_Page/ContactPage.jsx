import { useEffect, useRef } from "react";
import { gsap } from "gsap";
export default function ContactPage() {
  const pageRef = useRef(null);

  useEffect(() => {
    gsap.from(pageRef.current, {
      scale: 0.9,
      opacity: 0,
      duration: 0.6,
      ease: "power3.out",
    });
  }, []);

  return (
    <div
      ref={pageRef}
      className="min-h-screen bg-black text-white p-10 flex items-center justify-center"
    >
      <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left */}
        <div className="space-y-6">
          <h1 className="text-5xl font-bold leading-tight">
            CODESHACK
            <br />
            WHERE BUILDERS GROW
          </h1>

          <p className="text-lg text-gray-300 max-w-md">
            Code is craft. Build fast. Break limits. Collaborate. Ship real
            products.
          </p>

          <div className="space-y-4">
            <ContactItem icon="📩" label="info@stavrossymeonidis.dev" />
            <ContactItem icon="🔗" label="stav-symeonidis" />
            <ContactItem icon="🐱" label="@techaras" />
          </div>
        </div>

        {/* Right */}
        <div className="space-y-5">
          <Input label="Name" placeholder="John Doe" />
          <Input label="Email" placeholder="john@example.com" type="email" />
          <TextArea
            label="Message"
            placeholder="Tell me about your project..."
          />

          {/* ✅ Neon + Rainbow Animated Button */}
          <button className="relative w-full py-3 rounded-lg font-semibold text-black overflow-hidden group">
            <span className="relative z-20">SEND A MESSAGE</span>

            {/* Neon Outer Glow */}
            <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-pink-500 via-yellow-400 via-green-400 via-blue-500 via-purple-500 to-pink-500 blur-md opacity-60 group-hover:opacity-100 transition duration-300 animate-neonGlow"></span>

            {/* Rainbow moving border */}
            <span className="absolute inset-0 rounded-lg p-[2px] bg-gradient-to-r from-pink-500 via-yellow-400 via-green-400 via-blue-500 via-purple-500 to-pink-500 bg-[length:300%_300%] animate-rainbowBorder"></span>

            {/* Inner button background */}
            <span className="absolute inset-[2px] rounded-lg bg-white"></span>
          </button>
        </div>
      </div>
    </div>
  );
}

function ContactItem({ icon, label }) {
  return (
    <div className="flex items-center gap-4 bg-zinc-900 p-4 rounded-lg border border-zinc-700">
      <div className="text-xl">{icon}</div>
      <div className="flex-1 text-white">{label}</div>
      <div className="text-gray-400">⧉</div>
    </div>
  );
}

function Input({ label, placeholder, type = "text" }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm text-gray-400">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="bg-zinc-900 border border-zinc-700 p-3 rounded-lg text-white"
      />
    </div>
  );
}

function TextArea({ label, placeholder }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm text-gray-400">{label}</label>
      <textarea
        rows="6"
        placeholder={placeholder}
        className="bg-zinc-900 border border-zinc-700 p-3 rounded-lg text-white"
      />
    </div>
  );
}
