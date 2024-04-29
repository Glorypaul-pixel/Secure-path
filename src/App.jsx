import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Home from "./components/home";
import { useEffect } from "react";
import Statistic from "./statistic";
function App() {
  return (
    <main className="w-full">
      <header className="sticky top-0 w-full flex z-10 items-center shadow-inner bg-gradient-to-r from-purple-500 to-pink-500 bg-opacity-90 p-5 text-white lg:flex-row">
        <div className=" cursor-default font-tino flex  bold tracking-wider items-center w-3/6">
          <h1 className="text-[2rem] font-bold">Secure Path</h1>
        </div>
        <nav className="space-x-8 justify-between w-4/5 flex md:flex-row my-0 mx-auto text-white">
          <a href="/" className="active">
            <p>Home</p>
            <span></span>
          </a>
          <a href="/#logcomplain">
            <p>
              Log Complaint <span></span>
            </p>
          </a>

          <a href="/#about">
            <p>
              About <span></span>
            </p>
          </a>
          <a href="/statistics">
            <p>
              Statistics <span></span>
            </p>
          </a>
          <a href="/#contact">
            <p>
              Contact <span></span>
            </p>
          </a>
        </nav>
      </header>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/statistics" element={<Statistic />} />
          <Route path="/*" element={<div>Not Found</div>} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) return;
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
};
export default App;
