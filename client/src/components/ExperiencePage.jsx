import Footer from "./Footer";

const ExperiencePage = () => {
  return (
    <div className="mt-10 flex flex-col items-center">
      <h1 className="text-5xl">Work Experience</h1>
      <div className="flex flex-col mt-12">
        <div className="w-full p-5 m-2 flex flex-col items-start bg-gray-50 rounded-3xl cursor-pointer hover:bg-gray-100 text-left">
          <div className="w-full flex justify-between">
            <span className="text-xl">Intern</span>
            <span className="text-sm opacity-80">02/2024 - 04/2024</span>
          </div>
          <span className="text-sm font-normal text-gray-500">
            Cinta Gaza Malaysia
          </span>
          <span className="text-base font-normal mt-4">
            Created a professional podcast setup, producing insightful content
            to share stories, initiatives, and updates with a global audience
            <br></br>
            <br></br>
            Actively collaborated in program development and execution,
            assisting in planning and coordinating fundraising events and
            activities
          </span>
        </div>
        <div className="w-full p-5 m-2 mt-5 flex flex-col items-start bg-gray-50 rounded-3xl cursor-pointer hover:bg-gray-100 text-left">
          <div className="w-full flex justify-between">
            <span className="text-xl">Capture The Flag Coordinator</span>
            <span className="text-sm opacity-80">05/2023 - 06/2023</span>
          </div>
          <span className="text-sm font-normal text-gray-500">
            National University of Malaysia
          </span>
          <span className="text-base font-normal mt-4">
            Coordinated and led a dynamic Capture the Flag (CTF) workshop,
            educating 30+ participants on cryptography, steganography, and other
            cybersecurity concepts
            <br></br>
            <br></br>
            Developed comprehensive curriculum modules covering diverse topics
            such as cryptographic algorithms, encryption techniques, and data
            hiding methods
          </span>
        </div>
      </div>
      <div className="w-full p-5 m-2 mt-5 flex flex-col items-start bg-gray-50 rounded-3xl cursor-pointer hover:bg-gray-100 text-left">
        <div className="w-full flex justify-between">
          <span className="text-xl">Java Mentor</span>
          <span className="text-sm opacity-80">11/2023 ~ Present</span>
        </div>
        <span className="text-sm font-normal text-gray-500">
          National University of Malaysia
        </span>
        <span className="text-base font-normal mt-4">
          Guided students through the principles of OOP, ensuring a solid grasp
          of encapsulation, abstraction, inheritance, and polymorphism.
          <br></br>
          <br></br>
          Designed modules and implemented practical exercises with 20+ mentees
          <br></br>
        </span>
      </div>

      <Footer />
    </div>
  );
};

export default ExperiencePage;
