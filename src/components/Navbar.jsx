import React from 'react'
import { Link } from 'react-router-dom'
import Seachbar from './Seachbar'
function Navbar() {
  return (
    <nav  className='flex justify-between p-1 md:p-5 mx-auto w-full bg-red-300 items-center text-white' >
      <div className='hidden md:flex md:text-4xl'>
        <Link to='/'>
            <h1 className=''> Cooking Recipe </h1>
        </Link>
      </div>
        <div className='flex items-center md:justify-end justify-between'>
          <div>
            <Seachbar />
          </div>
          <div className='text-sm	md:text-lg border-2 rounded-xl py-1 px-1 md:p-3 text-center'>
            <Link to='/create'>
                <div >Create Recipe</div>
            </Link>
          </div>
        </div>
    </nav>
  )
}

export default Navbar