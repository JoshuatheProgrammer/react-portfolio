import React from 'react'

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b from-rose-600 to-black text-white">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-gray-400">About</p>
            </div>
            <p className="text-xl mt-20">
              I am a full stack web developer. 
              I am currently looking for a job as a web developer.
              I am an 22 year old who grew up in the Bay Area California!
              Living in the Bay Area has given me quite a taste in music!
              I am also a photographer!</p>
            <br />

            <p className="text-xl">
              I am proficient in HTML, CSS, JavaScript, C#. 
              I have experience with Git, Github.
              I have some experience using Ubuntu, Kali Linux and Fedora!
              Very little experience but still some experience!
              Languages I have not coded in a very long time!
              Visual Basic, and Bash the two languages 
              I have not coded in a very long time!</p>
        </div>
    </div>
  )
}

export default About