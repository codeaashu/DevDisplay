import Homepage from './Homepage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Opportunities from './Page/Opportunities';
import Resources from './Page/Resources';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/opportunities" element={<Opportunities />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
