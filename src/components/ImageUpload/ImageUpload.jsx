import "./ImageUpload.scss";


import React from 'react'

const ImageUpload = ({property, setProperty}) => {

    const locations = []

    const imageSelect = (e) =>{
        const newProperty = {...property}; 
        newProperty.images.kitchen = URL.createObjectURL(e.target.files[0])
        setProperty(newProperty);
      }
    console.log(property.images);
    
      console.log(property);
    
      const bedroomSelect = (e) =>{
        const newProperty = {...property}; 
        newProperty.images.bedrooms = URL.createObjectURL(e.target.files[0])
        setProperty(newProperty)
      }

    //   const locationJSX = locationInfo.map((location)=> {
    //     return

    
  return (
    <div className="upload-window">
    <label className="upload-window__label">Upload property pictures</label>
      <div className="upload-window__form"> 
        <input type="file" accept="image/*" name="file-select" id="" onChange={imageSelect}/>
        <input type="file" accept="image/*" name="file-select" id="" onChange={bedroomSelect}/>
        <div className="preview__container">
            <img src={property.images.kitchen} alt="preview" />
        </div>        
      </div>
    </div>
  )
}

export default ImageUpload