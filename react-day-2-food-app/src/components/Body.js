import Card from "./Card";
import { RES_API1, RES_API2 } from "../utils/resdata";
import React, { useEffect, useState } from "react";
import Loader from "./Loader";
import { Link } from "react-router";
import {Toaster,toast} from "react-hot-toast";
// import { toast,ToastContainer } from "react-toast";
import useOnlineStatus from "../utils/useOnlineStatus"
const Body = () => {
  let [RESTL, SETRESTL] = useState([]);
  let [next, setnext] = useState(0);
  let [COPYRESTL, SETCOPYRESTL] = useState([]);
  let [activebtn, setactivebtn] = useState("all");
  let online=useOnlineStatus();
  useEffect(() => {
    fetchdata();
  }, [next]);
  const fetchdata = async () => {
    const response1 = await fetch(RES_API1 + next + RES_API2);
    // if(!response1){return setnext(0)};
    const response = await response1.json();
    console.log(response);
    const dishCards = response.data.cards;
    // console.log(dishCards);
    const updatedDishCards = dishCards.filter((_, index) => index !== 0);
    const REST = updatedDishCards;
    console.log(updatedDishCards);
    SETRESTL(updatedDishCards);
    SETCOPYRESTL(updatedDishCards);

  };
    if (!online) {
    toast.error("Currently you are offline⚠️");
    console.log("You are offline");
    return(<div style={{width:"100vw",height:"100vh",display:"flex",textAlign:"center"}}>
       <Toaster position="bottom-right"
  reverseOrder={false}/>
      <h1 style={{margin:"10px auto", width:"100%",fontFamily:"fantasy",color:"white",letterSpacing:"4px",}}>SOORY BUT U ARE OFFLINE NOW ⭕🌀</h1>
      
    </div>)
  }
  if (RESTL.length == 0) {
    
    return <Loader />;
  }
  return (
    <div className="Body">
      <div className="filter-search">
        <button
          style={{
            padding: 10,
            borderRadius: "20px",
            backgroundColor: activebtn === "all" ? "orange" : "orangered",
            marginBottom: "20px",
            marginRight: "10px",
            border: "solid 2px red",
            boxShadow: "0 0 5px white",
            cursor: "pointer",
          }}
          onClick={() => {
            let filterlist = RESTL.filter(
              (ResName) => parseFloat(ResName?.card?.card?.info?.avgRating) >= 0
            );
            SETCOPYRESTL(filterlist);
            setactivebtn("all");
          }}
        >
          ALL📩
        </button>
        <button
          style={{
            padding: 10,
            borderRadius: "20px",
            backgroundColor: activebtn === "top" ? "orange" : "orangered",
            marginBottom: "20px",
            border: "solid 2px red",
            boxShadow: "0 0 5px white",
            cursor: "pointer",
          }}
          onClick={() => {
            let filterlist = RESTL.filter(
              (ResName) => parseFloat(ResName?.card?.card?.info?.avgRating) >= 4.5
            );
            SETCOPYRESTL(filterlist);
            setactivebtn("top");
          }}
        >
          TOP-RESTAURANTS 🚀
        </button>
        <div className="Search">
          <div>search</div>
        </div>
      </div>
      <div className="Card-Cnt">
        {COPYRESTL.filter((_, index) => index !== 0).map((res, index) => {
          return (
            <Link
              to={`/rest/${res?.card?.card?.info?.id}`}
              key={res?.card?.card?.info?.id}
            >
              <Card ResName={res} key={res?.card?.card?.info?.id} />
            </Link>
          );
        })}
      </div>
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "20px"
      }}><button style={{
        padding: 10,
        borderRadius: "20px",
        background: "orange",
        marginRight: "10px",
        border: "solid 2px red",
        boxShadow: "0 0 5px white",
        cursor: "pointer",
      }} onClick={() => { setnext(next > 0 ? next - 1 : 0) }}>PREV</button>
        <button style={{
          padding: 10,
          borderRadius: "20px",
          background: "orange",
          border: "solid 2px red",
          boxShadow: "0 0 5px white",
          cursor: "pointer",
        }} onClick={() => { setnext(next < 9 ? next + 1 : 9) }}>NEXT</button>

      </div>

    </div>
  );
};
export default Body;
