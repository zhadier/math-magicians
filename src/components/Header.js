import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => (
  <header>
    <h1 className="logo">Math Magicians</h1>
    <nav className="header__nav">
      <ul>
        <li>
          <Link to="/math-magicians">Home</Link>
        </li>
        <li>
          <Link to="/math-magicians/calculator">Calculator</Link>
        </li>
        <li>
          <Link to="/math-magicians/quote">Quote</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
