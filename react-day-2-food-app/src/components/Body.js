import Card from "./Card";
import { RES_API1, RES_API2 } from "../utils/resdata";
import React, { useEffect, useState } from "react";
import Loader from "./Loader";
import { Link } from "react-router";
import { Toaster, toast } from "react-hot-toast";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [restList, setRestList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [page, setPage] = useState(0);
  const [activeFilter, setActiveFilter] = useState("all");
  const online = useOnlineStatus();

  useEffect(() => {
    fetchData();
  }, [page]);

  const fetchData = async () => {
    try {
      const res = await fetch(RES_API1 + page + RES_API2);
      const json = await res.json();
      const dishCards = json.data.cards?.filter((_, index) => index !== 0) || [];
      setRestList(dishCards);
      setFilteredList(dishCards);
    } catch (err) {
      console.error("API Fetch Error", err);
    }
  };

  // Show offline toast and message
  if (!online) {
    toast.error("Currently you are offline ⚠️");

    return (
      <div className="w-screen h-screen bg-black text-white flex items-center justify-center flex-col text-center">
        <Toaster position="bottom-right" reverseOrder={false} />
        <h1 className="text-3xl font-bold tracking-widest">SORRY, YOU ARE OFFLINE ⭕🌀</h1>
      </div>
    );
  }

  // Loading
  if (restList.length === 0) return <Loader />;

  // Filter Handlers
  const handleFilter = (type) => {
    if (type === "top") {
      const topRated = restList.filter(
        (r) => parseFloat(r?.card?.card?.info?.avgRating) >= 4.5
      );
      setFilteredList(topRated);
    } else {
      setFilteredList(restList);
    }
    setActiveFilter(type);
  };

  return (
    <div className="w-full px-4 py-6">
      <Toaster position="bottom-right" reverseOrder={false} />

      {/* Filter Buttons */}
      <div className="flex flex-wrap items-center gap-4 mb-6">
        <button
          className={`px-4 py-2 rounded-full border-2 text-white font-semibold shadow ${activeFilter === "all" ? "bg-yellow-500" : "bg-yellow-700"
            }`}
          onClick={() => handleFilter("all")}
        >
          All 📩
        </button>

        <button
          className={`px-4 py-2 rounded-full border-2 text-white font-semibold shadow ${activeFilter === "top" ? "bg-yellow-500" : "bg-yellow-700"
            }`}
          onClick={() => handleFilter("top")}
        >
          Top Restaurants 🚀
        </button>

        <div className="text-white text-sm font-mono">Search (Coming soon...)</div>
      </div>

      <div className="flex flex-wrap gap-10 items-center justify-center p-4">
        {/* Card Grid */}
        {filteredList.map((res) => {
          const id = res?.card?.card?.info?.id || Math.random();
          return (
            <React.Fragment key={id}>
              <Link to={`/rest/${id}`}>
                <Card ResName={res} />
              </Link>
            </React.Fragment>
          );
        })}

      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-6 mt-8">
        <button
          className="px-4 py-2 rounded-full bg-yellow-500 text-white font-bold shadow border-2 border-yellow-900 hover:bg-yellow-600"
          onClick={() => setPage(page > 0 ? page - 1 : 0)}
        >
          PREV
        </button>
        <button
          className="px-4 py-2 rounded-full bg-yellow-500 text-white font-bold shadow border-2 border-yellow-900 hover:bg-yellow-600"
          onClick={() => setPage(page < 9 ? page + 1 : 9)}
        >
          NEXT
        </button>
      </div>
    </div>
  );
};

export default Body;
