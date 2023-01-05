import "./NewProperty.scss";
import RatingDropdown from '../../components/RatingDropdown/RatingDropdown';


    //a page where a new property location can be added
    // a form that gathers all the necessary  information and sends it to firebase

const NewProperty = () => {

  const options = [
    {value: 1, label: "1"},
    {value: 2, label: "2"},
    {value: 3, label: "3"},
    {value: 4, label: "4"},
    {value: 5, label: "5"},
    {value: 6, label: "6"},
    {value: 7, label: "7"},
    {value: 8, label: "8"},
    {value: 9, label: "9"},
    {value: 10, label: "10"}
  ];

  return (
    <div>
      <label htmlFor="">Address</label>
      <input type="text" name="" id="" />
      <label htmlFor="file-select">Upload a picture</label>
      <input type="file" accept="image/*" name="file-select" id="" onChange={"#"}/>
      <div className="property__preview">
        <img src="#" alt="preview" />
      </div>
      <label htmlFor="image-description">Enter image description. e.g. <em>'Front room'</em></label>
      <input type="text" name="image-description" id="" />
      <label htmlFor="">Price</label>
      <input type="number" name="" id="" /> <br />
      <label htmlFor="">Property rating</label>
      <RatingDropdown onChange={(value) => console.log(value)} placeHolder="Select..." options={options}/>
    </div>
  )
}

export default NewProperty