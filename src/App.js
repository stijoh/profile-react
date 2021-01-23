import { useState, useEffect } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./App.css";

function App() {
  const [skills, setSkills] = useState([]);

  const fetchData = async () => {
      const response = await fetch("http://localhost:3500/skills");
      const data = await response.json();
      setSkills(data.skills);
    }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container">
      <Header skills={skills} />
      <Footer />
    </div>
  );
}

export default App;
