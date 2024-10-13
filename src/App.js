import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './Homepage';
import Opportunities from './Page/Opportunities.jsx';
import About from './Page/about.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/opportunities" element={<Opportunities />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
