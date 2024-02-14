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
            Hiya! My name is Vaishnavi, but you can call me Vea (pronounced
            vee-ya).
          </p>
          <p className="pb-5">
            I am pursuing a BSc in Computer Science with a focus in Machine Intelligence and a BA in Political Science with a focus in International Relations.
            I am a lead undergraduate research assistant in NanoML, a division of Professor Alexandra Boltasseva's research group at Purdue University. I primarily work in 
            quantum machine learning, specifically within topological optimization and quantum complexity theory.
          </p>
          <p>I'm proficient in Python, Java, JavaScript, C, C++ and Qiskit, and I am also proficient in the MERN stack.</p>
          <p className="pb-5">
            I love to draw, play videogames and read. You can also check out my art portfolio here (hyperlink). The Legend of Zelda is my favourite gaming franchise???? wind waker is my fav game :))) (WIP lmao)
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
