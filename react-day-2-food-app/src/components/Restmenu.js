import { useEffect, useState } from "react";
import { GiArrowDunk } from "react-icons/gi";
import { useParams } from "react-router";
const Restmenu = () => {
  const [resdata, setresdata] = useState(null);
  const {resid}=useParams();
  console.log(resid);
 useEffect(() => {
    fetchdata();
  }, []);
  const fetchdata = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9628669&lng=77.57750899999999&restaurantId="+`${resid}`
    );
    const resjson = await response.json();
    setresdata(resjson);
    console.log(resjson);
  };

 

  // Safe check
  const menuItems =
    resdata?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card?.itemCards;

  const restaurantName = resdata?.data?.cards[2]?.card?.card?.info?.name;

  return (
    <div className="ResMenu">
      <h1>{restaurantName} 😋👨🏼‍🍳</h1>
      <h2>Menu <span style={{marginTop:"22px",color:"black",rotate:"10"}}><GiArrowDunk /></span></h2>

      <div className="Container">
        {menuItems?.map((item, index) => {
          const info = item?.card?.info;
          return (
            <div key={index} className="menucard">
              <div className="left">
                <h1>Name: {info.name}</h1>
                <h2>Price: ₹{info.price ? info.price / 100 : info.defaultPrice / 100}</h2>
                <h2>Rating: {info.ratings?.aggregatedRating?.rating || "No rating"}</h2>
              </div>
              <div className="right">
                <p></p>
                <button>Add to Cart</button>
                <div className="menuimg">
                <img src={info.imageId?`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/${info.imageId}`:"https://imgs.search.brave.com/vRb0jABTIDar4CiIfAdXZLqDkp5MKYS4Qh4B84JisNk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE3/NTUwNTc4MS9waG90/by9hcmFiaWMtYW5k/LW1pZGRsZS1lYXN0/ZXJuLWRpbm5lci10/YWJsZS1odW1tdXMt/dGFiYm91bGVoLXNh/bGFkLWZhdHRvdXNo/LXNhbGFkLXBpdGEt/bWVhdC1rZWJhYi5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/TjRQa2RiQTdCZi1X/TktmMlZSTno5bXRa/UDRzeHJkY3NNd1o3/UDk4MVpJWT0"}></img>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Restmenu;
