import BannerHero from "../../atoms/BannerHero/BannerHero";
import Logo from "../../../assets/images/Logo.png";
import "./styles.css";
import Login from "../../molecules/Login/Login";

function HomePage() {
  return (
    <div className="HomePage">
      <Login />
      <BannerHero>
        <img src={Logo} alt="Harpia SIEM" />
      </BannerHero>
    </div>
  );
}

export default HomePage;
