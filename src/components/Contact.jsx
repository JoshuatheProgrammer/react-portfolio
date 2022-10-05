import React from 'react'
import { MdArrowRight } from 'react-icons/md'

const Contact = () => {
  return (
    <div name='contact' className="w-full h-screen bg-gradient-to-b from-black to-rose-600 p-4 text-white">
        <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-gray-300">Get In Contact Me</p>
                <p className="py-6">Press The Button Below To Get In Contact With Me !</p>
            </div>

            <div className="flex justify-center items-center">
                <form action="https://getform.io/f/4caac2f1-f6a2-41b3-a1bb-3f5b71a3fe94" method="POST" className="flex flex-col w-full md:w-1/2">
                    <input type="text" name="name" placeholder='Please Enter Your Name' className="p-2 bg-transparent border-2 rounded-md text-white cursor-pointer hover:scale-105 duration-300 focus:outline-none" />
                    <input type="text" name="email" placeholder='Please Enter Your Email' className="my-4 p-2 bg-transparent border-2 rounded-md text-white cursor-pointer hover:scale-105 duration-300 focus:outline-none" />
                    <textarea name="message=" rows="10" placeholder='Please Enter Your Message' className="p-2 bg-transparent border-2 rounded-md text-white cursor-pointer hover:scale-105 duration-300 focus:outline-none"></textarea>
                    <button className="group text-white bg-transparent border-b-2 border-gray-300 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
                        Get In Contact With Me
                        <span className="group-hover:rotate-90 duration-300">
                        <MdArrowRight size={35} className="ml-1" />
                        </span>
                        </button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact