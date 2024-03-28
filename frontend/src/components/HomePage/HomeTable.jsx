import React from 'react'
import { Link } from 'react-router-dom'
import { BsInfoCircle } from 'react-icons/bs'
import { AiOutlineEdit } from "react-icons/ai"
import { MdOutlineDelete } from 'react-icons/md'

export default function HomeTable({books}) {
  return (
    <table className='w-full border-separate border-spacing-2'>
          <thead>
            <tr>
              <th className='border border-green-600 rounded-md'>No</th>
              <th className='border border-green-600 rounded-md'>Title</th>
              <th className='border border-green-600 rounded-md'>Author</th>
              <th className='border border-green-600 rounded-md max-md:hidden'>Publish Year</th>
              <th className='border border-green-600 rounded-md max-md:hidden'>Operations</th>
            </tr>
          </thead>
          <tbody>
            {!!books.length && books.map((book, index) => (
              <tr key={book._id} className='h-8'>
                <td className='border border-green-700 rounded-md text-center'>
                  {index + 1}
                </td>
                <td className='border border-green-700 rounded-md text-center'>
                  {book.title}
                </td>
                <td className='border border-green-700 rounded-md text-center'>
                  {book.author}
                </td>
                <td className='border border-green-700 rounded-md text-center max-md:hidden'>
                  {book.publishYear}
                </td>
                <td className='border border-green-700 rounded-md text-center max-md:hidden'>
                  <div className='flex justify-center gap-x-4'>
                    <Link to={`/books/info/${book._id}`}>
                      <BsInfoCircle className='text-2xl text-green-800' />
                    </Link>
                    <Link to={`/books/edit/${book._id}`}>
                      <AiOutlineEdit className='text-2xl text-yellow-600' />
                    </Link>
                    <Link to={`/books/delete/${book._id}`}>
                      <MdOutlineDelete className='text-2xl text-red-600' />
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
  )
}
