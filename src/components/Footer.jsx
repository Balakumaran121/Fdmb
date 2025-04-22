import React from 'react'
import { SquareArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
const Footer = () => {
  
  const menuItems =[{
    id:1,
    name:"Help",
    link:"/help"
  },
  {
    id:2,
    name:"Site Index",
    link:"/site-index"
  },
  {
    id:3,
    name:"IMDbPro",
    link:"/imdbpro"
  },
  {
    id:4,
    name:"Box Office Mojo",
    link:"/box-office-mojo"
  }
]
  // const menuItems = ["Help", "Site Index", "IMDbPro", "Box Office Mojo"]
  return (
    <footer className='text-white'>
      <section className='bg-black/80 w-full flex justify-center p-3'>
        <button className='bg-amber-400 text-black px-6 py-2 rounded-full font-medium cursor-pointer'>
          Get the IMDb App
        </button>
      </section>

      <section className='bg-black/70 w-full flex justify-center p-3'>
        <button className='bg-zinc-800 text-sky-600 px-6 py-2 rounded-full font-medium cursor-pointer'>
          Sign in for more access
        </button>
      </section>

      <section className='bg-zinc-900 text-center py-4'>
        <ul className='flex justify-center gap-5 mb-3'>
          {
            menuItems.map((item) => (
              <Link to={item.link}>
              <li className='font-semibold flex gap-1 items-center' key={item.id}>
                {item.name} <SquareArrowUpRight size={20} />
              </li>
              </Link>
            ))
          }
        </ul>
        <p className='font-'>License IMDb Data</p>
        <p>1900-2025 by IDMb.com, inc.</p>
      </section>
    </footer>
  )
}

export default Footer
