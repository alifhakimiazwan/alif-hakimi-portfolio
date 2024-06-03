import { FaEarthAmericas } from "react-icons/fa6";
import { IoIosJournal } from "react-icons/io";
import Footer from "./Footer";
import { CiChat1 } from "react-icons/ci";
import { CiBitcoin } from "react-icons/ci";
import { RiMentalHealthLine } from "react-icons/ri";
import {
  MdOutlineBook,
  MdOutlinePeople,
  MdOutlineFoodBank,
} from "react-icons/md";

const ProjectsPage = () => {
  return (
    <div className="mt-10 flex flex-col items-center">
      <h1 className="text-5xl">Projects</h1>
      <div className="mt-4 lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        <a
          href="https://github.com/alifhakimiazwan/Notes-App"
          target="_blank"
          class="p-5 m-2 flex flex-col items-start bg-gray-50 rounded-3xl cursor-pointer hover:bg-gray-100 text-left hover:scale-105 duration-300"
        >
          <div size="40" color="E0E6EB" class="go1550876186">
            <span
              name="Shape35"
              color="2D3A46"
              size="20"
              role="img"
              class="go2599496350"
            >
              <MdOutlineBook />
            </span>
          </div>
          <h3 class="text-2xl mt-4 font-medium">Notes App</h3>
          <p class="mt-2 opacity-50 font-light text-base">
            Create and save your notes with our Notes App!
          </p>
          <div className="flex justify-between mt-4">
            <span class="text-sm py-2 px-4 bg-gray-200 rounded-3xl mr-1">
              NodeJS
            </span>
            <span class="text-sm py-2 px-4 bg-gray-200 rounded-3xl mr-1">
              EJS
            </span>
            <span class="text-sm py-2 px-4 bg-gray-200 rounded-3xl mr-1">
              Passport
            </span>
            <span class="text-sm py-2 px-4 bg-gray-200 rounded-3xl mr-1">
              MongoDB
            </span>
          </div>
          {/* <div className="flex justify-center items-center mt-10 ml-80">
                        <MdOutlinePeople />
                        <span class="text-sm">3 developers</span>
                    </div> */}
        </a>
        <a
          href="https://github.com/sms021019/mental-health-tracker"
          target="_blank"
          class="p-5 m-2 flex flex-col items-start bg-gray-50 rounded-3xl cursor-pointer hover:bg-gray-100 text-left hover:scale-105 duration-300"
        >
          <div size="40" color="E0E6EB" class="go1550876186">
            <span
              name="Shape35"
              color="2D3A46"
              size="20"
              role="img"
              class="go2599496350"
            >
              <CiBitcoin />
            </span>
          </div>
          <h3 class="text-2xl mt-4 font-medium">Ebay Price Tracker</h3>
          <p class="mt-2 opacity-50 font-light text-base">
            Track and compare prices of your desired items on Ebay!
          </p>
          <div className="flex justify-between mt-4">
            <span class="text-sm py-2 px-4 bg-gray-200 rounded-3xl mr-1">
              Python
            </span>
            <span class="text-sm py-2 px-4 bg-gray-200 rounded-3xl mr-1">
              numpy
            </span>
            <span class="text-sm py-2 px-4 bg-gray-200 rounded-3xl mr-1">
              Web Scraping
            </span>
          </div>
          {/* <div className="flex justify-center items-center mt-10 ml-80">
            <MdOutlinePeople />
            <span class="text-sm">4 developers</span>
          </div> */}
        </a>
        <a
          href="https://github.com/alifhakimiazwan/NakMakanMana"
          target="_blank"
          class="p-5 m-2 flex flex-col items-start bg-gray-50 rounded-3xl cursor-pointer hover:bg-gray-100 text-left hover:scale-105 duration-300"
        >
          <div size="40" color="E0E6EB" class="go1550876186">
            <span
              name="Shape35"
              color="2D3A46"
              size="20"
              role="img"
              class="go2599496350"
            >
              <MdOutlineFoodBank />
            </span>
          </div>
          <h3 class="text-2xl mt-4 font-medium">Nak Makan Mana</h3>
          <p class="mt-2 opacity-50 font-light text-base">
            Having a hard time choosing local restaurant, use Nak Makan Mana to
            make your decision easier!
          </p>
          <div className="flex justify-between mt-4">
            <span class="text-sm py-2 px-4 bg-gray-200 rounded-3xl mr-1">
              React
            </span>
            <span class="text-sm py-2 px-4 bg-gray-200 rounded-3xl mr-1">
              Vercel
            </span>
            <span class="text-sm py-2 px-4 bg-gray-200 rounded-3xl mr-1">
              NodeJS
            </span>
            <span class="text-sm py-2 px-4 bg-gray-200 rounded-3xl mr-1">
              HTML/CSS
            </span>
          </div>
          {/* <div className="flex justify-center items-center mt-10 ml-80">
            <MdOutlinePeople />
            <span class="text-sm">4 developers</span>
          </div> */}
        </a>
      </div>
      <Footer />
    </div>
  );
};

export default ProjectsPage;
