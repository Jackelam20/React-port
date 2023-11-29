import Project from '../Project';
import { projects } from '../../assets/data/projectData';

export default function Portfolio() {

    return (
        <div className="portfolio-section px-6 py-24 sm:py-32 lg:px-8">
            <h1 className="portfolio-header text-3xl font-bold mx-auto max-w-6xl">Portfolio</h1>
            <div className="portfolio-body">
                <div className="project-item mx-auto max-w-5xl mt-10">
                    <div className="project-container grid grid-cols-2 grid-rows-3 gap-5">
                    {projects.map((project) => ( 
                        <div className="project-image" key={project.name}>
                            <Project project={project} /> 
                        </div>
                        ))} 
                    </div>
                </div>
            </div>    
        </div>
    );
}