import React, { useState } from "react";
import { RiLinkedinBoxFill, RiGithubFill } from "@remixicon/react";
import { Loader } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isPending, setIsPending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsPending(true);

    try {
      await new Promise((r) => setTimeout(r, 1500));

      const res = await fetch("https://formsubmit.co/ajax/fab657a1391d038ab6d2d164e865d2a1 ", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error(res.statusText);

      setFormData({ name: "", email: "", subject: "", message: "" });
      alert("Message submitted successfully!");
    } catch (err) {
      console.error(err);
      alert("There was an error submitting the form. Please try again.");
    } finally {
      setIsPending(false);
    }
  };

  return (
    <div  className="max-w-7xl mx-auto">
      <section
      id="contact"
      className="min-h-screen lg:min-h-[80vh] w-full py-20 lg:px-20 text-black dark:text-white"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center md:items-start">
        <div className="px-6 md:px-0">
          <h2 className="text-4xl font-bold mb-4 font-heading">Get in Touch</h2>
          <p className="text-lg mb-4">
            Feel free to reach out to me at {" "}
            <a
              href="mailto:treasureaiyedun01@gmail.com"
              className="text-pink-400 underline"
            >
              treasureaiyedun01@gmail.com
            </a>
          </p>
          <p className="mb-8">
            For more info, here's my {" "}
            <a
              href="https://drive.google.com/file/d/1cMVRRTvavlqltpeksNJNNO9ciEe4Ya7o/view"
              className="text-pink-400 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              resume
            </a>
            .
          </p>
          <div className="flex gap-4 text-2xl">
            <a
              href="https://github.com/treasureaiyedun"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-400 transition-colors"
            >
              <RiGithubFill className="w-12 h-12" />
            </a>
            <a
              href="https://www.linkedin.com/in/treasureaiyedun"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-400 transition-colors"
            >
              <RiLinkedinBoxFill className="w-12 h-12" />
            </a>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="px-6 rounded-lg space-y-4"
        >
          {[{ label: "Name", id: "name", type: "text" },
          { label: "Email", id: "email", type: "email" }, 
           { label: "Subject", id: "subject", type: "text"
          }].map(({ label, id, type }) => (
            <div key={id}>
              <label htmlFor={id} className="block mb-1 font-medium font-heading">
                {label}
              </label>
              <input
                id={id}
                name={id}
                type={type}
                value={formData[id]}
                onChange={handleChange}
                autoComplete="off"
                required
                className="w-full px-4 py-2 rounded dark:bg-[#0f0f0f] border border-gray-700 focus:border-pink-500 focus:outline-none"
              />
            </div>
          ))}

          <div>
            <label htmlFor="message" className="block mb-1 font-medium font-heading">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded resize-none dark:bg-[#0f0f0f] border border-gray-700 focus:border-pink-500 focus:outline-none"
            />
          </div>

          <button
            disabled={isPending}
            className="w-full md:w-40 relative p-[1px] rounded-full focus:outline-none disabled:opacity-60 bg-gradient-to-r from-purple-500 to-pink-500 hover:scale-110 transition-transform"
          >
            <span className="block w-full rounded-full bg-white dark:bg-[#0f0f0f] py-3 text-center font-semibold transition-colors">
              {isPending ? (
                <span className="flex items-center justify-center gap-2">
                  <Loader className="animate-spin h-5 w-5" /> Submitting...
                </span>
              ) : (
                "Submit"
              )}
            </span>
          </button>
        </form>
      </div>
    </section>
    </div>
    
  );
}
