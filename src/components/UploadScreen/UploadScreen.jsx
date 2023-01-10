import "./UploadScreen.scss";
import * as FaIcons from 'react-icons/fa'
import ImageSelect from "../ImageSelect/ImageSelect";



const UploadScreen = ({property, setProperty, toggleUpload}) => {


    const imageSelectMain = (e) =>{
        const newProperty = {...property}; 
        newProperty.images.main = URL.createObjectURL(e.target.files[0])
        setProperty(newProperty);
      }
    console.log(property.images);
    
      console.log(property);
    
      const bedroomSelect = (e) =>{
        const newProperty = {...property}; 
        newProperty.images.bedrooms = URL.createObjectURL(e.target.files[0])
        setProperty(newProperty)
      }



    
  return (
    <div className="upload-window">
    <h4 className="upload-window__label">Upload property pictures</h4>
    <FaIcons.FaWindowClose className="upload-window__close" onClick={toggleUpload}/>
      <div className="upload-window__form">
        <ImageSelect roomTitle={"Main room"} handleImageSelection={imageSelectMain} roomImage={property.images.main}/> 
        {/* <input type="file" accept="image/*" name="file-select" id="" onChange={imageSelect}/>
        <input type="file" accept="image/*" name="file-select" id="" onChange={bedroomSelect}/>
        <div className="preview__container">
            <img src={property.images.kitchen} alt="preview" />
        </div>         */}
      </div>
    </div>
  )
}

export default UploadScreen