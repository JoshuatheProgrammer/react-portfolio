import React from 'react'
// import { MdArrowRight } from 'react-icons/md'

const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b from-black via-black to-rose-600  text-white">

        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
            <div className="flex flex-col justify-center h-full">
                {/* Replace The Text Below Into The H2 After You Finish The Classes */}
            {/* I Am An Full Stack Developer */}
                <h2 className="text-4xl sm:text-7xl font-bold text-white">I Am Currently Taking Classes On Becoming An Fullstack Developer</h2>
                <p className="text-gray-200 py-4 max-w-md">This Is Just Some Work I Can Do As I Plan To Expand My Portfolio Much More!</p>
                {/* <div>
                    <button  className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-transparent">
                        About
                        <span className="group-hover:rotate-90 duration-300">
                            <MdArrowRight size={35} className="ml-1" />
                        </span>
                    </button>
                </div> */}
            </div>
        </div>
    </div>
  )
}

export default Home