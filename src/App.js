import { useState, useEffect } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./App.css";

function App() {
  const [skills, setSkills] = useState();
  const fetchData = () => fetch("http://localhost:3500/skills");

  useEffect(() => {
    fetchData().then(async (data) => setSkills(await data.json()));
  }, []);

  return (
    <div className="container">
      <Header skills={skills} />
      <Footer />
    </div>
  );
}

export default App;
