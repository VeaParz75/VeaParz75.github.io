import React from "react";
import ProjectImg from "../assets/wip.png"; // Import your project image

const Projects = () => {
  return (
    <section className="bg-secondary text-white px-5 py-32" id="projects">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
            My Projects
          </h2>

          <p className="pb-5">
            Here you can find a showcase of some of my projects.
          </p>
          <p className="pb-5">
            Feel free to explore and get inspired!
          </p>
          <p>
            You can also visit my GitHub profile for more projects.
          </p>
        </div>

        <div className="mt-10 flex justify-center">
          <img
            src={ProjectImg}
            alt="project illustration"
            style={{ maxWidth: "50%" }} // Adjust the maximum width here
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
