import "./NewProperty.scss";
import RatingDropdown from '../../components/RatingDropdown/RatingDropdown';
import { useState } from "react";
import ImageTitleDropdown from "../../components/ImageTitleDropdown/ImageTitleDropdown";
import UploadScreen from "../../components/UploadScreen/UploadScreen";
import { getDatabase, ref, push } from "firebase/database";
import Button from "../../components/Button/Button";


    //a page where a new property location can be added
    // a form that gathers all the necessary  information and sends it to firebase


       // delete Object.assign(o, {[newKey]: o[oldKey] })[oldKey];
    // delete Object.assign(altProperty, {[tag]: altProperty.address}).address;


const NewProperty = () => {
  const db = getDatabase();
  const [showImageUpload, setShowImageUpload] = useState(false);
  const [property, setProperty] = useState(
    {
    address: "",
    images: {
      main: "",
      dining: "",
      kitchen: "",
      bathroom: "",
      garden: "",
      bedrooms: {
        master: "",
        second: "",
        third: "",
        fourth: ""
      }
    },
    description: "",
    price: 0,
    rating: 0,
  })


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


  const tagline = (e) => {
  setProperty({...property, description: e.target.value})
  }

  const address = (e) => {
    setProperty({...property, address: e.target.value})
    }

  const cost = (e) => {
    setProperty({...property, price: e.target.value})
    }
  
  const toggleUploadScreen = () => {
    setShowImageUpload(!showImageUpload)
  }

  const pushNewProperty = (property) => {
    const postPropRef = ref(db, "properties/");
    push(postPropRef, property);
  }

  const handleUpload = () => {
    console.log(property);
    pushNewProperty(property);
    

  }

  
  



  return (
    <div>
      <h2 className="heading">Upload a property</h2>
      <h4 className="heading">Please enter the properties information.</h4><br />
      <div className="upload__info"> 
        <label className="upload__label" >Address:</label><br/>
          <input className="upload__input" type="text" id="" placeholder="38 Kingsway London SW92 7MQ" onChange={address}/> <br/>
        <label className="upload__label">Price:</label><br/>
          <input className="upload__input--digit" type="number" id="" placeholder="450000" onChange={cost}/> <br />
        <label className="upload__label">Property rating:</label>
          <RatingDropdown onChange={(value) => setProperty({...property, rating: value})  } placeHolder="Select..." options={options}/>
      </div><br />
      <Button buttonTitle={"Upload pictures"} handleClick={toggleUploadScreen}/> <br />
      {showImageUpload && <UploadScreen property={property} setProperty={setProperty} toggleUpload={toggleUploadScreen}/> }
      <label className="upload__label">Enter property description...</label><br/>
        <textarea className="upload__input--long" name="" id="" spellCheck="true" onChange={tagline}></textarea><br />
      <input className="upload__button" type="submit" value="Save Property" onClick={handleUpload}/>
    </div>
  )
}

export default NewProperty