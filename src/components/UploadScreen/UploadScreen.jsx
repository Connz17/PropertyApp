import "./UploadScreen.scss";
import * as FaIcons from 'react-icons/fa'
import ImageSelect from "../ImageSelect/ImageSelect";



const UploadScreen = ({property, setProperty, toggleUpload}) => {

  const imageSelectOutside = (e) =>{
    const newProperty = {...property}; 
    newProperty.images.outside = URL.createObjectURL(e.target.files[0])
    setProperty(newProperty);
  }

    const imageSelectMain = (e) =>{
        const newProperty = {...property}; 
        newProperty.images.main = URL.createObjectURL(e.target.files[0])
        setProperty(newProperty);
      }

      const imageSelectDining = (e) =>{
        const newProperty = {...property}; 
        newProperty.images.dining = URL.createObjectURL(e.target.files[0])
        setProperty(newProperty);
      }

      const imageSelectKitchen = (e) =>{
        const newProperty = {...property}; 
        newProperty.images.kitchen = URL.createObjectURL(e.target.files[0])
        setProperty(newProperty);
      }

      const imageSelectBathroom = (e) =>{
        const newProperty = {...property}; 
        newProperty.images.bathroom = URL.createObjectURL(e.target.files[0])
        setProperty(newProperty);
      }

      const imageSelectGarden = (e) =>{
        const newProperty = {...property}; 
        newProperty.images.garden = URL.createObjectURL(e.target.files[0])
        setProperty(newProperty);
      }

    
      const masterBedroomSelect = (e) =>{
        const newProperty = {...property}; 
        newProperty.images.bedrooms.master = URL.createObjectURL(e.target.files[0])
        setProperty(newProperty)
      }
      const secondBedroomSelect = (e) =>{
        const newProperty = {...property}; 
        newProperty.images.bedrooms.second = URL.createObjectURL(e.target.files[0])
        setProperty(newProperty)
      }

      const thirdBedroomSelect = (e) =>{
        const newProperty = {...property}; 
        newProperty.images.bedrooms.third = URL.createObjectURL(e.target.files[0])
        setProperty(newProperty)
      }

      const fourthBedroomSelect = (e) =>{
        const newProperty = {...property}; 
        newProperty.images.bedrooms.fourth = URL.createObjectURL(e.target.files[0])
        setProperty(newProperty)
      }




    
  return (
    <div className="upload-window">
    <h4 className="upload-window__label">Upload property pictures</h4>
    <FaIcons.FaWindowClose className="upload-window__close" onClick={toggleUpload}/>
      <div className="upload-window__form">
        <ImageSelect roomTitle={"Outside"} handleImageSelection={imageSelectOutside} roomImage={property.images.outside}/> <br />
        <ImageSelect roomTitle={"Main room"} handleImageSelection={imageSelectMain} roomImage={property.images.main}/> <br />
        <ImageSelect roomTitle={"Dining Room"} handleImageSelection={imageSelectDining} roomImage={property.images.dining}/> <br />
        <ImageSelect roomTitle={"Kitchen"} handleImageSelection={imageSelectKitchen} roomImage={property.images.kitchen}/> <br />
        <ImageSelect roomTitle={"Bathroom"} handleImageSelection={imageSelectBathroom} roomImage={property.images.bathroom}/> <br />
        <ImageSelect roomTitle={"Garden"} handleImageSelection={imageSelectGarden} roomImage={property.images.garden}/> <br />
        <h5 className="upload-window__label">Upload bedroom pictures</h5>
        <ImageSelect roomTitle={"Master bedroom"} handleImageSelection={masterBedroomSelect} roomImage={property.images.bedrooms.master}/><br />
        <ImageSelect roomTitle={"Second bedroom"} handleImageSelection={secondBedroomSelect} roomImage={property.images.bedrooms.second}/><br />
        { property.images.bedrooms.master && <ImageSelect roomTitle={"Third bedroom"} handleImageSelection={thirdBedroomSelect} roomImage={property.images.bedrooms.third}/>} <br />
        { property.images.bedrooms.second && <ImageSelect roomTitle={"Fourth bedroom"} handleImageSelection={fourthBedroomSelect} roomImage={property.images.bedrooms.fourth}/> }
      </div>
    </div>
  )
}

export default UploadScreen