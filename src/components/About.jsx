import React from "react";
import "../App.css";

const About = () => {
  return (
    <div
      id="about"
      className="flex flex-col md:flex-row items-center mt-40 mb-40 w-full text-white p-4"
    >
      <div className="flex flex-none md:flex-col items-center justify-center space-x-4 md:space-x-0 md:space-y-4 mb-4 md:mb-0 md:mr-12">
        <a
          href="https://linkedin.com/in/harishssdev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={`${import.meta.env.BASE_URL}linkedin.png`}
            alt="LinkedIn"
            className="w-8 h-8 md:w-10 md:h-10 rounded-xl"
          />
        </a>
        <a
          href="https://github.com/harishss20"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={`${import.meta.env.BASE_URL}github.jpg`}
            alt="GitHub"
            className="w-8 h-8 md:w-10 md:h-10 rounded-xl"
          />
        </a>
        <a
          href="https://x.com/Harishssdev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={`${import.meta.env.BASE_URL}twitter.png`}
            alt="Twitter"
            className="w-8 h-8 md:w-10 md:h-10 rounded-xl"
          />
        </a>
      </div>

      <div id="Animation-Profile" className="flex-none mb-4 md:mb-0 md:mr-20">
        <img
          src={`${import.meta.env.BASE_URL}profile.jpg`}
          alt="Harish SS"
          className="w-32 h-32 md:w-64 md:h-64 lg:w-80 lg:h-80 object-cover rounded-lg"
        />
      </div>

      <div className="flex flex-col md:justify-center items-center text-center md:text-left">
        <h1 className="text-3xl md:text-5xl font-bold mb-2 md:mb-4 hover:text-red duration-300">
          About Me
        </h1>
        <p className="text-base md:text-lg mb-4 w-full md:w-auto">
          I'm{" "}
          <span className="text-amber-300 hover:text-white duration-300">
            Harish SS
          </span>
          , a passionate developer dedicated to crafting impactful, user-centric
          applications. I love tackling challenges, pushing boundaries, and
          building innovative solutions that enhance user experiences.
        </p>
        <button className="flex items-center">
          <img
            src={`${import.meta.env.BASE_URL}download.png`}
            alt="Download"
            className="w-6 h-6 mr-2"
          />
          <a
            href={`${import.meta.env.BASE_URL}HarishResume.pdf`}
            className="text-white"
            download
          >
            Resume
          </a>
        </button>
      </div>
    </div>
  );
};

export default About;
