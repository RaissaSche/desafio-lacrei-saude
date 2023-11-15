import BotaoNavegacao from "./footer-botao-navegacao";
import { ContainerBotoesNavegacao } from "./footer-styles";

const BotoesNavegacao = () => {
  return (
    <ContainerBotoesNavegacao>
      <BotaoNavegacao nomeBotao="Home" bold="true" />
      <BotaoNavegacao nomeBotao="Pessoa Usuária" />
      <BotaoNavegacao nomeBotao="Profissional" />
    </ContainerBotoesNavegacao>
  );
};

export default BotoesNavegacao;
