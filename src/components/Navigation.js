import { NavLink } from 'react-router-dom';

const links = [
  { id: 1, title: 'Home', path: '/' },
  { id: 2, title: 'Calculator', path: 'calculator' },
  { id: 3, title: 'Quote', path: 'quote' },
];

const Navigation = () => {
  console.log('Nav rendered');
  return (
    <nav>
      <h1>Math Magicians</h1>
      <ul>
        {links.map((link) => (
          <li key={link.id}>
            <NavLink to={link.path} end>
              {link.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
