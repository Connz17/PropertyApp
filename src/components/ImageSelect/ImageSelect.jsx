import "./ImageSelect.scss";


const ImageSelect = ({roomTitle, handleImageSelection, roomImage}) => {


    
  return (
    <div className="image-upload">
        <label className="room__label">{roomTitle}</label>
        <input type="file" accept="image/*" name="file-select" id="" onChange={handleImageSelection}/>
        { roomImage && <img className="room__image" src={roomImage} alt="preview" />}
    </div>
  )
}

export default ImageSelect