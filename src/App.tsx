import { useEffect } from "react";
import "./App.css";
import { useThemeStore } from "./Store";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";

function App() {
  const theme = useThemeStore((state) => state.theme);
  const fetchTheme = useThemeStore((state) => state.fetchTheme);

  useEffect(() => {
    fetchTheme();
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("dark", "light");
    root.classList.add(theme);
  }, [theme]);

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
    </Routes>
  );
}

export default App;
