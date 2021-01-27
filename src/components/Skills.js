import React from "react";
import axios from "axios";
import { useQuery } from "react-query";

const Skills = () => {
    const { isLoading, error, data } = useQuery("fetchSkills", () =>
        axios("http://192.168.0.100:3500/skills")
    );
    return (
        <div>
            <div className="box-div2">
                <h2>Fortunately I have some skills:</h2>
                <div className="box-skills">
                    {error && <div>Something went wrong ...</div>}

                    {isLoading ? (
                        <div>Retrieving stians skills ...</div>
                    ) : (
                        <ul className="list-column">
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
