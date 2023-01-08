import SearchBox from "../../components/SearchBox/SearchBox";
import "./HomePage.scss";


    //Map over the properties data like in the beer punk home page.
    //Use params to go to the single property location page
const HomePage = ({properties}) => {

  console.log(properties);

  return (
    <div>
      <SearchBox/>
    </div>
  )
}

export default HomePage