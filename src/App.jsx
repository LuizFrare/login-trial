import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from "./components/organisms/HomePage/HomePage";
import ForgotPassword from './components/organisms/ForgotPassword/ForgotPassword';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
