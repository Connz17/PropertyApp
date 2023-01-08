import "./NewProperty.scss";
import RatingDropdown from '../../components/RatingDropdown/RatingDropdown';
import { useState } from "react";


    //a page where a new property location can be added
    // a form that gathers all the necessary  information and sends it to firebase

const NewProperty = ({}) => {
  const [property, setProperty] = useState({
    address: "",
    images: {
      "main room": null,
      "dining room": null,
      kitchen: null,
      bathroom: null,
      garden: null,
      bedrooms: {
        "master bedroom": null,
        "second bedroom": null,
        "third bedroom": null
      }
    },
    price: 0,
    rating: 0,
  })

  const fileReader = new FileReader();

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

  const fileSelect = (e) =>{

    const newProperty = {...property}; 
    newProperty.images.kitchen = URL.createObjectURL(e.target.files[0])
    setProperty(newProperty)
  }
console.log(property.images);

  console.log(property);

  // fileReader.onchange =  (e) => {
  //   const {result} = e.target;
  // }

  // fileReader.readAsDataURL(fileObject)

  return (
    <div>
      <div className="property__info"> 
        <label htmlFor="">Address</label>
        <input type="text" name="" id="" />

        <label htmlFor="">Price</label>
        <input type="number" name="" id="" /> <br />

        <label htmlFor="">Property rating</label>
        <RatingDropdown onChange={(value) => console.log(value)} placeHolder="Select..." options={options}/>
      </div><br />

      <label htmlFor="file-select">Upload property pictures</label>
      <div> 
        <input type="file" accept="image/*" name="file-select" id="" onChange={fileSelect}/>
        <div className="property__preview">
          <img src={property.images.kitchen} alt="preview" />
        </div>        
        <label htmlFor="image-description">Enter image description. e.g. <em>'Front room'</em></label>
        <input type="text" name="image-description" id="" />
      </div>
    </div>
  )
}

export default NewProperty