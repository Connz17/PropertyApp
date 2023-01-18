import PropertyCard from "../../components/PropertyCard/PropertyCard";
import SearchBox from "../../components/SearchBox/SearchBox";
import "./HomePage.scss";


    //Map over the properties data like in the beer punk home page.
    //Use params to go to the single property location page
const HomePage = ({properties}) => {
  console.log(properties);

  

  const propertiesJSX = properties.map((property, index) => {
    return(
      <div key={index}>
        <PropertyCard address={property.address}  description={property.description} price={property.price} rating={property.rating} image={property.images.main} numberOfBedrooms={property.numOfBedrooms}/>
      </div>
    )
  })

  return (
    <>
    <div>
      <SearchBox/>
    </div>
    <div className="card__container">
      {propertiesJSX}
    </div>
    </>
  )
}

export default HomePage