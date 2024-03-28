import React from 'react'
import { BsArrowLeft } from 'react-icons/bs'
import { Link } from 'react-router-dom'

export default function BackButton() {
  return (
    <div className='flex'>
        <Link to={'/'} className='bg-green-700 text-white px-4 py-1 rounded-lg w-fit'>
            <BsArrowLeft/>
        </Link>
    </div>
  )
}
