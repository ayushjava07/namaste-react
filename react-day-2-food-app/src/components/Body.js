import Card from "./Card";
import Resdata from "../utils/resdata";
import React, { useState } from "react";

const Body = () => {
  const REST = Resdata.SECTION_SEARCH_RESULT;
  let [RESTL, SETRESTL] = useState(REST); 
  let[activebtn,setactivebtn]=useState("all");
  return (
    <div className="Body">
      <button
        style={{
          padding: 10,
          borderRadius: "20px",
          backgroundColor: activebtn==="all"?"orange":"orangered",
          marginBottom: "20px",
          marginRight: "10px",
          border: "solid 2px red",
          boxShadow: "0 0 5px white",
          cursor: "pointer",
        }}
        onClick={() => {
          SETRESTL(REST);
          setactivebtn("all");
        }}
      >
        ALL📩
      </button>
      <button
        style={{
          padding: 10,
          borderRadius: "20px",
          backgroundColor: activebtn==="top"?"orange":"orangered",
          marginBottom: "20px",
          border: "solid 2px red",
          boxShadow: "0 0 5px white",
          cursor: "pointer",
        }}
        onClick={() => {
          let filterlist = REST.filter(
            (res) => parseFloat(res.info.rating.aggregate_rating) >= 4.5
          );
          SETRESTL(filterlist);
          setactivebtn("top");
        }}
      >
        TOP-RESTAURANTS 🚀
      </button>
      <div className="Search">
        <div>search</div>
      </div>
      <div className="Card-Cnt">
        {RESTL.map((res, index) => {
          return <Card key={index} ResName={res} />;
        })}
      </div>
    </div>
  );
};
export default Body;
