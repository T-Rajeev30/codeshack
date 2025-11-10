<div className="relative py-8">
      {/* left line */}
      <div className="hidden md:block absolute left-8 top-0 bottom-0 w-1 bg-gray-200" />

      <div className="space-y-12">
        {events.map((ev) => (
          <div key={ev.id} className="flex items-center">
            {/* dot on line */}
            <div
              className="flex flex-col items-center mr-6 md:mr-12"
              style={{ minWidth: 48 }}
            >
              <div
                className="w-4 h-4 rounded-full bg-indigo-600 ring-4 ring-white shadow-lg"
                style={{ marginLeft: 20, position: "absolute", top: "-10px" }}
              />
            </div>

            {/* event card */}
            <div className="flex-1 md:ml-0 ml-2">
              <div
                className="p-6 bg-white rounded-2xl shadow cursor-pointer hover:shadow-lg transition flex items-center gap-6"
                onClick={() => onSelect(ev.id)}
              >
                <img
                  src={
                    ev.image ||
                    "https://source.unsplash.com/80x80/?event,technology"
                  }
                  alt={ev.title}
                  className="w-20 h-20 object-cover rounded-xl border border-gray-200 shadow"
                  loading="lazy"
                />
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold">{ev.title}</h3>
                    <span className="text-sm text-gray-500 ml-4 whitespace-nowrap">
                      {ev.date}
                    </span>
                  </div>
                  <p className="text-gray-600 mt-2">{ev.desc}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>