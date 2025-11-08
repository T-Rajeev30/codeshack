// src/Aboutpage.jsx
import Introduction from "./PageComps/Introduction";
import Profiles from "./PageComps/Profiles";
import History from "./PageComps/History";

export default function Aboutpage() {
  return (
    <main className="will-change-transform">
      {/* Section 1: The animated hero/intro with parallax scroll effects */}
      <Introduction />

      {/* Section 2: The team filter and horizontal scroll showcase */}
      <Profiles />

      {/* Section 3: The horizontal drag-to-scroll timeline/history section */}
      <History />
    </main>
  );
}
