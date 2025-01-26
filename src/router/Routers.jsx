import React from 'react'
import {Routes, Route} from 'react-router-dom'
import AddVerbForm from '../components/AddVerbForm'
import AddWordForm from '../components/AddWordForm'
import WordListDisplay from '../components/WordListDisplay'
import VerbDisplay from '../components/VerbDisplay'
import Home from '../page/Home'
import InfoWordList from '../components/InfoWordList'
import InfoVerb from '../components/InfoVerb'
import AddBooksBeginers from '../components/AddBooksBeginers'
import BooksAll from '../components/BooksAll'
import BookRead from '../components/BookRead'

const Routers = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='verb/add' element={<AddVerbForm/>}/>
        <Route path='word/add' element={<AddWordForm/>}/>
        <Route path='word/dislay' element={<WordListDisplay/>}/>
        <Route path='verb/dislay' element={<VerbDisplay/>}/>
        <Route path='info/word' element={<InfoWordList/>}/>
        <Route path='info/verb' element={<InfoVerb/>}/>
        <Route path='books-add-beginers/' element={<AddBooksBeginers/>}/>
        <Route path='books-for-beginers/' element={<BooksAll/>}/>
        <Route path='book/to/read' element={<BookRead/>}/>
    </Routes>
  )
}

export default Routers




