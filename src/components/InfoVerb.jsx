import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./styles/kalima.css";
import "./styles/buttonAdd.css";

const InfoVerb = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const selectedVerb = location.state?.verb;

  if (!selectedVerb) return <p className="pt-10 ">no kalima</p>;

  const goBack = () => {
    navigate(-1);
  };

  return (
    <>
      <div>
        <div className=" flex flex-wrap flex-col pt-10 gap-5">
          <p className="tx-kalima-style"> كلمة : {selectedVerb.past}</p>
          <p className="tx-kalima-style"> مرادف : {selectedVerb.present}</p>
          <p className="tx-kalima-style">جمع : {selectedVerb.imperative}</p>
          <p className="tx-kalima-style">عكس : {selectedVerb.masdar}</p>
          <p className="tx-kalima-style">جملة : {selectedVerb.example}</p>
          <button className="button-add" onClick={goBack}>
            Назад
          </button>
        </div>
      </div>
    </>
  );
};

export default InfoVerb;
