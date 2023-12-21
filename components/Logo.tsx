import Link from 'next/link';
import React from 'react'

function Logo() {
  return (
    <Link href={"/"} className='text-3xl font-bold bg-gradient-to-r dark:from-white
        dark:to-gray-400 text-transparent bg-clip-text hover:cursor-pointer from-black to-gray-400'>
        Form-Builder
    </Link>
  )
  
}

export default Logo;