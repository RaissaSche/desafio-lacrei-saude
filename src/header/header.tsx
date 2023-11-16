import { BotoesNavegacao, IConfiguracaoBotao } from "../commons/commons-index";
import { ContainerHeader, LogoLacrei } from "./header-styles";
import { useNavigate } from "react-router-dom";

const Header = () => {
  let configuracoesHeader = new Array<IConfiguracaoBotao>(
    { nome: "Home", isBold: true, path: "/home" },
    { nome: "Pessoa Usuária", isBold: true, path: "/pessoa-usuaria" },
    { nome: "Profissional", isBold: true, path: "/profissional" }
  );

  const navigate = useNavigate();
  return (
    <ContainerHeader>
      <LogoLacrei onClick={() => navigate("/home")}>Lacrei</LogoLacrei>
      <BotoesNavegacao configuracoes={configuracoesHeader} />
    </ContainerHeader>
  );
};

export default Header;
