import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./styles/kalima.css";
import "./styles/buttonAdd.css";

const InfoWordList = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const selectedWord = location.state?.word;

  if (!selectedWord) return <p className="pt-10 ">no kalima</p>;

  const goBack = () => {
    navigate(-1);
  };

  return (
    <>
      <div>
        <div className=" flex flex-wrap flex-col pt-10 gap-5">
          <div>
          <span >كلمة :</span>
          <p className="tx-kalima-style">{selectedWord.word}</p>
          </div>
          <div>
          معنى :
          <p className="tx-kalima-style">{selectedWord.synonym}</p>
          </div>
          <div>
          جمع :
          <p className="tx-kalima-style">{selectedWord.plural}</p>
          </div>
          <div>
          عكس :
          <p className="tx-kalima-style">{selectedWord.antonym}</p>
          </div>
          <div>
          جملة :
          <p className="tx-kalima-style">{selectedWord.example}</p>
          </div>
          <button className="button-add" onClick={goBack}>
          back
          </button>
        </div>
      </div>
    </>
  );
};

export default InfoWordList;
