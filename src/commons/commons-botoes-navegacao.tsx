import { IConfiguracaoBotao, BotaoNavegacao } from "./commons-index";
import { ContainerBotoesNavegacao } from "./commons-styles";

interface BotoesNavegacaoProps {
  configuracoes: Array<IConfiguracaoBotao>;
}

const BotoesNavegacao = (props: BotoesNavegacaoProps) => {
  return (
    <ContainerBotoesNavegacao>
      {props.configuracoes.map((obj) => (
        <BotaoNavegacao nomeBotao={obj.nome} bold={obj.isBold} />
      ))}
    </ContainerBotoesNavegacao>
  );
};

export default BotoesNavegacao;
