import React, { useMemo } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

/* ========= Codeshack Palette ========= */
const CS = {
  BLACK: "#000000",
  WHITE: "#FFFFFF",
  PINK: "#FF4FA3",
  LIGHT_PINK: "#F2A6FF",
  BLUE: "#3A66FF",
  DARK_BLUE: "#1A2B8F",
  ORANGE: "#F7931A",
};

/* ========= Unified Team List ========= */
const TEAM_MEMBERS = [
  // ===== Managers =====
  {
    name: "Saurabh Kumar Singh",
    group: "Managers",
    label: "Lead Manager",
    avatarUrl: "/TeamMembers/Saurabh.jpg",
    skills: "Full Stack",
    linkedin: "https://www.linkedin.com/in/sau1606/",
  },
  {
    name: "Shambhavi Kashyap",
    group: "Managers",
    label: "Lead Manager",
    avatarUrl: "/TeamMembers/Shambhavi.jpg",
    skills: "C++ · Golang · Typescript · DSA",
    linkedin: "https://www.linkedin.com/in/shambhavi0325",
  },
  {
    name: "Shishir Govinda M",
    group: "Managers",
    label: "Lead Manager",
    avatarUrl: "/TeamMembers/Shishir.jpg",
    skills:
      "React Native · Node.js · Git · DBMS · Operating Systems · Computer Networks",
    linkedin: "https://www.linkedin.com/in/shishir-govinda-m/",
  },
  {
    name: "Prajna Hegde",
    group: "Managers",
    label: "Lead Manager",
    avatarUrl: "/TeamMembers/Prajna.png",
    skills: "MERN · Git · DBMS · Computer Networks",
    linkedin: "https://www.linkedin.com/in/prajnahegde7/",
  },
  {
    name: "Murali Manohar MGA",
    group: "Managers",
    label: "Core Manager",
    avatarUrl: "/TeamMembers/Murali.jpeg",
    skills:
      "React Native · Node.js · Git · DBMS · Operating Systems · Computer Networks",
    linkedin: "https://www.linkedin.com/in/shishir-govinda-m/",
  },
  {
    name: "Suparn Nayak",
    group: "Managers",
    label: "Core Manager",
    avatarUrl: "/TeamMembers/Suparn.jpg",
    skills: "AI/ML · DSA",
    linkedin: "https://www.linkedin.com/in/suparn-nayak-69aa27297/",
  },
  {
    name: "Ankur Pathak",
    group: "Managers",
    label: "Core Manager",
    avatarUrl: "/TeamMembers/Ankur.jpg",
    skills:
      "React Native · Node.js · Git · DBMS · Operating Systems · Computer Networks",
    linkedin: "https://www.linkedin.com/in/ankur1226/",
  },
  {
    name: "Shivarudra M S",
    group: "Managers",
    label: "Core Manager",
    avatarUrl: "/TeamMembers/Shiv.jpg",
    skills: "Cybersecurity · Python · ML · Fintech",
    linkedin: "https://www.linkedin.com/in/shivarudra-m-s-4538a1221",
  },

  // ===== Technical =====
  {
    name: "Rishabh Kumar",
    title: "Backend · System Engineering · Cloud · DevOps",
    group: "Technical",
    label: "Lead Technical",
    avatarUrl: "/TeamMembers/Rishabh.jpg",
    skills: "Backend · System Engineering · Cloud · DevOps",
    linkedin: "https://www.linkedin.com/in/rishabh-kumar-438751207",
  },
  {
    name: "Bharath G P",
    title: "Backend · System Engineering · Cloud · DevOps",
    group: "Technical",
    label: "Lead Technical",
    avatarUrl: "/TeamMembers/Bharath.jpg",
    skills: "Python · SQL · Machine Learning · Agentic Ai · Cloud Computing",
    linkedin: "https://www.linkedin.com/in/bharathguddadar/",
  },
  {
    name: "Adrian Richard",
    title: "App Developer ",
    group: "Technical",
    label: "Lead Technical",
    avatarUrl: "/TeamMembers/ad.jpg",
    skills: "Flutter · Firebase · SQL · Kotlin · C++",
    linkedin: "https://www.linkedin.com/in/adrian-richard-a93951281/",
  },
  {
    name: "Raghavendra S H",
    title: "Low level programming, app development ",
    group: "Technical",
    label: "Lead Technical",
    avatarUrl: "/TeamMembers/Rag.jpg",
    skills: "Low level programming · App development ",
    linkedin: "https://www.linkedin.com/in/bharathguddadar/",
  },
  {
    name: "L D Supreeth Raj",
    title: "App Developer | Flutter",
    group: "Technical",
    label: "Core Technical",
    avatarUrl: "/TeamMembers/Supreeth.jpg",
    skills: "Flutter · DSA with C++",
    linkedin: "https://www.linkedin.com/in/supreeth-raj-42157929a",
  },
  {
    name: "Varsha K N",
    title: "Web Development | UI/UX | Gen AI",
    group: "Technical",
    label: "Core Technical",
    avatarUrl: "/TeamMembers/Varsha.jpg",
    skills: "Web Development · UI/UX · Gen AI",
    linkedin: "https://www.linkedin.com/in/varsha-k-n-b9b33625b",
  },
  {
    name: "Rajeev Tiwari",
    title: "FullStack Web Developer, Python Robotics Developer",
    group: "Technical",
    label: "Core Technical",
    avatarUrl: "/TeamMembers/Rajeev.jpg",
    skills:
      "MERN Stack · DSA C++ · Robotics (ROS2) · Drone Development · 3D Design & Printing",
    linkedin: "https://www.linkedin.com/in/rajeev-tiwari",
  },
  {
    name: "Anurag Mehta",
    title: "App Developer | Flutter",
    group: "Technical",
    label: "Core Technical",
    avatarUrl: "/TeamMembers/Anurag.jpg",
    skills: "Flutter · Firebase · MERN · OpenCV · Python",
    linkedin: "https://www.linkedin.com/in/iam-anuragmehta/",
  },
  {
    name: "Sanya Sahu",
    title: "Frontend Developer | Django, Gen AI",
    group: "Technical",
    label: "Core Technical",
    avatarUrl: "/TeamMembers/Sanya.jpg",
    skills: "Django · Python · Gen AI",
    linkedin: "https://www.linkedin.com/in/sahu-sanya",
  },
  {
    name: "Deepanshu Pathak",
    title: "Software Developer | Cloud ",
    group: "Technical",
    label: "Core Technical",
    avatarUrl: "/TeamMembers/Deepanshu.jpg",
    skills: " Cloud  · Software Developer",
    linkedin:
      "https://www.linkedin.com/in/deepanshu-pathak-a4a29823b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },

  // ===== Design =====
  {
    name: "Isha Sinha",
    group: "Design",
    label: "Lead Design",
    avatarUrl: "/TeamMembers/Isha.png",
    skills: "Canva · Figma · C++ · UI/UX · Graphic Designing · Cloud Computing",
    linkedin: "https://www.linkedin.com/in/isha-sinha18/",
  },
  {
    name: "Aishwarya S Biradar",
    group: "Design",
    label: "Lead Design",
    avatarUrl: "/TeamMembers/Aish.png",
    skills: "Canva · Figma · C++ · UI/UX · Graphic Designing · Cloud Computing",
    linkedin: "https://www.linkedin.com/in/aishwarya-s-biradar-54582a281/",
  },

  {
    name: "Nidhi Rathnakar",
    group: "Design",
    label: "Core Design",
    avatarUrl: "/TeamMembers/Nidhi.jpeg",
    skills:
      "Figma · After Effects · Photoshop · UI/UX · Graphic Designing · Web Development",
    linkedin: "https://www.linkedin.com/in/nidhi-rathnakar-317b5723a",
  },
  {
    name: "Swastik shetty",
    group: "Design",
    label: "Core Design",
    avatarUrl: "/TeamMembers/Swastik.jpg",
    skills: "Figma · Cybersecurity · UI/UX ",
    linkedin:
      "https://www.linkedin.com/in/swastik-shetty-238819251?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
  },
  {
    name: "Sajal Raj",
    group: "Design",
    label: "Core Design",
    avatarUrl: "/TeamMembers/Sajal.jpg",
    skills:
      "Figma · Graphic Designing · Web Development · IOT Developer · ROS2 Developer · Drone Developer",
    linkedin: "https://www.linkedin.com/in/sajal-raj",
  },

  // ===== Media + Social =====
  {
    name: "Mohammed Sufyan B",
    group: "Media + Social",
    label: "Lead Socials",
    avatarUrl: "/TeamMembers/Sufyan.jpg",
    skills:
      "React.js · Node.js · MongoDB · MySQL · Python · Django · NLP · UI/UX",
    linkedin: "https://www.linkedin.com/in/mohammed-sufyan-b-",
  },
  {
    name: "Lovish Jaiswal",
    group: "Media + Social",
    label: "Core Video Editor",
    avatarUrl: "/TeamMembers/Lovish.jpg",
    skills: "JavaScript Developer · Django Backend · DSA in C++",
    linkedin: "https://www.linkedin.com/in/jaiswal-lovish",
  },
];

/* ========= Sections Definition ========= */
const SECTIONS = [
  { key: "Managers", title: "Managers", accent: CS.ORANGE },
  { key: "Technical", title: "Technical Squad", accent: CS.BLUE },
  { key: "Design", title: "Design & Creative", accent: CS.PINK },
  { key: "Media + Social", title: "Media & Social", accent: CS.LIGHT_PINK },
];

/* ========= Components ========= */
function InitialAvatar({ name }) {
  const initials = useMemo(() => {
    const parts = name.split(" ");
    return ((parts[0]?.[0] || "") + (parts[1]?.[0] || "")).toUpperCase();
  }, [name]);
  return <div className="cs-initial">{initials}</div>;
}

function SocialIcon({ href, children, label }) {
  if (!href) return null;
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="cs-social-btn"
      aria-label={label}
    >
      {children}
    </a>
  );
}

