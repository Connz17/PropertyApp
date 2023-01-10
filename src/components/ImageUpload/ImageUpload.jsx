import "./ImageUpload.scss";
import * as FaIcons from 'react-icons/fa'



import React from 'react'

const ImageUpload = ({property, setProperty, toggleUpload}) => {

    const locations = ["main room", "dining room", "kitchen", "bathroom", "garden"]

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

      // const roomImageSelectJSX = locations.map((location)=> {
      //   return(
      //       <div key={location}>
      //         <input type="file" accept="image/*" name="file-select" id="" onChange={imageSelect}/>
      //       </div>
      //   )
      // })

    
  return (
    <div className="upload-window">
    <label className="upload-window__label">Upload property pictures</label>
    <FaIcons.FaWindowClose className="upload-window__close" onClick={toggleUpload}/>
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