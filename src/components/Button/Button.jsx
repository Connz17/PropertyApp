import "./Button.scss";



const Button = ({buttonTitle, buttonClass}) => {
  return (
    <div>
        <button className={buttonClass}>{buttonTitle}</button>
    </div>
  )
}

export default Button