function DetailedCard({ item }) {
  const {
    name,
    title,
    label,
    avatarUrl,
    skills,
    github,
    linkedin,
    leetcode,
    portfolio,
  } = item;

  return (
    <div className="cs-detailed-card">
      <div className="cs-card-border" />
      <div className="cs-card-body">
        <div className="cs-header-info">
          <div className="cs-avatar-wrap">
            {avatarUrl ? (
              <img src={avatarUrl} className="cs-avatar" alt={name} />
            ) : (
              <InitialAvatar name={name} />
            )}
          </div>
          <div className="cs-text-wrap">
            <div className="cs-name">{name}</div>
            <div className="cs-role">{label}</div>
            {title && <div className="cs-title">{title}</div>}
          </div>
        </div>

        {skills && (
          <div className="cs-skills">
            <strong>Skills:</strong>
            {skills.split(" · ").map((s, i) => (
              <span key={i} className="cs-skill-tag">
                {s}
              </span>
            ))}
          </div>
        )}

        <div className="cs-link-separator" />

        <div className="cs-social-row">
          <div className="cs-icons">
            <SocialIcon href={github} label="GitHub">
              <FaGithub size={18} />
            </SocialIcon>
            <SocialIcon href={linkedin} label="LinkedIn">
              <FaLinkedin size={18} />
            </SocialIcon>
            <SocialIcon href={leetcode} label="LeetCode">
              <SiLeetcode size={18} />
            </SocialIcon>
          </div>

          {portfolio && (
            <a
              href={portfolio}
              target="_blank"
              rel="noreferrer"
              className="cs-view-profile-btn"
              style={{ "--accent-color": CS.BLUE }}
            >
              View Portfolio →
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

/* ========= Main Component ========= */
export default function TeamReveal({ dark = true }) {
  const grouped = useMemo(() => {
    const map = new Map(SECTIONS.map((s) => [s.key, []]));
    TEAM_MEMBERS.forEach((m) => {
      if (map.has(m.group)) map.get(m.group).push(m);
    });

    // Sort by Lead/Core order
    const rank = (s) => (/Lead/i.test(s) ? 0 : /Core/i.test(s) ? 1 : 2);
    SECTIONS.forEach((s) => {
      const arr = map.get(s.key);
      arr.sort((a, b) => {
        const r = rank(a.label) - rank(b.label);
        return r !== 0 ? r : a.name.localeCompare(b.name);
      });
    });

    return map;
  }, []);

  // Calculate total members
  const totalMembers = TEAM_MEMBERS.length;
  const membersBySection = SECTIONS.map((sec) => ({
    ...sec,
    count: grouped.get(sec.key)?.length || 0,
  }));

  return (
    <div className={`cs-wrap ${dark ? "dark" : "light"}`}>
      <header className="cs-header">
        <h1 className="cs-page-title">Meet the Full Team</h1>
        <p className="cs-page-sub">
          {totalMembers} talented individuals across Managers, Technical,
          Design, and Media + Social
        </p>
        <div className="cs-stats">
          {membersBySection.map((sec) => (
            <div key={sec.key} className="cs-stat-item">
              <span className="cs-stat-number" style={{ color: sec.accent }}>
                {sec.count}
              </span>
              <span className="cs-stat-label">{sec.title}</span>
            </div>
          ))}
        </div>
      </header>

      <div className="cs-content-wrap">
        {SECTIONS.map((sec) => {
          const items = grouped.get(sec.key) || [];
          if (items.length === 0) return null;

          return (
            <section key={sec.key} className="cs-section">
              <div className="cs-section-head">
                <h2 className="cs-section-title" style={{ color: sec.accent }}>
                  {sec.title}
                  <span className="cs-section-count">({items.length})</span>
                </h2>
                <div
                  className="cs-section-accent"
                  style={{ background: sec.accent }}
                />
              </div>

              <div className="cs-grid">
                {items.map((m, i) => (
                  <DetailedCard key={`${sec.key}-${i}`} item={m} />
                ))}
              </div>
            </section>
          );
        })}
      </div>

      <style>{`
  :root {
    --cs-black: ${CS.BLACK};
    --cs-white: ${CS.WHITE};
    --content-max-width: 1240px;
  }

  * {
    box-sizing: border-box;
  }

  .cs-wrap {
    position: relative;
    min-height: 100vh;
    overflow-x: hidden;
    width: 100%;
  }
  .cs-wrap.light { color: var(--cs-black); }
  .cs-wrap.dark { color: var(--cs-white); }
  .cs-wrap.dark { background-color: ${CS.BLACK}; }
  .cs-wrap.light { background-color: ${CS.WHITE}; }

  /* Header */
  .cs-header {
    padding: clamp(2rem, 5vw, 5rem) clamp(1rem, 6vw, 6vw) clamp(1.5rem, 3vw, 2rem);
    max-width: var(--content-max-width);
    margin: 0 auto;
  }
  .cs-page-title { 
    margin: 0; 
    font-weight: 700; 
    letter-spacing: -0.02em; 
    font-size: clamp(28px, 5vw, 52px);
    background: linear-gradient(135deg, ${CS.BLUE}, ${CS.PINK});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  .cs-page-sub { 
    margin: .8rem 0 1.5rem; 
    opacity: .8; 
    max-width: 900px; 
    font-size: clamp(14px, 2vw, 18px); 
  }

  .cs-stats {
    display: flex;
    gap: clamp(1rem, 3vw, 2rem);
    flex-wrap: wrap;
    margin-top: 1.5rem;
  }
  .cs-stat-item {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }
  .cs-stat-number {
    font-size: clamp(24px, 4vw, 36px);
    font-weight: 700;
  }
  .cs-stat-label {
    font-size: clamp(12px, 1.5vw, 14px);
    opacity: 0.7;
  }

  /* Content wrapper */
  .cs-content-wrap {
    max-width: var(--content-max-width);
    margin: 0 auto;
    padding: 0 clamp(1rem, 6vw, 6vw) clamp(2rem, 5vw, 5rem);
  }

  .cs-section { 
    padding: 0 0 clamp(2.5rem, 5vw, 4rem) 0; 
  }
  .cs-section-head { 
    display: flex; 
    align-items: center; 
    gap: 1rem; 
    margin-bottom: clamp(1.2rem, 2vw, 1.8rem); 
    flex-wrap: wrap; 
  }
  .cs-section-title { 
    margin: 0; 
    font-size: clamp(22px, 3.5vw, 36px); 
    font-weight: 700; 
    letter-spacing: -0.01em;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  .cs-section-count {
    font-size: clamp(16px, 2.5vw, 24px);
    opacity: 0.6;
    font-weight: 500;
  }
  .cs-section-accent { 
    height: 6px; 
    width: 64px; 
    border-radius: 999px; 
    opacity: .5; 
  }

  /* Grid layout */
  .cs-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: clamp(18px, 3vw, 28px);
    width: 100%;
  }

  @media (min-width: 1200px) {
    .cs-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media (max-width: 768px) {
    .cs-grid { 
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: clamp(14px, 3vw, 20px); 
    }
  }

  @media (max-width: 640px) {
    .cs-grid { 
      display: flex;
      flex-direction: row;
      gap: 16px;
      overflow-x: auto;
      overflow-y: hidden;
      scroll-behavior: smooth;
      -webkit-overflow-scrolling: touch;
      padding: 0 0 1rem 0;
      margin: 0;
      scroll-snap-type: x mandatory;
    }
    .cs-grid::-webkit-scrollbar {
      height: 8px;
    }
    .cs-grid::-webkit-scrollbar-track {
      background: rgba(255, 255, 255, 0.1);
      border-radius: 10px;
    }
    .cs-grid::-webkit-scrollbar-thumb {
      background: rgba(255, 255, 255, 0.3);
      border-radius: 10px;
    }
    .cs-grid::-webkit-scrollbar-thumb:hover {
      background: rgba(255, 255, 255, 0.5);
    }
    .light .cs-grid::-webkit-scrollbar-track {
      background: rgba(0, 0, 0, 0.1);
    }
    .light .cs-grid::-webkit-scrollbar-thumb {
      background: rgba(0, 0, 0, 0.3);
    }
  }

  /* Card */
  .cs-detailed-card {
    position: relative; 
    border-radius: clamp(14px, 3vw, 20px); 
    isolation: isolate; 
    overflow: hidden;
    box-shadow: 0 4px 20px rgba(0,0,0,0.15); 
    transition: box-shadow 250ms ease, transform 250ms ease;
    height: 100%;
    min-height: 280px;
  }
  .cs-detailed-card:hover { 
    box-shadow: 0 12px 35px rgba(0,0,0,0.3); 
    transform: translateY(-4px); 
  }
  
  @media (max-width: 640px) {
    .cs-detailed-card {
      min-width: 300px;
      flex-shrink: 0;
      scroll-snap-align: start;
    }
  }

  .cs-card-border {
    position: absolute; 
    inset: 0; 
    border-radius: clamp(14px, 3vw, 20px); 
    padding: 2px;
    background: linear-gradient(135deg, ${CS.BLUE}, ${CS.PINK}, ${CS.ORANGE});
    -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
    -webkit-mask-composite: xor; 
    mask-composite: exclude; 
    z-index: 0; 
    opacity: .8;
  }

  .cs-card-body {
    position: relative; 
    z-index: 1; 
    border-radius: clamp(12px, 2.8vw, 18px); 
    padding: clamp(16px, 3vw, 22px);
    display: flex; 
    flex-direction: column; 
    align-items: flex-start; 
    text-align: left;
    height: 100%; 
    border: 1px solid rgba(255,255,255,0.14);
    backdrop-filter: blur(12px) saturate(180%);
    background: rgba(20,20,20,.75);
    gap: clamp(8px, 2vw, 12px);
  }
  .light .cs-card-body {
    border-color: rgba(0,0,0,0.12);
    background: rgba(255,255,255,0.92);
  }

  .cs-header-info { 
    display: flex; 
    align-items: center; 
    gap: clamp(12px, 2vw, 18px); 
    margin-bottom: 0;
    flex-shrink: 0;
    width: 100%;
  }

  .cs-text-wrap { 
    display: flex; 
    flex-direction: column; 
    justify-content: center; 
    flex: 1; 
    min-width: 0;
  }

  .cs-avatar, .cs-initial {
    width: clamp(56px, 12vw, 76px); 
    height: clamp(56px, 12vw, 76px); 
    border-radius: 50%; 
    object-fit: cover;
    border: 3px solid ${CS.PINK}44; 
    display: grid; 
    place-items: center; 
    flex-shrink: 0;
  }
  .cs-initial { 
    font-size: clamp(18px, 4vw, 26px); 
    font-weight: 700; 
    background: linear-gradient(135deg, ${CS.DARK_BLUE}, ${CS.BLUE}); 
    color: ${CS.WHITE}; 
  }

  .cs-name { 
    font-weight: 700; 
    font-size: clamp(15px, 3vw, 20px); 
    letter-spacing: -0.01em; 
    word-break: break-word;
    line-height: 1.3;
  }
  .cs-role { 
    font-size: clamp(12px, 2vw, 14px); 
    opacity: 0.8; 
    margin-top: 2px;
  }
  .cs-title { 
    font-size: clamp(11px, 1.5vw, 13px); 
    opacity: 0.7;
    margin-top: 2px; 
  }

  .cs-skills {
    font-size: clamp(11px, 1.5vw, 13px); 
    opacity: 0.9; 
    margin-bottom: 0;
    display: flex; 
    flex-wrap: wrap; 
    align-items: center; 
    gap: clamp(5px, 1vw, 7px);
    width: 100%;
    flex-grow: 1;
  }
  .cs-skills strong { 
    font-weight: 600; 
    margin-right: 4px; 
  }
  .cs-skill-tag {
    background-color: rgba(255,255,255,0.1);
    padding: clamp(4px, 1vw, 5px) clamp(7px, 1.5vw, 9px); 
    border-radius: 8px; 
    font-size: clamp(10px, 1.2vw, 12px);
    border: 1px solid rgba(255,255,255,0.15);
    white-space: nowrap;
  }
  .light .cs-skill-tag {
    background-color: rgba(0,0,0,0.06);
    border: 1px solid rgba(0,0,0,0.1);
  }

  .cs-link-separator { 
    width: 100%; 
    height: 1px; 
    background: rgba(255,255,255,0.14); 
    margin: clamp(4px, 1.5vw, 6px) 0;
    margin-top: auto;
  }
  .light .cs-link-separator { 
    background: rgba(0,0,0,0.1); 
  }

  .cs-social-row {
    width: 100%;
    display: flex; 
    align-items: center; 
    justify-content: space-between;
    gap: clamp(8px, 1vw, 12px); 
    flex-wrap: wrap;
  }

  .cs-icons {
    display: flex;
    gap: clamp(6px, 1vw, 10px);
  }

  .cs-social-btn {
    display: inline-flex; 
    align-items: center; 
    justify-content: center;
    width: clamp(34px, 8vw, 40px); 
    height: clamp(34px, 8vw, 40px); 
    border-radius: 10px;
    background: rgba(255,255,255,0.08);
    border: 1px solid rgba(255,255,255,0.15);
    color: ${CS.WHITE};
    transition: transform 180ms ease, box-shadow 180ms ease, background 180ms ease;
    flex-shrink: 0;
  }
  .cs-social-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 18px rgba(58,102,255,0.4);
    background: rgba(255,255,255,0.16);
  }
  .light .cs-social-btn {
    background: rgba(0,0,0,0.06);
    border-color: rgba(0,0,0,0.1);
    color: ${CS.BLACK};
  }
  .light .cs-social-btn:hover {
    box-shadow: 0 6px 18px rgba(58,102,255,0.3);
    background: rgba(0,0,0,0.1);
  }

  .cs-view-profile-btn {
    font-size: clamp(11px, 1.5vw, 13px); 
    text-decoration: none; 
    padding: clamp(8px, 1.5vw, 10px) clamp(14px, 2vw, 18px); 
    border-radius: 999px;
    border: none; 
    color: ${CS.WHITE};
    background: var(--accent-color);
    display: inline-flex; 
    align-items: center; 
    gap: 6px;
    font-weight: 600; 
    transition: transform 180ms ease, box-shadow 180ms ease;
    box-shadow: 0 4px 12px rgba(0,0,0,0.25);
    white-space: nowrap;
    min-height: clamp(32px, 7vw, 38px);
  }
  .cs-view-profile-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 18px rgba(0,0,0,0.35);
  }

  @media (max-width: 640px) {
    .cs-stats {
      gap: 1rem;
    }
  }
`}</style>
    </div>
  );
}
