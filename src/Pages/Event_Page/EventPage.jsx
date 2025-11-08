import { useState } from "react";

export default function EventsPage() {
  const events = [
    {
      id: 1,
      title: "Hackathon 2025",
      date: "12 Jan",
      desc: "24 hour coding event",
    },
    {
      id: 2,
      title: "Drone Workshop",
      date: "20 Jan",
      desc: "Hands-on drone building",
    },
    { id: 3, title: "AI Bootcamp", date: "28 Jan", desc: "Intro to ML and CV" },
  ];

  const [selected, setSelected] = useState(null);

  if (!selected) {
    return (
      <div className="min-h-screen w-full p-10 bg-gray-50">
        <h1 className="text-4xl font-bold mb-10">Events</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {events.map((e) => (
            <div
              key={e.id}
              className="border p-6 rounded-2xl shadow cursor-pointer bg-white hover:shadow-lg transition"
              onClick={() => setSelected(e)}
            >
              <h2 className="text-2xl font-semibold mb-2">{e.title}</h2>
              <p className="text-sm">{e.date}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full p-10 bg-gray-50">
      <div className="max-w-3xl mx-auto bg-white p-10 rounded-2xl shadow">
        <h1 className="text-4xl font-bold mb-4">{selected.title}</h1>
        <p className="text-lg mb-4">{selected.date}</p>
        <p className="text-base mb-6">{selected.desc}</p>

        <button
          className="text-blue-600 underline text-lg"
          onClick={() => setSelected(null)}
        >
          Back
        </button>
      </div>
    </div>
  );
}
