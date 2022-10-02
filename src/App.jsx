import { Routes, Route, } from 'react-router-dom';

import Home from './home';
import Resume from './resume';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/resume" element={<Resume />} />
    </Routes>
  );
}

export default App;
