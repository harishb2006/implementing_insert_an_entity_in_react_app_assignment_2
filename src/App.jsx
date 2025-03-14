import MovieForm from './components/MovieForm';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/movieForm" element={<MovieForm />} />
      </Routes>
    </Router>
  );
};

export default App;
