import {
  Titulo,
  Texto,
  ContainerView,
  ContainerTextos,
  Imagem,
  ContainerBotoesNavegacaoHome,
  BotaoVerde,
  BotaoBranco,
} from "../commons/commons-styles.ts";

import ilustracao from "../assets/Home.svg";

const Home = () => {
  return (
    <ContainerView>
      <ContainerTextos>
        <Titulo>Boas vindas a Lacrei Saúde</Titulo>
        <Texto>
          Uma plataforma segura e acolhedora para comunidade LGBTQIAPN+
        </Texto>
        <ContainerBotoesNavegacaoHome>
          <BotaoVerde>Pessoa Usuária</BotaoVerde>
          <BotaoBranco>Profissional</BotaoBranco>
        </ContainerBotoesNavegacaoHome>
      </ContainerTextos>
      <Imagem src={ilustracao}></Imagem>
    </ContainerView>
  );
};

export default Home;
