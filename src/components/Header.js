import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => (
  <header>
    <h1 className="logo">Math Magicians</h1>
    <nav className="header__nav">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/calculator">Calculator</Link>
        </li>
        <li>
          <Link to="/quote">Quote</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
