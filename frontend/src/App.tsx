import { Navigate, Route, Routes } from "react-router-dom";
import ProtectedLayout from "./components/ProtectedLayout";
import CatPage from "./pages/CatPage";
import CustomerPage from "./pages/CustomerPage";
import DogPage from "./pages/DogPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";

const App = () => (
  <Routes>
    <Route element={<ProtectedLayout />}>
      <Route path="/" element={<HomePage />} />
      <Route path="/cat" element={<CatPage />} />
      <Route path="/dog" element={<DogPage />} />
      <Route path="/customer" element={<CustomerPage />} />
    </Route>
    <Route path="/login" element={<LoginPage />} />
    <Route
      path="/404"
      element={
        <>
          <h1>Choose the correct path</h1>
        </>
      }
    />
    <Route path="*" element={<Navigate replace to="/404" />} />
  </Routes>
);

export default App;
