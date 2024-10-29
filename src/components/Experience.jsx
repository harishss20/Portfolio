import React from "react";

function Experience() {
  return (
    <>
      <div id="experience">
        <h1 className="text-3xl w-20 mt-36 md:text-5xl font-bold mb-12 hover:text-red duration-300">
          Experience
        </h1>
        <div className="space-y-4 p-6 text-white">
          <div className="p-4 border border-gray-700 rounded-lg bg-gray-800">
            <div className="flex items-center space-x-2">
              <img
                src="/ex2.png"
                alt="Vault Of Codes Logo"
                className="h-6 w-6 rounded-sm"
              />
              <h2 className="text-lg font-semibold text-red">
                Web Developer Intern
              </h2>
            </div>
            <div className="flex ml-8 items-center space-x-2 mt-1">
              <p className="text-purple-400">Vault Of Codes</p>
              <span className="dark:text-gray-400">(Jan 2024 - Feb 2024)</span>
            </div>
            <p className="mt-2 text-gray-300">
              During this program, I honed my skills in React.js, Postman,
              MongoDB, and Express.js, gaining hands-on experience in web
              development. I had the opportunity to work on real-world projects,
              enhancing both my technical and professional abilities. Grateful
              for the support and learning opportunities throughout the
              internship. Looking forward to the next steps in my journey as a
              software developer!
            </p>
          </div>

          <div className="p-4 border border-gray-700 rounded-lg mb-96 bg-gray-800">
            <div className="flex items-center space-x-2">
              <img
                src="/ex1.png"
                alt="CodeSpeedy Logo"
                className="h-6 w-6 rounded-sm"
              />
              <h2 className="text-lg font-semibold text-red">
                Java Software Developer Intern
              </h2>
            </div>
            <div className="flex  ml-8 items-center space-x-2 mt-1">
              <p className="text-purple-400">
                CodeSpeedy Technology Private Limited
              </p>
              <span className="dark:text-gray-400">(Jun 2023 - Jul 2023)</span>
            </div>
            <p className="mt-2 text-gray-300">
              During this program, I honed my Java programming skills and gained
              hands-on experience in software development. I had the opportunity
              to tackle real-world projects, and grow both technically and
              professionally. Grateful for the support and learning
              opportunities throughout the internship.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Experience;
