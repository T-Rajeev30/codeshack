import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const menuButtonRef = useRef(null);
  const dotsRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      gsap.fromTo(
        dropdownRef.current,
        {
          opacity: 0,
          y: -20,
          scale: 0.95,
          filter: "blur(10px)",
          display: "none",
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          display: "block",
          duration: 0.6,
          ease: "power1.out",
        }
      );

      // Rotate dots 90 degrees clockwise
      if (dotsRef.current) {
        gsap.to(dotsRef.current, {
          rotation: 90,
          duration: 0.6,
          ease: "power1.out",
        });
      }
    } else {
      gsap.to(dropdownRef.current, {
        opacity: 0,
        y: -20,
        scale: 0.95,
        filter: "blur(10px)",
        duration: 0.4,
        ease: "power1.in",
        onComplete: () => {
          if (dropdownRef.current) {
            dropdownRef.current.style.display = "none";
          }
        },
      });

      // Rotate dots back to 0 degrees
      if (dotsRef.current) {
        gsap.to(dotsRef.current, {
          rotation: 0,
          duration: 0.4,
          ease: "power1.in",
        });
      }
    }
  }, [isOpen]);

  return (
    <nav className="fixed top-8 left-0 right-0 z-50 flex justify-center items-start pointer-events-none">
      <div
        className="relative pointer-events-auto"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <div
          className={`relative bg-gradient-to-b from-white/5 via-white/3 to-white/5 backdrop-blur-xl px-12 py-4 flex items-center justify-between min-w-[450px] max-w-[600px] border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.25)] ${
            isOpen ? "rounded-t-full rounded-b-none border-b-0" : "rounded-full"
          } transition-all duration-300`}
          style={{
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.03) 50%, rgba(255,255,255,0.05) 100%)",
            boxShadow:
              "0 8px 32px 0 rgba(0, 0, 0, 0.25), inset 0 1px 0 0 rgba(255, 255, 255, 0.1)",
          }}
        >
          <div className="text-white font-semibold text-lg tracking-wide drop-shadow-lg">
            CODESHACK
          </div>
          <div
            ref={dotsRef}
            className="grid grid-cols-2 gap-1 cursor-pointer w-4 h-4 origin-center"
            style={{ transformOrigin: "center center" }}
          >
            <div className="w-1 h-1 bg-white rounded-full"></div>
            <div className="w-1 h-1 bg-white rounded-full"></div>
            <div className="w-1 h-1 bg-white rounded-full"></div>
            <div className="w-1 h-1 bg-white rounded-full"></div>
          </div>
        </div>

        {/* Dropdown Menu */}
        <div
          ref={dropdownRef}
          className="absolute top-full left-0 backdrop-blur-2xl rounded-b-2xl pt-8 pb-6 px-6 min-w-[450px] max-w-[600px] border border-white/10 border-t-0 shadow-[0_8px_32px_0_rgba(0,0,0,0.35)]"
          style={{
            display: "none",
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.05) 50%, rgba(255,255,255,0.08) 100%)",
            boxShadow:
              "0 8px 32px 0 rgba(0, 0, 0, 0.35), inset 0 1px 0 0 rgba(255, 255, 255, 0.15), inset 0 -1px 0 0 rgba(255, 255, 255, 0.08)",
            backdropFilter: "blur(20px) saturate(180%)",
          }}
        >
          <ul className="space-y-6">
            <li>
              <a
                href="#"
                className="text-white hover:text-pink-400 transition-all duration-300 flex items-center justify-between group"
              >
                <span className="font-bold text-xl uppercase tracking-wide drop-shadow-md group-hover:translate-x-1 transition-transform duration-300">
                  HOME
                </span>
                <span className="text-white/50 text-sm font-light group-hover:text-white/80 transition-colors duration-300">
                  01
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white hover:text-pink-400 transition-all duration-300 flex items-center justify-between group"
              >
                <span className="font-bold text-xl uppercase tracking-wide drop-shadow-md group-hover:translate-x-1 transition-transform duration-300">
                  SERVICES
                </span>
                <span className="text-white/50 text-sm font-light group-hover:text-white/80 transition-colors duration-300">
                  02
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white hover:text-pink-400 transition-all duration-300 flex items-center justify-between group"
              >
                <span className="font-bold text-xl uppercase tracking-wide drop-shadow-md group-hover:translate-x-1 transition-transform duration-300">
                  CASE STUDIES
                </span>
                <span className="text-white/50 text-sm font-light group-hover:text-white/80 transition-colors duration-300">
                  03
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white hover:text-pink-400 transition-all duration-300 flex items-center justify-between group"
              >
                <span className="font-bold text-xl uppercase tracking-wide drop-shadow-md group-hover:translate-x-1 transition-transform duration-300">
                  FINTECH EXPERTISE
                </span>
                <span className="text-white/50 text-sm font-light group-hover:text-white/80 transition-colors duration-300">
                  04
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white hover:text-pink-400 transition-all duration-300 flex items-center justify-between group"
              >
                <span className="font-bold text-xl uppercase tracking-wide drop-shadow-md group-hover:translate-x-1 transition-transform duration-300">
                  LET'S CONNECT
                </span>
                <span className="text-white/50 text-sm font-light group-hover:text-white/80 transition-colors duration-300">
                  05
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
