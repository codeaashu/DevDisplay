// import AboutUS from './components/Sidebar/AboutUs';
import Homepage from './Homepage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Opportunities from './Page/Opportunities';
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
