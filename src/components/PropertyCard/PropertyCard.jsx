import "./PropertyCard.scss";


const PropertyCard = ({address, description, price, rating, numberOfBedrooms, image}) => {

  

  return (
    <div className="card">
      <h2 className="card__rating">{rating}</h2>
      <img className="card__image" src={image} alt="house" />
      <h3 className="card__locale">{address}</h3>
      <div className="card__numbers">
        <h3>Bedrooms: {numberOfBedrooms}</h3>
        <h3>£{price.toLocaleString()}</h3>
      </div>
      <div className="card__info">
        <h5>{description}</h5>
      </div>
    </div>
  )
}

export default PropertyCard