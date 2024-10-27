import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './Homepage';
import Opportunities from './Page/Opportunities.jsx';
import PageNotFound from './Page/PageNotFound.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} /> {/* Route for default homepage */}
        <Route path="/opportunities" element={<Opportunities />} /> {/* Route for opportunities page */}
        {/* Catch-all route for unmatched paths */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
