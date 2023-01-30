import './logo.css';
import logo from '../../../assets/logo.svg';

const Logo = () => {
  return (
    <a href="/" className="logo__link">
      <img src={logo} alt="Логотип" />
      <span className="logo__text">Фермерские продукты</span>
    </a>
  );
}

export default Logo;