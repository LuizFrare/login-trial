import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage, ForgotPassword } from "./components/organisms";

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
