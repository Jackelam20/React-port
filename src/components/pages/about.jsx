export default function About() {
    return (
        <div className="px-6 py-24 sm:py-32 lg:px-8 about-section ">
            <h2 className="font-bold text-3xl about-header mx-auto max-w-6xl mb-10">About Me</h2>
            <div className="about-body grid grid-cols-3 gap-5 mx-auto max-w-5xl">
                <div className="col-span-1 max-w-lg">
                    <img src="/assets/images/mountainpfp.jpeg" className="rounded-xl"></img> 
                </div>
                <div className="text-lg col-span-2">
                    <p className="about-p grid-flow-row">
                        I'm a full stack web developer based in the Central Austin area.
                        I have a passion for problem solving and creating clean, user friendly web applications. 
                        I graduated from the fulled stacked web development bootcamp at the University of Texas at Austin in 2023 
                        and am currently seeking a full time position as a web developer.
                        In my free time I enjoy hiking, playing video games, and learning new technologies.
                    </p>
                </div>
                <div className="text-lg col-span-3">
                    <p className="about-p">
                        Web development is a field that is constantly changing and evolving and I am excited to be a part of it.
                         I am always looking to learn new technologies and improve my skills as a developer and I am excited to see where my career takes me.
                         I still have a lot to learn but I am confident in my ability to learn new technologies and adapt to new situations.
                    </p>
                </div>
            </div>
        </div>
    );
}

