const softwareSkills = ["Javascript", "Python", "React", "Express", "Node", "MongoDB", "SQL", "Progressive Web Apps", "GraphQL", "Bootstrap", "Tailwinds", "HTML", "CSS", ]
const mathSkills = ['Probability and Statistics', 'Calculus', 'Linear Algebra', 'Matrixes and Matricies']
export default function Resume() {
    return (
        <div className="resume-section px-6 py-24 sm:py-32 lg:px-8">
            <h1 className="resume-header text-3xl font-bold  mx-auto max-w-6xl">Skills</h1>
            <div className="grid grid-cols-2 list-section mx-auto max-w-2xl mt-10">
                <ul className="list-ele">
                {softwareSkills.map((skill) => (
                    <li className="list-item" key={skill}>{skill}</li>
                    ))}
                </ul>
                <ul className="list-ele">
                {mathSkills.map((skill) => (
                    <li className="list-item" key={skill}>{skill}</li>
                    ))}
                </ul>
                <div className="resume-download my-10">
                    <h2 className="resume-link-text">Download my resume <a className="resume-link text-blue-500 focus:text-violet-900" href="/assets/downloads/DBResume.pdf" download>here</a>.</h2>
                </div>
                </div>
            </div>
    );
}