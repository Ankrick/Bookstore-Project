import React, { useState, useEffect } from 'react'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

export default function DeleteBook() {

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios.delete(`http://localhost:3000/books/${id}`)
    .then((res)=> {
        setLoading(false);
        navigate('/');
    }).catch((err)=> {
        console.log(err);
        setLoading(false);
    })
}, [])



  return (
    <Spinner/>
  )
}
