import React from 'react'
import { useContext } from 'react'
// import Navbar from '../components/Navbar'

const ContactMe = () => {
  return (
    <>
    <div className="w-full flex lg:flex-col items-center justify-center min-h-screen dark:bg-slate-900 dark:text-white ">
    {/* <Navbar /> */}
      <div className="w-4/5 flex flex-col lg:flex-row">
        <div className="lg:w-1/2">
          <h1 className="text-4xl font-bold mt-10 contact-bg">Contact Me</h1>
          <p className="mt-4">Feel free to reach out to me at <a className="relative" href="mailto:treasureaiyedun01@gmail.com"> <span>treasureaiyedun01@gmail.com</span>
          <span class="absolute left-1 right-1 bottom-0 h-[1px] bg-[#4a7ac8]"></span>
          </a></p>
          <h1 class="font-light">For more info, here's my<button class="relative px-2 inline-block">
          <span class=""> resume</span>
          <span class="absolute left-1 right-1 bottom-0 h-[1px] bg-[#804AC8]"></span>
          </button>
          </h1>
        </div>

        <div className="flex flex-col gap-4 w-full lg:w-1/2 mt-10 p-5 lg:mt-0">
          <label htmlFor="name" className="text-lg font-semibold">Name</label>
          <input type="text" autoComplete="off" id="name" name="name" className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-[#4a7ac8]"/>
          <label htmlFor="email" className="text-lg font-semibold">Email</label>
          <input type="email" autoComplete="off" id="email" name="email" className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-[#4a7ac8]"/>
          <label htmlFor="subject" className="text-lg font-semibold">Subject</label>
          <input type="text" autoComplete="off" id="name" name="name" className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-[#4a7ac8]"/>
          <label for="message" class="text-lg font-semibold">Message</label>
          <textarea id="message" name="message"className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-[#804AC8]"></textarea>
          <button className="bg-pink-200 text-[#4b4b4b] text-center w-24 py-3 rounded-lg font-semibold hover:bg-[#dc6bc3] transition-colors duration-300">Submit</button>
        </div>
        {/* <div class="flex flex-col gap-4 w-full lg:w-1/2 mt-10 p-5 lg:mt-0">
          <label for="name" class="text-lg font-semibold">Name</label>
          <input type="text" id="name" name="name" className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-[#4a7ac8] text-black" value="" />
          <label for="email" class="text-lg font-semibold">Email</label>
          <input type="email" id="email" name="email" className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-[#4a78c8]" value="" />
          <label for="subject" class="text-lg font-semibold">Subject</label>
          <input type="subject" id="subject" name="subject" className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-[#804AC8]" value="" />
          <label for="message" class="text-lg font-semibold">Message</label>
          <textarea id="message" name="message" rows="5" className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-[#804AC8]"></textarea>
          <button className="bg-[#804AC8] text-black text-center w-24 py-3 rounded-lg font-semibold hover:bg-[#432965] transition-colors duration-300">Submit</button>
        </div> */}
      </div>
    </div>
    </>
    
  )
}

export default ContactMe