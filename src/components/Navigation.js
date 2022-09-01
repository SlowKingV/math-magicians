import { NavLink } from 'react-router-dom';
import './css/Navigation.css';

const links = [
  { id: 1, title: 'Home', path: '/' },
  { id: 2, title: 'Calculator', path: 'calculator' },
  { id: 3, title: 'Quote', path: 'quote' },
];

const Navigation = () => (
  <nav className="navBar">
    <h1>Math Magicians</h1>
    <ul className="navList">
      {links.map((link) => (
        <li key={link.id} className="navItem">
          <NavLink to={link.path} className="navLink" end>
            {link.title}
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
);

export default Navigation;
