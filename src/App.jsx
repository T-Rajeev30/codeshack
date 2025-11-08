import { useState, useEffect } from "react";
import Homepage from "./Pages/Home_Page/Homepage"; // <-- Reintroduce Homepage import
import LoadingPage from "./Pages/Loading_Page/Loadingpage";
import Aboutpage from "./Pages/About_Page/AboutPage"; // Kept for reference/routing, but primarily used in Homepage

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // WHEN LOADINGPAGE finishes → it calls setIsLoading(false)
  const handleLoadingFinish = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading ? (
        // Renders the LoadingPage and waits for it to finish
        <LoadingPage onFinish={handleLoadingFinish} />
      ) : (
        // Renders the Homepage component, which now embeds the AboutPage content
        <Homepage />
      )}
    </>
  );
}

export default App;
