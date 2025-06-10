const Card = (props) => {
const { ResName } = props;
const info1 = ResName?.card?.card?.restaurant?.info;
const info2 = ResName?.card?.card?.info;
const {imageId}=info2;

const { name ,avgRating,areaName,costForTwo } = info1 || {};

  const imageurl=info2?.imageId?`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${imageId}`:"https://imgs.search.brave.com/hTHdDphZnLJp0r7aTWdmMYwI7OXp3teRaTzjoVQYBc4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi81LzVhLyUy/Mkh5ZGVyYWJhZGlf/RHVtX0Jpcnlhbmkl/MjIuanBnLzUxMnB4/LSUyMkh5ZGVyYWJh/ZGlfRHVtX0Jpcnlh/bmklMjIuanBn";
  return (
    <div className="Card">
      <div className="Card-Img">
        <img src={imageurl} alt={name} />
      </div>
      <div className="Card-Items">
        <div className="L1">
          <h2 style={{textAlign:"center"}}>{name}</h2>
          <span><p style={{paddingLeft:"4px"}}>{avgRating} ⭐</p></span>
        </div>
        {/* <div className="L1">
          <h3 style={{ color: "rebeccapurple" }}>
            {category} <span></span>
          </h3>
        </div> */}

        <div className="L1">
          <h3 style={{ color: "orangered" }}>{areaName}</h3>
          <h3 style={{ color: "blue" }}>cost:{costForTwo/200}/-</h3>
        </div>
      </div>
    </div>
  );
};
export default Card;