import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar bg-gray-600 flex justify-between items-center px-7 py-4">
      <div className="logo font-bold text-xl">&lt;Logo<span className='text-blue-300'>Pass/&gt;</span></div>
        <ul>
            <li className='flex gap-4 '>
                <a className='hover:font-bold hover:text-blue-300' href="/">Home</a>
                <a className='hover:font-bold hover:text-blue-300' href="#">About</a>
                <a className='hover:font-bold hover:text-blue-300' href="#">Contact</a>
                <a className='hover:font-bold hover:text-blue-300' href="#">More</a>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar
