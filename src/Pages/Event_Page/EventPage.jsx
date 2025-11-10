import { useState } from "react";
import Timeline from "./Timeline";
import EventDetail from "./EventDetail";
import tv5 from "../../assets/TechVistara5.jpg"

const events = [
  {
    id: 1,
    title: "TechVistara 5.0",
    date: "12 Nov 2025",
    desc: "TechVistara 5.0 — Where code meets creativity and ideas spark innovation! 🚀Dive into the world of tech, explore every domain, and build the future 👨‍💻",
    long: `🚀 Registrations for TechVistara 5.0 are now open!
    Get ready to dive into the world of technology as we introduce you to the exciting domains of our club — from coding and design to AI and beyond! 💡 
    Join us for an interactive session filled with fun games, insights, and a glimpse into what our tech community has to offer.

📅 Register now: https://forms.gle/yvSKdSEBtHRUy2f67
📌Date: 12th November 2025
📍Venue: New Auditorium

Let’s kickstart your tech journey with TechVistara 5.0! 💫`,
    visual: tv5,
    poster: "",
  },
];

export default function EventsPage() {
  const [selectedId, setSelectedId] = useState(null);

  const selected = events.find((e) => e.id === selectedId) || null;

  return (
    <div className="min-h-screen w-full p-8 bg-black">
      <div className="max-w-6xl mx-auto">
        <header className="mb-8">
          <h1 className="text-white text-4xl md:text-5xl font-extrabold mb-2">
            Events Timeline
          </h1>
          <p className="text-white">
            Explore our past and upcoming events — click any item to read more.
          </p>
        </header>

        <Timeline events={events} onSelect={(id) => setSelectedId(id)} />

        {selected && (
          <EventDetail
            event={selected}
            onClose={() => setSelectedId(null)}
            onPrev={() => {
              const idx = events.findIndex((x) => x.id === selected.id);
              const prev = events[idx - 1];
              if (prev) setSelectedId(prev.id);
            }}
            onNext={() => {
              const idx = events.findIndex((x) => x.id === selected.id);
              const next = events[idx + 1];
              if (next) setSelectedId(next.id);
            }}
          />
        )}
      </div>
    </div>
  );
}
