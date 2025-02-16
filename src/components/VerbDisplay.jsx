import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { FaLink } from "react-icons/fa";
import TextField from '@mui/material/TextField';
import "./styles/kalima.css";

const VerbDisplay = () => {
  const [figl, setFigl] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchWords = async () => {
      const querySnapshot = await getDocs(collection(db, "figl"));
      const wordsList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      const sortedVerb = wordsList.sort((a, b) => {
        if (a.id < b.id) return 1;
        if (a.id > b.id) return -1;
        return 0;
      });
      setFigl(sortedVerb);
    };

    fetchWords();
  }, []);

  const handleRowClick = (verb) => {
    navigate("/info/verb", { state: { verb } });
  };

  const filteredFigl = figl.filter((e) => e.past.includes(searchTerm))

  return (
    <div className="contol-block-kalima">
      <TextField
        type="text"
        placeholder="Найти слово..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
      <p className="_tx-kalima-style_"> فِعْلٌ</p>
      {filteredFigl.map((e) => (
        <div key={e.id}>
          <div className="control-jumla-kalima">
            <p
              onClick={() => handleRowClick(e)}
              className="tx-kalima-style cursor-pointer flex items-center gap-5 "
            >
              {e.past} <FaLink/>
            </p>
            <p className="tx-kalima-style">{e.example} </p>
            <hr className='h-0.5 mt-2 bg-color-bg-hr'/>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VerbDisplay;
