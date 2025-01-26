import React, { useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';
import '../index.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './styles/buttonAdd.css'

const AddWordForm = () => {
  const [word, setWord] = useState('');
  const [synonym, setSynonym] = useState('');
  const [plural, setPlural] = useState('');
  const [antonym, setAntonym] = useState('');
  const [example, setExample] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'words'), {
        word: word,
        synonym: synonym || null,
        plural: plural || null,
        antonym: antonym || null,
        example: example || null
      });
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  return (
    <div className='w-60 flex flex-col  items-center text-black font-bold '>
      <h1 className=' text-heading-size  w-60 flex justify-center '>كلمة</h1>
    <form onSubmit={handleSubmit} className=' flex flex-col items-center'>
      <div>
        <label>كلمة:</label>
        <Box>
          <TextField  label="كلمة" id='كلمة'
            type="text"
            value={word}
            onChange={(e) => setWord(e.target.value)}
            
          />
        </Box>
      </div>
      <div>
        <label>مرادف:</label>
        <Box>
        <TextField  label='مرادف' id='مرادف'
          type="text"
          value={synonym}
          onChange={(e) => setSynonym(e.target.value)}
          
        />
        </Box>
      </div>
      <div>
        <label>جمع:</label>
        <Box>
        <TextField  label='جمع' id='جمع'
          type="text"
          value={plural}
          onChange={(e) => setPlural(e.target.value)}
          
        />
        </Box>
      </div>
      <div>
        <label>عكس:</label>
        <Box>
        <TextField  label="عكس" id='عكس'
          type="text"
          value={antonym}
          onChange={(e) => setAntonym(e.target.value)}
        />
        </Box>
      </div>
      <div>
        <label>جملة:</label>
        <Box>
        <TextField label='جملة' id='جملة'
          type="text"
          value={example}
          onChange={(e) => setExample(e.target.value)}
        />
        </Box>
      </div>
      <button type="submit" className="button-add">
        إضافة الكلمة
      </button>
    </form>
    </div>
  );
};

export default AddWordForm;
