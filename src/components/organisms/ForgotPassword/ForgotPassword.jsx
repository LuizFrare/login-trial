import BannerHero from "../../atoms/BannerHero/BannerHero";
import Logo from "../../../assets/images/Logo.png";
import "./styles.css";
import ResetPassword from "../../molecules/ResetPassword/ResetPassword";

function ForgotPassword() {
  return (
    <div className="ForgotPassword">
      <ResetPassword />
      <BannerHero>
        <img src={Logo} alt="Harpia SIEM" />
      </BannerHero>
    </div>
  );
}

export default ForgotPassword;
