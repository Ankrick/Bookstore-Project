import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'
import axios from 'axios'

export default function Info() {
    const [book, setBook] = useState({});
    const [loading, setLoading] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        setLoading(true);
        axios.get(`http://localhost:3000/books/${id}`)
        .then((res)=> {
            console.log(res.data.book)
            setBook(res.data.book);
            setLoading(false);
        }).catch((err)=> {
            console.log(err);
            setLoading(false);
        })
    }, [])

  return (
    <div className='p-4'>
        <BackButton/>
        <h1 className='text-3xl my-4'>Book Info</h1>
        {loading ? (
            <Spinner/>
        ) : (
            <div  className='flex flex-col border-2 border-green-400 rounded-xl w-fit p-5 space-y-8'>
                <div>
                    <span className='text-xl mr-6 text-gray-500'>Id</span>
                    <span>{book._id}</span>
                </div>
                <div>
                    <span className='text-xl mr-6 text-gray-500'>Author</span>
                    <span>{book.author}</span>
                </div>
                <div>
                    <span className='text-xl mr-6 text-gray-500'>Publish Year</span>
                    <span>{book.publishYear}</span>
                </div>
                <div>
                    <span className='text-xl mr-6 text-gray-500'>Time Added</span>
                    <span>{new Date(book.createdAt).toString()}</span>
                </div>
                <div>
                    <span className='text-xl mr-6 text-gray-500'>Last Updated At</span>
                    <span>{new Date(book.updatedAt).toString()}</span>
                </div>
            </div>
        )}
    </div>
  )
}
