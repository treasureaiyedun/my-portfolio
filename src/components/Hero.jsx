import { ChevronRight } from "lucide-react";
import HeroImg from "../assets/images/hero.jpg";

const Hero = ({ scrollToSection }) => {
  return (
    <div className="w-full max-w-7xl mx-auto">
      <section className="flex items-center justify-center min-h-screen px-4 lg:px-20" id="home">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-10 w-full max-w-7xl">
        
        <div className="flex-1 text-center lg:text-left">
          <div className="inline-block bg-purple-500 text-white px-4 py-2 rounded-lg text-sm font-medium mb-6 transform -rotate-2 ">
            Hi there!
          </div>

          <h1 className="text-5xl font-bold leading-tight mb-6">
            I'm{" "}
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Treasure Aiyedun
            </span>
          </h1>

          <p className="text-2xl ">Frontend Engineer {"."} Problem Solver</p>

          <div className="flex flex-col lg:flex-row gap-4 mt-10">
            <a href="https://drive.google.com/file/d/1eHIKjT6wMlWaMInWWtw46Q7NXd5RqW7w/view">
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 rounded-full font-medium transition-all duration-200 w-full ">
                View my resume
              </button>
            </a>

            <div className="p-[1px] rounded-full bg-gradient-to-r from-purple-500 to-pink-500 inline-block ">
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-white hover:text-white hover:bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-3 rounded-full font-medium transition-all duration-200 flex items-center justify-center group w-full hover:scale-110 dark:text-white dark:bg-[#0f0f0f] dark:hover:bg-gray-800"
              >
                Hire Me
                <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        <div className="flex-1 md:flex justify-end hidden">
          <div className="relative w-72 h-72 md:w-80 md:h-80">
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
    </div>
    
  );
};

export default Hero;
