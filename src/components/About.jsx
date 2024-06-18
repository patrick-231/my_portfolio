/* import Photo from "../assets/about-photo.jpg"; */

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300 ">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full  grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
        </div>
        <div className="max-w-[1000px] w-full sm:grid grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold mb-12">
            <p>
              Welcome to my portfolio website! I'm thrilled to have you here.
              Please take a look around.
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
              I am a passionate and dedicated full stack web developer with
              expertise in building dynamic and responsive web applications.
              With a strong foundation in front-end development, back-end
              programming, and database management, I specialize in creating
              robust and user-friendly software solutions.
            </p>
            <br />
            <p>
              My approach to development is both creative and practical. I
              combine my technical expertise with a keen eye for design to
              create visually appealing and intuitive user interfaces. I believe
              that a seamless user experience is crucial in capturing and
              retaining users' attention, and I strive to achieve that in every
              application I build.
            </p>
            <br />
            <p>
              Thank you for visiting my portfolio website. I invite you to
              explore my projects and get in touch if you have any questions or
              would like to discuss a potential collaboration. Together, let's
              bring your ideas to life and create exceptional web experiences
              that make a lasting impact.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
