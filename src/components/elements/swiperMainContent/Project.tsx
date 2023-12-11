const Project = () => {
    return (
        <section id='project'>
            <div className="container h-full">
                <div className="heading-section mx-auto">
                    <span className="z-10 relative">project</span>
                </div>
                <div className="grid grid-cols-4 gap-8">
                    <div className="bg-black h-[700px] w-full">
                        <img src="./images/circle.png" className="invert p-8" alt="" />
                    </div>
                    <div className="bg-black h-[700px] w-full">
                        <img src="./images/circle.png" className="invert p-8" alt="" />
                    </div>
                    <div className="bg-black h-[700px] w-full">
                        <img src="./images/circle.png" className="invert p-8" alt="" />
                    </div>
                    <div className="bg-black h-[700px] w-full">
                        <img src="./images/circle.png" className="invert p-8" alt="" />
                    </div>
                </div>
            </div> 
        </section>
    );
};

export default Project;