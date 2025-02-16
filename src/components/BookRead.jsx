import React , {useState}from 'react'
import { useLocation, useNavigate } from "react-router-dom";
import './styles/Books.css'
import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';

const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(16px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#65C466',
        opacity: 1,
        border: 0,
      },
    },
  },
  '& .MuiSwitch-thumb': {
    width: 22,
    height: 22,
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
  },
}));

const BookRead = () => {
    const [showHaraca, setShowHaraca] = useState(true)
    const location = useLocation();
      const navigate = useNavigate();
      const selectedBook = location.state?.e;
      if (!selectedBook) return <p className="pt-10 ">no kalima</p>;

      const goBack = () => {
        navigate(-1);
      };
      const toggleText = () => {
        setShowHaraca(!showHaraca); 
      };
  return (
    <div className='control-book-read'>
      <div>
      <hr className='h-0.5 mb-3 bg-color-bg-hr'/>
      <label  htmlFor="toggleHaraca" className="font-medium button-switch">
          {showHaraca ? 'بِدُونِ الحَرَكَة' : 'بِالحَرَكَة'}
        <IOSSwitch
          id="toggleHaraca"
          checked={showHaraca}
          onChange={toggleText}
        />
        </label>
        <hr className='h-0.5 mt-3 mb-3 bg-color-bg-hr'/>
      </div>
      <div>
        {/* <hr className='h-0.5 mb-2 mt-2 bg-color-bg-hr'/> */}
        <h1 className='name-book p-5'>{selectedBook.nameBook}</h1>
        <hr className='h-0.5 mt-2 mb-10 bg-color-bg-hr'/>
      </div>
        <div
            className="books-h1"
            dangerouslySetInnerHTML={{
              __html: showHaraca ? selectedBook.textHaraca : selectedBook.textNoHaraca, }}
          />
        <button className="button-back mt-10" onClick={goBack}>
        back
          </button>
    </div>
  )
}

export default BookRead