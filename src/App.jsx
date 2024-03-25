import "@assets/css/App.css";
import Header from "./components/layout/Header";
import Hero from "./components/layout/Hero";
import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import loading from "@assets/lottie/load1ng.json";
import { Fade, Reveal } from "react-awesome-reveal";

const LoadingScreen = () => {
  return (
    <div className="loading-screen h-screen bg-primary text-white w-screen flex items-center justify-center flex-col">
      <h1 className="text-3xl font-medium">{"<AlexandreTonin />"}</h1>
      <Lottie animationData={loading} className="w-1/4 h-40"></Lottie>
    </div>
  );
};

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <div className="h-screen bg-primary">
          <Fade duration={3000}>
            <Header />
            <Hero />
          </Fade>
        </div>
      )}
    </>
  );
}

export default App;
