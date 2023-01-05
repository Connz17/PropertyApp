import SearchBox from "../../components/SearchBox/SearchBox";
import "./HomePage.scss";


    //Map over the properties data like in the beer punk home page.
    //Use params to go to the single property location page
const HomePage = () => {

  const properties = [{
    address: "",
    images: {
      "main room": "",
      "dining room": "",
      kitchen: "",
      bathroom: "",
      garden: "",
      bedrooms: {
        "master bedroom": "",
        "second bedroom": "",
        "third bedroom": ""
      }
    },
    price: 0,
    rating: 0,
  }]

  console.log(properties);

  return (
    <div>
      <SearchBox/>
    </div>
  )
}

export default HomePage