import { Routes, Route } from 'react-router-dom';
import CatPage from './pages/CatPage';
import ClientPage from './pages/ClientPage';
import DogPage from './pages/DogPage';
import HomePage from './pages/HomePage';


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/cat" element={<CatPage />} />
      <Route path="/dog" element={<DogPage />} />
      <Route path="/clients" element={<ClientPage />} />
    </Routes>
  );
}

export default App;