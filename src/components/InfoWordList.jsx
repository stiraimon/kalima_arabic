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
          <p className="tx-kalima-style"> كلمة : {selectedWord.word}</p>
          <p className="tx-kalima-style"> مرادف : {selectedWord.synonym}</p>
          <p className="tx-kalima-style">جمع : {selectedWord.plural}</p>
          <p className="tx-kalima-style">عكس : {selectedWord.antonym}</p>
          <p className="tx-kalima-style">جملة : {selectedWord.example}</p>
          <button className="button-add" onClick={goBack}>
            Назад
          </button>
        </div>
      </div>
    </>
  );
};

export default InfoWordList;
