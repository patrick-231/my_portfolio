const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full md:h-screen bg-[#0a192f] text-gray-300 flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/zaxdnwva"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            Submit the form below to send me a message
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2 text-black"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="bg-[#ccd6f6] my-4 p-2 text-black"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#ccd6f6] p-2 text-black"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
