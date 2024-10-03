import Stylish from "../assets/Stylish_Stiches_DEMO.png";
import Whisper from "../assets/Whisper-chat-app-DEMO.png";
import InProgress from "../assets/Work_In_Progress.png";
import reStart from "../assets/Patrick re_Start Project Work.png";
import Admindashboard from "../assets/amindashboard.png";

const Portfolio = () => {
  return (
    <div
      name="portfolio"
      className="w-full md:h-screen bg-[#0a192f] text-gray-300"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl  font-bold inline border-b-4 border-pink-600">
            Portofolio
          </p>
          <p className="py-4 ">Checkout my recent work</p>
        </div>
        {/* container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* grid item */}
          <div
            style={{ backgroundImage: `url(${Admindashboard})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auton content-div"
          >
            {/* hover effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Dashboard UI: Admin Dashboard
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://myadnindashboard231.netlify.app/"
                  target="_blank"
                >
                  <button className="text-center roundec-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/patrick-231/admin-dashboard"
                  target="_blank"
                >
                  <button className="text-center roundec-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
              <div className="mt-4 text-left">
                <p>
                  Technologies used: React, TailwindCSS, Rechart, & Framer
                  Motion
                </p>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Stylish})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auton content-div"
          >
            {/* hover effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                MERN Stack: E-Commerce Application
              </span>
              <div className="pt-8 text-center">
                <a href="https://stylishstiches.netlify.app/" target="_blank">
                  <button className="text-center roundec-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/patrick-231?tab=repositories"
                  target="_blank"
                >
                  <button className="text-center roundec-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
              <div className="mt-4 text-left">
                <p>
                  Technologies used: TailwindCSS, Material UI, MERN Stack
                  (MongoDB, Express, React, Node.js)
                </p>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${Whisper})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auton content-div"
          >
            {/* hover effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                MERN Stack: Real Time Chat App
              </span>
              <div className="pt-8 text-center">
                <a href="https://whisper-chat-app.onrender.com" target="_blank">
                  <button className="text-center roundec-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/patrick-231/whisper-chat-app"
                  target="_blank"
                >
                  <button className="text-center roundec-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
              <div className="mt-4 text-left">
                <p>
                  Technologies used: Socket.io, TailwindCSS, Daisy UI, MERN
                  Stack (MongoDB, Express, React, Node.js)
                </p>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${reStart})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auton content-div"
          >
            {/* hover effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Launch an EC2 instance on AWS
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://res.cloudinary.com/dpx184ojl/image/upload/v1724410582/Patrick_re_Start_Project_Work_yyond2.png"
                  target="_blank"
                >
                  <button className="text-center roundec-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    View
                  </button>
                </a>
              </div>
              <div className="mt-4 text-left">
                <p>Technologies used: AWS, EC2</p>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${InProgress})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auton content-div"
          >
            {/* hover effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                React JS Application
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center roundec-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button className="text-center roundec-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
              <div className="mt-4 text-left">
                <p>Technologies used: React JS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
