import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import React from "react";
import axios from "axios";
import Loader from "react-loader-spinner";
import { useQuery } from "react-query";

const Skills = () => {
    const { isLoading, error, data } = useQuery("fetchSkills", () =>
        axios("http://192.168.0.100:3500/skills")
    );
    return (
        <div>
            <div className="box-div2">
                <h2>Fortunately I have some skills:</h2>
                <div className="">
                    {error && <div>Something went wrong ...</div>}

                    {isLoading ? (
                        <div>
                            <Loader
                                type="Hearts"
                                color="#006699"
                                height={100}
                                width={100}
                                timeout={3000} //3 secs
                            />
                        </div>
                    ) : (
                        <ul className="list-column box-skills">
                            {data.data.map((skill) => (
                                <li key={skill.id}>{skill.skill}</li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Skills;
