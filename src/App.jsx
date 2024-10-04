import Homepage from './Homepage';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Opportunities from './page/Opportunities';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/opportunities" element={<Opportunities />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
