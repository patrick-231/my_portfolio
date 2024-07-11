/* import Photo from "../assets/about-photo.jpg"; */

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300 ">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full  grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About me
            </p>
          </div>
        </div>
        <div className="max-w-[1000px] w-full sm:grid grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold mb-12">
            <p>
              Welcome to my portfolio website! I'm thrilled to have you here.
            </p>
          </div>
          <div>
            {/* <div className="relative w-48 h-48 mx-auto mt-2 mb-8 overflow-hidden rounded-full border-4 border-pink-600">
              <img
                src={Photo}
                alt="Profile Picture"
                className="object-cover w-full h-full "
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50"></div>
            </div> */}
            <p>
              As a recent full stack web development graduate, I am eager to
              leverage my skills and knowledge to contribute to your
              organization's web initiatives. While I may lack extensive
              professional experience, I am a fast learner, highly adaptable,
              and driven to continuously expand my expertise.
            </p>
            <br />
            <p>
              During my training, I gained a robust foundation in front-end,
              back-end, and database management, becoming proficient in
              cutting-edge technologies like HTML, CSS, JavaScript, React,
              Node.js, and SQL. Additionally, I have hands-on experience with
              MongoDB, Express.js, and version control systems like Git. I am
              also currently learning AWS, Python, and Linux, which are
              enhancing my capabilities in cloud computing and scripting.
            </p>
            <p>
              What sets me apart is my commitment to delivering high-quality,
              user-centric solutions, combining technical prowess with a keen
              eye for design to create intuitive, visually appealing, and
              engaging web experiences.
            </p>
            <br />
            <p>
              Furthermore, I am eager to learn and grow alongside experienced
              professionals, staying up-to-date with industry trends and quickly
              adapting to new methodologies. I am confident that my enthusiasm,
              adaptability, and strong foundation in full stack development will
              make me a valuable asset to your team.
            </p>
            <br />
            <p>
              I welcome the opportunity to discuss how I can contribute to your
              organization's web development goals. Thank you for your
              consideration.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
