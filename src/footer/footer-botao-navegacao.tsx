import { Botao } from "./footer-styles";

const BotaoNavegacao = (props: any) => {
  if (props.bold) {
    return <Botao $bold>{props.nomeBotao}</Botao>;
  } else {
    return <Botao>{props.nomeBotao}</Botao>;
  }
};

export default BotaoNavegacao;
