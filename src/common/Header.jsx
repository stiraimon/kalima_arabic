import React from 'react'
import { Link } from 'react-router-dom'
import '../components/styles/link.css'

const Header = () => {
    return (
        <div dir='rtl' className='bg-header-bg pt-3 pb-3'>
            <div className='container'>
                <div className='flex justify-center '>
                <div className='flex justify-between items-center gap-3 w-1/2 text-white'>
                    <Link to='/' className='link-header-style'>home</Link>
                    <Link to='word/dislay' className='link-header-style'>كلمة</Link>
                    <Link to='verb/dislay' className='link-header-style'>فعل</Link>
                    <Link to='books-for-beginers/' className='link-header-style'>كتاب</Link>

                    {/* <Link to='verb/add' className='underline decoration-text-decoration-color'>figlADD</Link>
                    <Link to='word/add' className='underline decoration-text-decoration-color'>kalimaADD</Link>
                    <Link to='books-add-beginers/' className='underline decoration-text-decoration-color'>bookAdd</Link> */}
                </div>
                </div>
            </div>
        </div>
    )
}

export default Header