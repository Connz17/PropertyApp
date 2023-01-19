import "./PropertyCard.scss";


const PropertyCard = ({address, description, price, rating, numberOfBedrooms, image}) => {

  

  return (
    <div className="card"> <br />
      <img className="card__image" src={image} alt="house" /> 
      <div className="card__rating">{rating}</div>
      <h3 className="card__locale">{address}</h3>
      <div className="card__numbers">
        <h3 >Bedrooms: {numberOfBedrooms}</h3>
        <h3>£{price.toLocaleString()}</h3>
      </div> <br />
      {/* <div className="card__section"> */}
        <h5 className="card__info">{description}</h5>
      {/* </div> */}
    </div>
  )
}

export default PropertyCard