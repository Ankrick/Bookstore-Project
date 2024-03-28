import React from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineAddBox } from 'react-icons/md'
import HomeTable from '../components/HomePage/HomeTable';

export default function Home() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);


  useEffect(()=> {
    setLoading(true);
    axios.get('http://localhost:3000/books')
    .then((res)=>{
      setBooks(res.data);
      setLoading(false);
    })
    .catch((error) => {
      setLoading(false);
    })
  }, [])

  return (
    <div className='p-4'>
      <div className='flex justify-between items-center'>
        <h1 className='p-4'>Books List</h1>
        <Link to='/books/create'>
          <MdOutlineAddBox className='text-green-400 text-4xl'/>
        </Link>
      </div>
      {!!loading && !!books.length && <Spinner/>}
      {!!books.length && <HomeTable books={books}/>}
      {!!books.length || <span>No books available at the moment</span>}
    </div>
  )
}
