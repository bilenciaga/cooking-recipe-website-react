import React from 'react'
import { Link } from 'react-router-dom'
import Seachbar from './Seachbar'
function Navbar() {
  return (
    <nav  className='flex justify-between p-5 mx-auto w-full bg-red-300 items-center text-white' >
        <Link to='/'>
            <h1 className='text-4xl ml-10'> Cooking Recipe </h1>
        </Link>
        <div className='flex items-center justify-end mr-10'>
          <Seachbar className=''/>
          <Link to='/create'>
              <div className='text-3xl border-2 rounded-xl p-3'>Create Recipe</div>
          </Link>
        </div>
    </nav>
  )
}

export default Navbar