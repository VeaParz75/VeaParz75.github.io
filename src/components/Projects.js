import React from "react";
import ProjectImg from "../assets/wip.png"; // Import your project image

const Projects = () => {
  return (
    <section className="bg-secondary text-white flex flex-col items-center justify-center h-screen" id="projects">
      <div className="mt-10">
        <img
          src={ProjectImg}
          alt="project illustration"
          style={{ maxWidth: "45%", display: "block", margin: "0 auto" }} // Adjust the maximum width and center the image
        />
      </div>
    </section>
  );
};

export default Projects;
