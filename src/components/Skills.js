const Skills = ({ skills }) => {
    return (
        <div>
            <div className="box-div2">
                <h2>Fortunately I have some skills:</h2>
                <div className="box-skills">
                    <ul className="list-column">
                        {skills.map((skill) => (
                            <li key={skill.id}>{skill.skill}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Skills;
