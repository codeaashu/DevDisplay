import AboutUS from './components/Sidebar/AboutUs';
import Homepage from './Homepage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutUS />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
