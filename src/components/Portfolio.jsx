import Stylish from "../assets/Stylish_Stiches_DEMO.png";
import Whisper from "../assets/Whisper-chat-app-DEMO.png";
import InProgress from "../assets/Work_In_Progress.png";
import reStart from "../assets/Patrick_re_Start_Project_Work.png";
import Admindashboard from "../assets/amindashboard.png";

import Button from "@mui/material/Button";

const Portfolio = () => {
  return (
    <div
      name="portfolio"
      className="w-full md:h-screen bg-[#0a192f] text-gray-300"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        {/* Heading Section */}
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Portfolio
          </p>
          <p className="py-4">Checkout my recent work</p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Portfolio Item 1 */}
          <div
            style={{ backgroundImage: `url(${Admindashboard})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <h6 className="text-2xl font-bold text-white px-2 ml-4">
                Dashboard UI: Admin Dashboard
              </h6>
              <div className="pt-8 text-center">
                <a
                  href="https://myadnindashboard231.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/patrick-231/admin-dashboard"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
              <div className="mt-4 text-left">
                <p className="ml-4">
                  Technologies: Docker, JavaScript (ES6+), React, TailwindCSS,
                  React Router, Rechart, & Framer Motion
                </p>
              </div>
            </div>
          </div>

          {/* Portfolio Item 2 */}
          <div
            style={{ backgroundImage: `url(${Stylish})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <h6 className="text-2xl font-bold text-white px-2 ml-4">
                MERN Stack: E-Commerce App
              </h6>
              <div className="pt-8 text-center">
                <a
                  href="https://stylishstiches.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/patrick-231?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
              <div className="mt-4 text-left">
                <p className="ml-4">
                  Technologies: JavaScript, TailwindCSS, Material UI, MongoDB,
                  Express, React, Node.js
                </p>
              </div>
            </div>
          </div>

          {/* Portfolio Item 3 */}
          <div
            style={{ backgroundImage: `url(${Whisper})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <h6 className="text-2xl font-bold text-white px-2 ml-4">
                MERN Stack: Real Time Chat App
              </h6>
              <div className="pt-8 text-center">
                <a
                  href="https://whisper-chat-app.onrender.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/patrick-231/whisper-chat-app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
              <div className="mt-4 text-left">
                <p className="ml-4">
                  Technologies: JavaScript (ES6+), Socket.io, TailwindCSS, Daisy
                  UI, MongoDB, Express, React, Node.js
                </p>
              </div>
            </div>
          </div>

          {/* Portfolio Item 4 */}
          <div
            style={{ backgroundImage: `url(${reStart})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <h6 className="text-2xl font-bold text-white px-2 ml-4">
                Launch an EC2 instance on AWS
              </h6>
              <div className="pt-8 text-center">
                <a
                  href="https://res.cloudinary.com/dpx184ojl/image/upload/v1724410582/Patrick_re_Start_Project_Work_yyond2.png"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    View
                  </button>
                </a>
              </div>
              <div className="mt-4 text-left">
                <p className="ml-4">
                  Technologies: AWS CLI, EC2, S3, Appache httpd Web Server,
                  Security Groups
                </p>
              </div>
            </div>
          </div>

          {/* Portfolio Item 5 - Under Construction */}
          <div
            style={{ backgroundImage: `url(${InProgress})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <h6 className="text-2xl font-bold text-white px-2 ml-4">
                UNDER CONSTRUCTION
              </h6>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
