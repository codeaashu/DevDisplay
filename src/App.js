import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './Homepage';
import Opportunities from './Page/Opportunities.jsx';
import MainHomePage from './MainHomePage.jsx';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<MainHomePage />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/opportunities" element={<Opportunities />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
