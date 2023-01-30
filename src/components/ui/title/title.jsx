import './title.css';

export const titleSize = {
  BIG: "big",
  SMALL: "small",
  DEFAULT: ""
}

const Title = (props) => {
  return (
    <h1 className={`title${ props.size ? ` title_${props.size}` : ""}`}>{props.children}</h1>
  );
}

export default Title;