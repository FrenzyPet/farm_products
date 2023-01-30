import './button.css';

const Button = (props) => {
  return (
    <button type="button" style={{ minWidth: props.minWidth}} className="button">
      {props.text}
    </button>
  );
}

export default Button;