import React, { useState } from 'react'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function CreateBook() {

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState([]);
  const navigate = useNavigate();
  
  const handleSaveBook = () => {
    const data = {
      title,
      author,
      publishYear
    };
    setLoading(true);
    axios.post('http://localhost:3000/books', data)
    .then(() => {
      setLoading(false);
      navigate('/');
    }).catch((err) => {
      setError(Object.keys(err.response.data.errors));
      console.log(error);
      setLoading(false);
    })
  }


  return (
    <div className='p-4'>
      <BackButton/>
      <h1 className='text-3xl my-4'>Add Book</h1>
      {loading ? (
        <Spinner/>
      ) : ( '' )}
      <div className='flex flex-col border-2 border-green-400 rounded-xl w-{600px} p-4 mx-auto'>
          <div className='my-4'>
            <label className='text-xl mr-4 text-gray-500'>Title</label>
            <input type='text' value={title} onChange={(e)=>setTitle(e.target.value)} className='border-2 border-gray-500 px-4 py-2 w-full'></input>
          </div>
          <div className='my-4'>
            <label className='text-xl mr-4 text-gray-500'>Author</label>
            <input type='text' value={author} onChange={(e)=>setAuthor(e.target.value)} className='border-2 border-gray-500 px-4 py-2 w-full'></input>
          </div>
          <div className='my-4'>
            <label className='text-xl mr-4 text-gray-500'>Publish Year</label>
            <input type='text' value={publishYear} onChange={(e)=>setPublishYear(e.target.value)} className='border-2 border-gray-500 px-4 py-2 w-full'></input>
            {!!error.length && error.map((e, i) => (
                  <li key={i} className='text-red-500 text-sm'>{e} is invalid</li>
              ))} 
          </div>
          <button className='p-2 bg-green-300 m-8' onClick={handleSaveBook}>Add</button>
        </div>
    </div>
  )
}
