import { useEffect, useRef } from "react";
import { gsap } from "gsap";

// ---------------------- MAIN CONTACT PAGE COMPONENT ----------------------
export default function ContactPage({ dark = true }) {
  const pageRef = useRef(null);

  // Entrance Animation
  useEffect(() => {
    gsap.from(pageRef.current, {
      y: 20, // Subtle drop-in animation
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    });
  }, []);

  // Determine colors based on 'dark' prop
  const textColor = dark ? "text-white" : "text-gray-900";
  const bgColor = dark ? "bg-gray-950" : "bg-gray-50";
  // The form background is now cleaner, less "glassy"
  const formBg = dark
    ? "bg-gray-800/80 backdrop-blur-sm"
    : "bg-white/90 backdrop-blur-sm";
  const formBorder = dark ? "border-gray-700" : "border-gray-200";

  return (
    <div
      ref={pageRef}
      // Clean background applied directly
      className={`relative min-h-screen w-full ${bgColor} pt-24 pb-32 transition-colors duration-500`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <header className="text-center mb-16">
          <h1
            className={`text-6xl md:text-7xl font-extrabold ${textColor} mb-4`}
          >
            Get in Touch
          </h1>
          <p
            className={`text-xl max-w-2xl mx-auto ${
              dark ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Have a project idea, a question, or just want to say hi? Send us a
            message!
          </p>
        </header>

        {/* ---------------------- CONTENT GRID ---------------------- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* LEFT SIDE - INFO */}
          <div className="space-y-12">
            <h2 className={`text-3xl font-bold ${textColor}`}>
              CODESHACK: Where Builders Grow
            </h2>
            <p
              className={`text-lg ${dark ? "text-gray-400" : "text-gray-700"}`}
            >
              Code is craft. Build fast. Break limits. Collaborate. Ship real
              products. We're always looking to connect with innovative people
              and interesting projects.
            </p>

            <div className="space-y-6">
              <ContactItem
                dark={dark}
                icon="📧"
                label="contact@codeshack.dev"
                description="Email us for general inquiries."
              />
              <ContactItem
                dark={dark}
                icon="🌐"
                label="codeshack.dev"
                description="Visit our main website."
              />
              <ContactItem
                dark={dark}
                icon="💻"
                label="@codeshack"
                description="Follow us on GitHub and social media."
              />
            </div>
          </div>

          {/* RIGHT SIDE - FORM */}
          <div
            className={`
              p-8 md:p-10 
              rounded-xl 
              border 
              ${formBg} 
              ${formBorder}
              shadow-xl 
              shadow-indigo-500/10 dark:shadow-indigo-500/5 
            `}
          >
            <form className="space-y-6">
              <Input dark={dark} label="Name" placeholder="Jane Doe" />
              <Input
                dark={dark}
                label="Email"
                placeholder="jane@example.com"
                type="email"
              />
              <TextArea
                dark={dark}
                label="Message"
                placeholder="Tell us about your idea..."
              />

              <button
                type="submit"
                className="w-full py-3 mt-4 rounded-lg font-semibold text-white bg-indigo-600 hover:bg-indigo-700 transition duration-300 shadow-lg shadow-indigo-500/50 focus:outline-none focus:ring-4 focus:ring-indigo-500/50"
              >
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

// ---------------------- SUB-COMPONENTS ----------------------

function ContactItem({ dark, icon, label, description }) {
  const labelColor = dark ? "text-white" : "text-gray-900";
  const descColor = dark ? "text-gray-400" : "text-gray-600";
  const hoverBg = dark ? "hover:bg-gray-800" : "hover:bg-gray-100";

  return (
    <div
      className={`flex items-start gap-4 p-4 rounded-lg transition-colors duration-200 ${hoverBg} cursor-pointer`}
    >
      <div className="text-2xl pt-1">{icon}</div>
      <div className="flex-1">
        <div className={`font-semibold text-lg ${labelColor}`}>{label}</div>
        <div className={`text-sm ${descColor}`}>{description}</div>
      </div>
    </div>
  );
}

function Input({ dark, label, placeholder, type = "text" }) {
  const inputBg = dark ? "bg-gray-700/50" : "bg-white";
  const inputBorder = dark ? "border-gray-600" : "border-gray-300";
  const focusRing = dark ? "focus:ring-indigo-500" : "focus:ring-indigo-600";
  const textColor = dark ? "text-white" : "text-gray-900";

  return (
    <div className="flex flex-col space-y-2">
      <label
        className={`text-sm font-medium ${
          dark ? "text-gray-300" : "text-gray-700"
        }`}
      >
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className={`
          w-full p-3 rounded-lg 
          ${inputBg} 
          ${inputBorder} 
          border 
          ${textColor}
          placeholder:text-gray-400 dark:placeholder:text-gray-500
          transition duration-300
          focus:outline-none focus:border-indigo-500 focus:ring-1 ${focusRing}
        `}
      />
    </div>
  );
}

function TextArea({ dark, label, placeholder }) {
  const inputBg = dark ? "bg-gray-700/50" : "bg-white";
  const inputBorder = dark ? "border-gray-600" : "border-gray-300";
  const focusRing = dark ? "focus:ring-indigo-500" : "focus:ring-indigo-600";
  const textColor = dark ? "text-white" : "text-gray-900";

  return (
    <div className="flex flex-col space-y-2">
      <label
        className={`text-sm font-medium ${
          dark ? "text-gray-300" : "text-gray-700"
        }`}
      >
        {label}
      </label>
      <textarea
        rows="5"
        placeholder={placeholder}
        className={`
          w-full p-3 rounded-lg 
          ${inputBg} 
          ${inputBorder} 
          border 
          ${textColor}
          placeholder:text-gray-400 dark:placeholder:text-gray-500
          transition duration-300
          focus:outline-none focus:border-indigo-500 focus:ring-1 ${focusRing}
        `}
      ></textarea>
    </div>
  );
}
