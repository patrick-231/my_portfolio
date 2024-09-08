import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="text-gray-300 py-4 bg-[#0a192f] text-center fixed bottom-0 left-0 w-full">
      <div className="flex justify-center items-center space-x-4 mb-4">
        <a
          href="https://github.com/patrick-231"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="text-2xl hover:text-pink-600" />
        </a>
        <a
          href="https://www.linkedin.com/in/okiemute-patrick"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="text-2xl hover:text-pink-600" />
        </a>
        <a
          href="mailto:p.o.umukoro@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <HiOutlineMail className="text-2xl hover:text-pink-600" />
        </a>
        <a
          href="https://flowcv.com/resume/swsfsecqgd"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsFillPersonLinesFill className="text-2xl hover:text-pink-600" />
        </a>
      </div>
      <p className="mb-4">
        &copy; {new Date().getFullYear()} Patrick. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
