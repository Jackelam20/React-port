export default function Project(props) {
    const { project } = props;
    return ( 
        <div>
            <label htmlFor={project.name} className="block text-sm font-semibold leading-6 text-gray-900">
                <a href={project.link} target="_blank" className="focus:text-violet-900">Click here for the github link for {project.name}</a>.
            </label>
            <a href={project.deployed} target="_blank" className="object-cover" key={project.name} name={project.name}><img src={project.image} className="rounded-lg object-cover"></img></a>
        </div>
    );
}