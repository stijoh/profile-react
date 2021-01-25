import { useState, useEffect } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Skills from "../../components/Skills";

function Home() {
    const [skills, setSkills] = useState([]);

    const fetchData = async () => {
        const response = await fetch(
            "http://127.0.0.1:3500/api/v1/skills/?user_email=stian.a.johansen@gmail.com&user_token="
        );
        const data = await response.json();
        console.log(data);
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

export default Home;
