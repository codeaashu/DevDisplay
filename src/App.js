import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './Homepage';
import Opportunities from './Page/Opportunities.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/opportunities" element={<Opportunities />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
