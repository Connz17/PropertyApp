import "./Button.scss";



const Button = ({buttonTitle, buttonClass, handleClick}) => {
  return (
    <div>
        <button onClick={handleClick} className={buttonClass}>{buttonTitle}</button>
    </div>
  )
}

export default Button