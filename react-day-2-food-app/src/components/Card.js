const Card = (props) => {
  const { ResName } = props;
  const { name, rating, image, cft, cuisine = [] } = ResName?.info || {};
  const { offerValue } = ResName?.gold || {};

  return (
    <div className="Card">
      <div className="Card-Img">
        <img src={image?.url} alt={name} />
      </div>
      <div className="Card-Items">
        <div className="L1">
          <h2>{name}</h2>
          <p>{rating?.rating_text} ⭐</p>
        </div>

        <div className="L1">
          <h3 style={{ color: "rebeccapurple" }}>
            {cuisine.slice(0, 3).map((item, idx) => (
              <span key={idx}>
                {item.name}
                {idx < cuisine.length - 1 && idx < 2 ? ", " : ""}
              </span>
            ))}
          </h3>
        </div>

        <div className="L1">
          <h3 style={{ color: "orangered" }}>{offerValue || "No Offer"}</h3>
          <h3 style={{ color: "blue" }}>{cft?.text}</h3>
        </div>
      </div>
    </div>
  );
};
export default Card;