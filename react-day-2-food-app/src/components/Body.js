import Card from "./Card";
import RES_API from "../utils/resdata";
import React, { useEffect, useState } from "react";
import Loader from "./Loader";
import { Link } from "react-router";
const Body = () => {
  let [RESTL, SETRESTL] = useState([]);
  let [COPYRESTL, SETCOPYRESTL] = useState([]);

  let [activebtn, setactivebtn] = useState("all");
  useEffect(() => {
    fetchdata();
  }, []);
  const fetchdata = async () => {
    const response1 = await fetch(RES_API);
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
    </div>
  );
};
export default Body;
