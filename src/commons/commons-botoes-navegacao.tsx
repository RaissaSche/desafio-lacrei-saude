import { IConfiguracaoBotao } from "./commons-index";
import { ContainerBotoesNavegacao, Botao } from "./commons-styles";
import { useNavigate } from "react-router-dom";

interface BotoesNavegacaoProps {
  configuracoes: Array<IConfiguracaoBotao>;
}

const BotoesNavegacao = (props: BotoesNavegacaoProps) => {
  const navigate = useNavigate();
  return (
    <ContainerBotoesNavegacao>
      {props.configuracoes.map((obj) => (
        <Botao $bold={obj.isBold} onClick={() => navigate(obj.path)}>
          {obj.nome}
        </Botao>
      ))}
    </ContainerBotoesNavegacao>
  );
};

export default BotoesNavegacao;
