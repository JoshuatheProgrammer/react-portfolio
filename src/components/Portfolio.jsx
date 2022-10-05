import React from 'react'
import winacc from '../assets/portfolio/winacc.png'
import coolcss from '../assets/portfolio/coolcss.png'
import firstapi from '../assets/portfolio/firstapi.png'
import binarysearch from '../assets/portfolio/binarysearch.png'
import livehexcolor from '../assets/portfolio/livehexcolor.png'

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: winacc,
      dwn: "https://github.com/JoshuatheProgrammer/WindowsAccountCreator/tree/main/Source%20Code/Acc%20Maker",
    },
    {
      id: 2,
      src: coolcss,
      dwn: "https://github.com/JoshuatheProgrammer/movingeyes",
    },
    {
      id: 3,
      src: firstapi,
      dwn: "https://github.com/JoshuatheProgrammer/mapanimations",
    },
    {
      id: 4,
      src: binarysearch,
      dwn: "https://github.com/JoshuatheProgrammer/binarySearch",
    },
    {
      id: 5, 
      src: livehexcolor,
      dwn: 'https://github.com/JoshuatheProgrammer/liveColorCodes/tree/main/liveColorCodes/src',
    },
  ];

  return (
    <div name="portfolio" className="bg-gradient-to-b from-black to-rose-600 w-full text-white md:h-screen">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-300">Portfolio</p>
          {/* Check Out Some Of My Work! I Will Add More Soon As I Can, I Am Always Working On New Projects! */}
          {/* Replace The p className py-6 Text With The Text Above After You Create More React Apps! */}
          <p className="py-6">These Are Just Some Projects From My Classes Exlcuding The C# Application! I Plan To Fill This Section Up With React Applications As Well As C#!</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
        {
          portfolios.map(({id, src, dwn})=> (
            <div key={id} className="shadow-md shadow-white rounded-lg">
              <img src={src} alt="" className="rounded-md duration-200 hover:scale-105 " />
              <div className="flex items-center justify-center">
               <a href={dwn} target="_blank" rel="noopener noreferrer" className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"><button>View Code</button></a>
              </div>
              </div>
          ))
        }
        </div>

      </div>
    </div>
  )
}

export default Portfolio