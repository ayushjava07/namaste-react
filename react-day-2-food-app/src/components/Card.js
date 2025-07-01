const Card = ({ ResName }) => {
  const info = ResName?.card?.card?.info;

  const {
    name = "Unknown Restaurant",
    avgRating = "N/A",
    areaName = "Unknown Area",
    costForTwo = "Cost not available",
    cloudinaryImageId,
    sla = { deliveryTime: "--" },
  } = info || {};

  const imageUrl = cloudinaryImageId
    ? `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`
    : "https://imgs.search.brave.com/hTHdDphZnLJp0r7aTWdmMYwI7OXp3teRaTzjoVQYBc4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi81LzVhLyUy/Mkh5ZGVyYWJhZGlf/RHVtX0Jpcnlhbmkl/MjIuanBnLzUxMnB4/LSUyMkh5ZGVyYWJh/ZGlfRHVtX0Jpcnlh/bmklMjIuanBn";

  return (
    <div className="bg-white rounded-2xl w-60 overflow-hidden shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out">
      <img
        src={imageUrl}
        alt={name}
        className="w-full h-48 object-cover"
        loading="lazy"
      />
      <div className="p-4 flex flex-col gap-2">
        <h2 className="text-xl font-semibold text-center text-gray-800 truncate">{name}</h2>

        <div className="flex justify-between text-sm text-gray-700">
          <span className="flex items-center gap-1">
            ⭐ <strong>{avgRating}</strong>
          </span>
          <span className="text-blue-600">⏱️ {sla.deliveryTime} min</span>
        </div>

        <p className="text-sm text-gray-500">{areaName}</p>
        <p className="text-sm font-medium text-orange-600">{costForTwo}</p>
      </div>
    </div>
  );
};

export default Card;
