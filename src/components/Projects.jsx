import React from "react";
import Products from "./Utils.jsx";

function Projects() {
  return (
    <>
      <div id="projects">
        <h1 className="text-3xl w-20 md:text-5xl font-bold mb-12 text-center hover:text-red duration-300">
          Projects
        </h1>
        <div className="flex flex-col md:flex-row md:flex-wrap justify-center gap-8">
          {Products.map((pro) => (
            <div
              className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
              key={pro.id}
            >
              <a href={pro.github} target="_blank" rel="noopener noreferrer">
                <img className="rounded-t-lg" src={pro.img} alt={pro.title} />
              </a>
              <div className="p-5 text-center">
                <a href={pro.github} target="_blank" rel="noopener noreferrer">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {pro.title}
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {pro.disc}
                </p>
                <a
                  href={pro.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white border rounded-lg hover:border-red duration-300"
                >
                  Github
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10" 
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Projects;
