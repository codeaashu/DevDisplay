import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import Opportunities from './pages/Opportunities';
import TechResources from './pages/TechResources';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/opportunities" element={<Opportunities />} />
        <Route path="/tech-resources" element={<TechResources />} /> {/* Tech Resources route */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;