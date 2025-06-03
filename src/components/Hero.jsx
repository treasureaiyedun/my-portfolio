import { ChevronRight } from "lucide-react"
import HeroImg from "../assets/images/hero.jpg"

const Hero = ({ scrollToSection }) => {
  return (
    <div className="min-h-screen">

      {/* Hero Section */}
      <div className="flex items-center justify-between gap-5 px-6 lg:px-12 py-12 lg:py-20">
        <div className="flex-1 max-w-2xl">
          {/* Greeting Badge */}
          <div className="inline-block bg-purple-500 text-white px-4 py-2 rounded-lg text-sm font-medium mb-8 transform -rotate-2">
            Hi there!
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl font-bold leading-tight mb-8">
            I'm{" "}
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Treasure Aiyedun
            </span>
            , a problem solving
            web developer.
          </h1>

          {/* Action Buttons */}
          <div className="flex lg:flex-row md:flex-col flex-row gap-4">
            <a href="https://drive.google.com/file/d/1eHIKjT6wMlWaMInWWtw46Q7NXd5RqW7w/view">
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 w-full py-3 rounded-full font-medium transition-all duration-200">
                View my resume
              </button>
            </a>
            <div className="p-[1px] rounded-full bg-gradient-to-r from-purple-500 to-pink-500 inline-block">

              <button
                onClick={() => {
                  scrollToSection('contact');
                }}
                className="bg-white hover:bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-3 rounded-full font-medium transition-all duration-200 flex items-center justify-center group w-full hover:scale-110 dark:text-white dark:bg-[#0f0f0f] dark:hover:bg-gray-800">
                Hire Me
                <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>
        </div>

        {/* Profile Image Section */}
        <div className="hidden md:block relative  max-w-lg">

          {/* Profile Image */}
          <div className="relative flex md:w-80 md:h-80  w-96 h-96 mx-auto mt-">
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
    </div>
  )
}

export default Hero
