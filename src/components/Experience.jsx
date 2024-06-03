import { useNavigate } from "react-router-dom";

const Experience = () => {
  const navigate = useNavigate();

  return (
    <div className="mt-32">
      <h1 className="text-4xl">Work Experience</h1>
      <div className="flex flex-col mt-4">
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
            <br></br>
          </span>
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
            Guided students through the principles of OOP, ensuring a solid
            grasp of encapsulation, abstraction, inheritance, and polymorphism.
            <br></br>
            <br></br>
            Designed modules and implemented practical exercises with 20+
            mentees
            <br></br>
          </span>
        </div>
        <div className="flex flex-col items-center">
          <div className="relative z-10 text-black flex flex-col items-center rounded-xl w-36 bg-white r shadow-lg shadow-sky-500 h-10 mt-4">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <button
              onClick={() => navigate("/experience")}
              class="relative gradient-border px-4 py-2 rounded-xl justify-between bg-black hover:bg-white hover:text-black opacity-95 hover:opacity-100 text-white w-full text-base font-normal transform hover:scale-105 duration-300"
            >
              See more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
