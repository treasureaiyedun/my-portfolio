import { ChevronRight } from "lucide-react";
import HeroImg from "../assets/images/hero.jpg";

const Hero = ({ scrollToSection }) => {
  return (
    <section className="flex items-center justify-center min-h-screen px-4 lg:px-20 2xl:px-28" id="home">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-10 w-full max-w-7xl 2xl:max-w-[120rem]">
        
        {/* Left Section (Text) */}
        <div className="flex-1 text-center lg:text-left">
          {/* Greeting Badge */}
          <div className="inline-block bg-purple-500 text-white px-4 py-2 rounded-lg text-sm font-medium mb-6 transform -rotate-2 2xl:text-2xl">
            Hi there!
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl 2xl:text-7xl font-bold leading-tight 2xl:leading-snug mb-6">
            I'm{" "}
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Treasure Aiyedun
            </span>
          </h1>

          <p className="text-2xl 2xl:text-5xl">Frontend Engineer {"."} Problem Solver</p>

          {/* Buttons */}
          <div className="flex flex-col lg:flex-row gap-4 mt-10">
            <a href="https://drive.google.com/file/d/1eHIKjT6wMlWaMInWWtw46Q7NXd5RqW7w/view">
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 rounded-full font-medium transition-all duration-200 w-full 2xl:text-3xl 2xl:py-4">
                View my resume
              </button>
            </a>

            <div className="p-[1px] rounded-full bg-gradient-to-r from-purple-500 to-pink-500 inline-block 2xl:ml-2">
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-white hover:text-white hover:bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-3 rounded-full font-medium transition-all duration-200 flex items-center justify-center group w-full hover:scale-110 dark:text-white dark:bg-[#0f0f0f] dark:hover:bg-gray-800 2xl:text-3xl 2xl:py-4"
              >
                Hire Me
                <ChevronRight className="ml-2 h-4 w-4 2xl:w-8 2xl:pt-1 2xl:h-8 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Right Section (Image) */}
        <div className="flex-1 flex justify-end">
          <div className="relative w-72 h-72 md:w-80 md:h-80 2xl:w-[36rem] 2xl:h-[36rem]">
            <div className="w-full h-full rounded-full overflow-hidden border-2 border-gradient-to-r from-purple-500 to-pink-500 p-1">
              <div className="w-full h-full rounded-full overflow-hidden">
                <img
                  src={HeroImg}
                  alt="Treasure Aiyedun"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
