import { FaDownload } from "react-icons/fa";
import Footer from "./Footer";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";

const AboutPage = () => {
  const handleDownloadResume = () => {
    const pdfUrl = "Alif_Hakimi_Resume_2024.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Alif_Hakimi_Resume_2024.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    // window.alert("This feature is disabled.");
  };

  const senderEmail = "alifhakimiazwan@gmail.com";

  const handleComposeEmail = () => {
    const mailtoLink = `mailto:${senderEmail}`;
    window.open(mailtoLink, "_blank");
  };

  return (
    <div className="flex flex-col align-center">
      <h1 className="text-center mt-10 text-5xl">Welcome to my page!</h1>
      <div className="flex flex-col items-center">
        <div className="mt-5 flex flex-col items-center">
          <img
            src="assets/profile_pic.jpeg"
            className="relative z-10 w-60 h-60 rounded-full object-cover border-4 border-black"
          />
          <div class="flex items-center flex-col">
            <div class="flex flex-col items-center gap-y-4 text-left w-8/12">
              <h1 class="text-4xl font-semibold mt-10">About me</h1>
              <p class="text-base font-normal text-gray-500">
                I am a passionate and enthusiastic computer science student with
                technical skills and an extensive leadership experience. Through
                various projects and relevant experiences, I have demonstrated
                my passion for problem-solving and my knack for web development
                and side of automation. As a computer science student with many
                experiences working with people inside and outside of my
                university, I discovered a natural inclination for leading and
                managing people, finding fulfillment in guiding teams towards
                common goals. I excel in communication and interpersonal skills,
                enjoying meaningful conversations that contribute to a positive
                and collaborative environment.
              </p>
              <div className="flex justify-between w-full mt-5">
                <div className="relative z-10 text-black flex flex-col items-start rounded-xl w-36 bg-white r shadow-lg shadow-sky-500">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                  <button
                    onClick={handleDownloadResume}
                    class="relative gradient-border px-4 py-2 rounded-xl flex items-center justify-between bg-black hover:bg-white hover:text-black opacity-95 hover:opacity-100 text-white w-full text-base font-normal transform hover:scale-105 duration-300"
                  >
                    <FaDownload />
                    My resume
                  </button>
                </div>
                <div className="relative z-10 text-black flex flex-col items-start rounded-xl w-40 bg-white r shadow-lg shadow-sky-500 h-10">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                  <button
                    onClick={handleComposeEmail}
                    class="relative gradient-border px-4 py-2 rounded-xl flex items-center justify-between bg-black hover:bg-white hover:text-black opacity-95 hover:opacity-100 text-white w-full text-base font-normal transform hover:scale-105 duration-300"
                  >
                    <MdEmail />
                    Contact me
                  </button>
                </div>
                <div className="relative z-10 text-black flex flex-col items-start rounded-xl w-48 bg-white r shadow-lg shadow-sky-500 h-10">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                  <a
                    href="https://www.linkedin.com/in/alif-hakimi-azwan/"
                    target="_blank"
                    class="relative gradient-border px-4 py-2 rounded-xl flex items-center justify-between bg-black hover:bg-white hover:text-black opacity-95 hover:opacity-100 text-white w-full text-base font-normal transform hover:scale-105 duration-300"
                  >
                    <FaLinkedin />
                    Connect with me
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default AboutPage;
