import { IConfiguracaoBotao, BotoesNavegacao } from "../commons/commons-index";
import { ContainerHeader, LogoLacrei } from "./header-styles";

const Header = () => {
  let configuracoesHeader = new Array<IConfiguracaoBotao>(
    { nome: "Home", isBold: true },
    { nome: "Pessoa Usuária", isBold: true },
    { nome: "Profissional", isBold: true }
  );

  return (
    <ContainerHeader>
      <LogoLacrei>Lacrei</LogoLacrei>
      <BotoesNavegacao configuracoes={configuracoesHeader} />
    </ContainerHeader>
  );
};

export default Header;
