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
            <p>I'm thrilled to have you here !</p>
          </div>
          <div>
            <p>
              I'm a skilled Full Stack Web Developer with a solid foundation in
              both front-end and back-end technologies, including HTML, CSS,
              JavaScript, React, Node.js, and SQL. With hands-on experience in
              MongoDB, Express.js, and Git. I'm also expanding my expertise in
              AWS, Python, and Linux.
              <p>
                <br />
                I’m passionate about creating high-quality, user-focused web
                applications and continuously advancing my skills to stay at the
                cutting edge of technology. Ready to tackle complex challenges
                and contribute to impactful projects. Let's connect!
              </p>
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
