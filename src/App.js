import { useState, useEffect } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Skills from "./components/Skills";
import "./App.css";

function App() {
    const [skills, setSkills] = useState([]);

    const fetchData = async () => {
        const response = await fetch("http://192.168.0.100:3500/skills");
        const data = await response.json();
        setSkills(data);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="container">
            <Header />
            <Skills skills={skills} />
            <Footer />
        </div>
    );
}

export default App;
