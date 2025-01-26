import React from 'react'
import WordListDisplay from '../components/WordListDisplay'
import VerbDisplay from '../components/VerbDisplay'
import BooksAll from '../components/BooksAll'
import './Home.css'

const Home = () => {
  return (
    <div>
      <div >
        <BooksAll/>
      </div>
      <hr className='h-0.5 mt-10 mb-10 bg-color-bg-hr'/>
      <div className='home-kalima'>
        <WordListDisplay/>
      </div>
      <hr className='h-0.5 mt-10 mb-10 bg-color-bg-hr'/>
      <div>
        <VerbDisplay/>
      </div>
    </div>
  )
}

export default Home