import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage, ForgotPassword } from "./components/organisms";

function App() {
  console.log('hack')
  console.log('hack tober')
  console.log('hack tober fest')
  console.log('hack tober fest is')
  console.log('hack tober fest is nice')

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
