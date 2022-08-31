import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Calculator from './pages/Calculator';
import Quote from './pages/Quote';

const App = () => (
  <div className="app">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="calculator" element={<Calculator />} />
      <Route path="quote" element={<Quote />} />
    </Routes>
  </div>
);

export default App;
