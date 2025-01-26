import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { FaLink } from "react-icons/fa";
import './styles/kalima.css'

const WordListDisplay = () => {
  const [words, setWords] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchWords = async () => {
      const querySnapshot = await getDocs(collection(db, 'words'));
      const wordsList = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      const sortedWords = wordsList.sort((a, b) => {
        if (a.id < b.id) return 1;
        if (a.id > b.id) return -1;
        return 0;
      });
  
      setWords(sortedWords);
    };


    fetchWords();
  }, []);

  const handleRowClick = (word) => {
    navigate('/info/word', { state: { word } });
  };

  return (
    <div className='contol-block-kalima'>
      <p className='_tx-kalima-style_'> :الكَلِمَةُ</p>
      {words.map((word) => (
        <div key={word.id}>
      <div className='control-jumla-kalima'>
        <hr className='h-0.5 mt-10 mb-10 bg-color-bg-hr'/>
        <p className='tx-kalima-style cursor-pointer flex items-center gap-5' onClick={() => handleRowClick(word)}>{word.word} <FaLink/></p>
        <p className='tx-kalima-style'>{word.example}</p>
        <hr className='h-0.5 mt-5 bg-color-bg-hr'/>
      </div>
        </div>
      ))}
    </div>
  );
};

export default WordListDisplay;
