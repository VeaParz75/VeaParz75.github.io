import React from "react";
import AboutImg from "../assets/picture-of-me.JPG";
import "./About.css"; // Import custom CSS for additional styling

const About = () => {
  return (
    <section className="about-section">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="about-info">
          <h2 className="text-4xl font-bold mb-5 border-b-2 border-indigo-600 pb-2">
            About Me
          </h2>
          <p className="pb-5">
            Hi! My name is Vaishnavi, but you can call me Vea (pronounced
            vee-ya).
          </p>
          <p className="pb-5">
            I am a BSc in Computer Science with a focus in Machine Intelligence and a BA in Political Science with a focus in International Relations.
          </p>
          <p>I'm proficient in Python, Java, C, C++ and Qiskit.</p>
          <p>
            In my spare time, I draw, play videogames and read. (WIP lmao)
          </p>
        </div>
        <div className="about-img">
          <img src={AboutImg} alt="coding illustration" />
        </div>
      </div>
    </section>
  );
};

export default About;
