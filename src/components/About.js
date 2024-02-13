import React from "react";
import AboutImg from "../assets/picture-of-me.JPG";

const About = () => {
  return (
    <section className="bg-secondery text-white px-5 py-32" id="about">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="about-info">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
            About Me
          </h2>

          <p className="pb-5">
            Hi! My name is Vaishnavi, but you can call me Vea (pronounced vee-ya).
          </p>
          <p className="pb-5">
            I am. I simply am.
          </p>
          <p>In backend I know Node.js, Express.js, MongoDB, and Mongoose</p>

          <p>
            In my spare time I create YouTube videos and write blogs on my Blog.
            Where I talk about programming theory and build various projects.
          </p>
        </div>

        <div className="about-img">
          <img
            src={AboutImg}
            alt="coding illustration"
            style={{ width: "50%" }} // Adjust the width here
          />
        </div>
      </div>
    </section>
  );
};

export default About;
