import "./NewProperty.scss";
import RatingDropdown from '../../components/RatingDropdown/RatingDropdown';
import { useState } from "react";
import ImageTitleDropdown from "../../components/ImageTitleDropdown/ImageTitleDropdown";


    //a page where a new property location can be added
    // a form that gathers all the necessary  information and sends it to firebase


       // delete Object.assign(o, {[newKey]: o[oldKey] })[oldKey];
    // delete Object.assign(altProperty, {[tag]: altProperty.address}).address;


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
        "third bedroom": null,
        "fourth bedroom": null
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

  const locations = [
    {value: "main room", label: "Main Room"},
    {value: "dining room", label: "Dining Room"},
    {value: kitchen, label: "Kitchen"},
    {value: bathroom, label: "Bathroom"},
    {value: garden, label: "Garden"},
  ]

  const bedroomLocations = [
    {value: "master bedroom", label: "Master"},
    {value: "second bedroom", label: "Second"},
    {value: "third bedroom", label: "Third"},
    {value: "fourth bedroom", label: "Fourth"},
  ]


  const tagline = (e) => {
  setProperty({...property, description: e.target.value})
  }


  
  const imageSelect = (e) =>{
    const newProperty = {...property}; 
    newProperty.images.kitchen = URL.createObjectURL(e.target.files[0])
    setProperty(newProperty)
  }
console.log(property.images);

  console.log(property);

  const bedroomSelect = (e) =>{
    const newProperty = {...property}; 
    newProperty.images.bedrooms = URL.createObjectURL(e.target.files[0])
    setProperty(newProperty)
  }

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
      <ImageTitleDropdown placeHolder="Location..."/>
      <div> 
        <input type="file" accept="image/*" name="file-select" id="" onChange={imageSelect}/>
        <input type="file" accept="image/*" name="file-select" id="" onChange={bedroomSelect}/>
        <div className="property__preview">
          <img src={property.images.kitchen} alt="preview" />
        </div>        
        <label htmlFor="image-description">Enter image description. e.g. <em>'Front room'</em></label>
        <input type="text" name="image-description" id="" onChange={tagline}/>
      </div>
    </div>
  )
}

export default NewProperty