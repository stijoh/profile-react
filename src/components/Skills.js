const Skills = ({ skills }) => {
    return (
        <div>
            <div className="box-skills">
                <ul className="list-column">
                    {skills.map((skill) => (
                        <li key={skill.id}>{skill.skill}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Skills;
