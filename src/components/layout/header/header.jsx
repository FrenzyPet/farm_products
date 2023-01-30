import Logo from '../../ui/logo/logo';
import Nav from '../nav/nav';
import './header.css';

const Header = () => {
  return (
    <header className="header">
      <Logo />
      <Nav />
    </header>
  );
}

export default Header;
