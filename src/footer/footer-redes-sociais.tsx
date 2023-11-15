import { facebookLogo, instagramLogo, linkedinLogo } from "./footer-index";
import { ContainerRedesSociais } from "./footer-styles";

const RedesSociais = () => {
  return (
    <ContainerRedesSociais>
      <img src={facebookLogo} />
      <img src={instagramLogo} />
      <img src={linkedinLogo} />
    </ContainerRedesSociais>
  );
};

export default RedesSociais;
