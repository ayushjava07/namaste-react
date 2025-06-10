import Card from "./Card";
import Resdata from "../utils/resdata";
import React, { useEffect, useState } from "react";
import Loader from "./Loader";
const Body = () => {
  let [RESTL, SETRESTL] = useState([]); 
  let[activebtn,setactivebtn]=useState("all");
  useEffect(()=>{
    fetchdata();
  },[]);
  const fetchdata= async ()=>{
    const response1=await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/search/v3?lat=12.9628669&lng=77.57750899999999&str=paneer&trackingId=724459dc-9b41-e281-cfab-9c70a79cb2d9&submitAction=ENTER&queryUniqueId=fe823525-ebbc-0ed5-8997-af502e3a869e");
    const response=await response1.json();
    console.log(response);
    const dishCards = response.data.cards[1]?.groupedCard?.cardGroupMap?.DISH?.cards;
    // console.log(dishCards);
    const updatedDishCards = dishCards.filter((_, index) => index !== 0);
    const REST = updatedDishCards;
    console.log(updatedDishCards);
    SETRESTL(updatedDishCards);
  }
  if(RESTL.length==0){
    return(<Loader/>) ;
  }
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
         let filterlist = RESTL.filter(
            (ResName) => parseFloat(ResName?.card?.card?.restaurant?.info?.avgRating) >= 0
          );
          SETRESTL(filterlist);
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
          let filterlist = RESTL.filter(
            (ResName) => parseFloat(ResName?.card?.card?.restaurant?.info?.avgRating) >= 4.9
          );
          SETRESTL(filterlist);
          setactivebtn("top");
        }}
      >
        TOP-RESTAURANTS 🚀
      </button>
      <span><div className="Search">
        <div>search</div>
        <div><img src=""></img></div>
      </div></span>
      <div className="Card-Cnt">
        {RESTL.map((res, index) => {
          return <Card key={index} ResName={res} />;
        })}
      </div>
    </div>
  );
};
export default Body;
