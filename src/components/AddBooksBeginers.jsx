import React, { useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';
import './styles/buttonAdd.css'
import './styles/kalima.css'
import TinyMCEEditor from './TinyMCEEditor';


const AddBooksBeginers = () => {
    const [nameBook, setNameBook] = useState('');
  const [textHaraca, setTextHaraca] = useState('');
  const [textNoHaraca, setTextNoHaraca] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('nameBook:', nameBook); 
    console.log('textHaraca:', textHaraca); 
    console.log('textNoHaraca:', textNoHaraca); 
    if (!nameBook || !textHaraca || !textNoHaraca) {
        alert('Пожалуйста, заполните все поля!');
        return;
    }
    try {
      await addDoc(collection(db, 'beginers_books'), {
        nameBook: nameBook,
        textHaraca: textHaraca,
        textNoHaraca: textNoHaraca,
      });
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  return (
    <div className=''>
    <form onSubmit={handleSubmit} className=' '>
        <input 
        dir="rtl"
        type="text"
        value={nameBook}
        onChange={(e) => setNameBook(e.target.value)}
        placeholder='nameBook'
        />
        <TinyMCEEditor
        value={textNoHaraca}
        onChange={setTextNoHaraca}
        placeholder='text-books-arabic-no-haraca'
        />
        <TinyMCEEditor
        value={textHaraca}
        onChange={setTextHaraca}
        placeholder='text-books-arabic-haraca'
        />
      <button type="submit" className="button-add">
        إضافة الكلمة
      </button>
    </form>
    </div>
  );
};

export default AddBooksBeginers;
