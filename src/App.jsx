import "./App.css";
import BannerHero from "./components/organisms/BannerHero/BannerHero";
import Login from "./components/organisms/Login/Login";
import Logo from "./assets/images/Logo.png"

function App() {
  return (
    <div className="App">
      <Login />
      <BannerHero>
        <img src={Logo} alt="Harpia SIEM" />
      </BannerHero>
    </div>
  );
}

export default App;
