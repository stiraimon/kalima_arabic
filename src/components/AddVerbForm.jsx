import React, { useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './styles/buttonAdd.css'

const AddVerbForm = () => {
  const [verb, setVerb] = useState('');
  const [past, setPast] = useState('');
  const [present, setPresent] = useState('');
  const [imperative, setImperative] = useState('');
  const [masdar, setMasdar] = useState('');
  const [example, setExample] = useState(''); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'figl'), {
        verb: verb || null,
        past: past || null,
        present: present || null,
        imperative: imperative || null,
        masdar: masdar || null,
        example: example 
      });
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  return (
    <div className='w-60 flex flex-col  items-center text-black font-bold '>
    <h1 className=' text-heading-size  w-60 flex justify-center '>فعل</h1>
    <form onSubmit={handleSubmit} className=' flex flex-col items-center'>
      <div>
        <label>فعل:</label>
        <Box>
        <TextField  label="فعل" id='فعل' 
          className='color-textField'
          type="text"
          value={verb}
          onChange={(e) => setVerb(e.target.value)}
          
        />
        </Box>
      </div>
      <div>
        <label>الماضي:</label>
        <Box>
        <TextField  label="الماضي" id='الماضي'
          type="text"
          value={past}
          onChange={(e) => setPast(e.target.value)}
          
        />
        </Box>
      </div>
      <div>
        <label>المضارع:</label>
        <Box>
        <TextField  label="المضارع" id="المضارع"
          type="text"
          value={present}
          onChange={(e) => setPresent(e.target.value)}
          
        />
        </Box>
      </div>
      <div>
        <label>الأمر:</label>
        <Box>
        <TextField  label="الأمر" id='الأمر'
          type="text"
          value={imperative}
          onChange={(e) => setImperative(e.target.value)}
          requred
        />
        </Box>
      </div>
      <div>
        <label>مصدر:</label>
        <Box>
        <TextField  label="مصدر" id='مصدر'
          type="text"
          value={masdar}
          onChange={(e) => setMasdar(e.target.value)}
          
        />
        </Box>
      </div>
      <div>
        <label>جملة:</label>
        <Box>
        <TextField   label="جملة" id='جملة'
          type="text"
          value={example}
          onChange={(e) => setExample(e.target.value)}
          
        />
        </Box>
      </div>
      <button type="submit" className="button-add">إضافة الفعل</button>
    </form>
    </div>
  );
};

export default AddVerbForm;
