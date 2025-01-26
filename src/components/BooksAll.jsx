import React, { useState, useEffect } from 'react'
import { db } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import './styles/Books.css'
import { FaLink } from "react-icons/fa";

const BooksAll = () => {
    const [books, setBooks] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        const fetchWords = async () => {
                 const querySnapshot = await getDocs(collection(db, 'beginers_books'));
          const wordsList = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          }));
          const sortedVerb = wordsList.sort((a, b) => {
            if (a.id < b.id) return 1;
            if (a.id > b.id) return -1;
            return 0;
          });
          setBooks(sortedVerb);
        };
    
        fetchWords();
      }, []);

      const handleClick = (e) => {
        navigate('/book/to/read', {state: {e}} )
      }
  return (
    <div className='control-block-book'>
        <h1 className='text-heading-size '>Arabic books for beginners</h1>
        <h1 className='text-heading-size text-primary'>كُتُبُ العَرَبِيَّةِ لِلْمُبْتَدِئِينَ</h1>
    <div className='books-control'>
        {books.map((e) => (
            <div key={e.id} dir='rtl'>
                <h1 className='books-name-icon-link cursor-pointer' onClick={() => handleClick(e)}> {e.nameBook}<FaLink/></h1>
            </div>
        ))}
    </div>
    </div>
  )
}

export default BooksAll