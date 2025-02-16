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
          <div>
          <span className="span-kalima-i"> كلمة :</span> 
          <p className="tx-kalima-style">{selectedVerb.past}</p>
          </div>
          <div>
          <span className="span-kalima-i"> مرادف : </span> 
          <p className="tx-kalima-style">{selectedVerb.present}</p>
          </div>
          <div>
          <span >جمع :</span>  
          <p className="tx-kalima-style">{selectedVerb.imperative}</p>
          </div>
          <div>
          <span>عكس : </span> 
          <p className="tx-kalima-style">{selectedVerb.masdar}</p>
          </div>
          <div>
          <span>جملة:</span>  
          <p className="tx-kalima-style">{selectedVerb.example}</p>
          </div>
          <button className="button-add" onClick={goBack}>
          back
          </button>
        </div>
      </div>
    </>
  );
};

export default InfoVerb;
