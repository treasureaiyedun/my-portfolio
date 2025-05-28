import React, { useState } from 'react'
import { RiLinkedinBoxFill, RiGithubFill } from '@remixicon/react'
import { useContext } from 'react'
import { Loader } from 'lucide-react'
// import Navbar from '../components/Navbar'

const ContactMe = () => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")
  const [isPending, setIsPending] = useState(false);

  const handleChange = (e) => {
    setName(e.target.value)
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handleSubjectChange = (e) => {
    setSubject(e.target.value)
  }

  const handleMessageChange = (e) => {
    setMessage(e.target.value)
  }

const handleSubmit = async (e) => {
  e.preventDefault();
  const contact = { name, email, subject, message };

  setIsPending(true);

  try {
    // Artificial delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    const response = await fetch("http://localhost:5000/contacts", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(contact)
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const data = await response.json();
    console.log(data);

    setName("");
    setEmail("");
    setSubject("");
    setMessage("");

    alert("Message submitted successfully!");

  } catch (error) {
    console.error(error);
    alert("There was an error submitting the form. Please try again.");
  } finally {
    setIsPending(false);
  }
};



return (
  <>
    <div className="w-full flex lg:flex-col items-center justify-center min-h-screen" id="contact">
      <div className="w-full flex flex-col lg:flex-row">
        <div className="lg:w-1/2">
          <h1 className="text-4xl font-bold mt-10">Contact Me</h1>
          <p className="mt-4">Feel free to reach out to me at <a className="relative" href="mailto:treasureaiyedun01@gmail.com"> <span>treasureaiyedun01@gmail.com</span>
            <span className="absolute left-1 right-1 bottom-0 h-[1px] bg-[#4a7ac8]"></span>
          </a></p>
          <h1 className="font-light">For more info, here's my<button className="relative px-2 inline-block">
            <a href="https://drive.google.com/file/d/1jmP4XLOJiiNSZVDYzASLGZx3mXc2Vj81/view"><span className="">resume</span></a>
            <span className="absolute left-1 right-1 bottom-0 h-[1px] bg-[#804AC8]"></span>
          </button>
          </h1>
          <div className="flex space-x-3 w-full mt-3">
            <a href="https://github.com/treasureaiyedun/"><RiGithubFill /></a>
            <a href="https://www.linkedin.com/in/treasureaiyedun"><RiLinkedinBoxFill /></a>
          </div>
        </div>


        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 w-full lg:w-1/2 mt-10 p-5 lg:mt-0">
          <label htmlFor="name" className="text-lg font-semibold">Name</label>
          <input
            type="text"
            autoComplete="off"
            id="name"
            name="name"
            value={name}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-[#4a7ac8]" />

          <label
            htmlFor="email"
            className="text-lg font-semibold">Email</label>
          <input
            type="email"
            autoComplete="off"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-[#4a7ac8]" />

          <label
            htmlFor="subject"
            className="text-lg font-semibold">Subject</label>
          <input
            type="text"
            autoComplete="off"
            id="subject"
            name="subject"
            value={subject}
            onChange={handleSubjectChange}
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-[#4a7ac8]" />

          <label
            htmlFor="message"
            className="text-lg font-semibold">Message</label>
          <textarea id="message"
            name="message"
            value={message}
            onChange={handleMessageChange}
            className="border border-gray-300 rounded-lg px-4 py-2 resize-none focus:outline-none focus:border-[#4a7ac8]">
          </textarea>

          <button
            className="bg-[#2b2626] text-white text-center w-32 py-3 rounded-lg font-semibold hover:bg-black transition-colors duration-300">
            {/* Submit */}
            {isPending ? (
              <span className="flex items-center gap-2">
                <Loader /> Submitting...
              </span>
            ) : (
              "Submit"
            )}

          </button>

        </form>
      </div>
    </div>
  </>

)
}

export default ContactMe