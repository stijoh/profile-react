const Skills = ({ skills }) => {
    return (
        <div>
            <div className="box-div2">
                <ul>
                    {skills.map((skill) => (
                        <li key={skill.id}>{skill.skill}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Skills;
