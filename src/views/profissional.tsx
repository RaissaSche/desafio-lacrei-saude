import {
  Titulo,
  Texto,
  ContainerView,
  ContainerTextos,
  Imagem
} from "../commons/commons-styles.ts";

import ilustracao from "../assets/Profissional.svg";

const Profissional = () => {
  return (
    <ContainerView>
      <ContainerTextos>
        <Titulo>Profissional</Titulo>
        <Texto>
          A Lacrei garante que pessoas LGBTQIAPN + recebam atendimento realizado
          por profissionais de qualidade e que atendam às suas necessidades de
          forma segura e acolhedora.
        </Texto>
      </ContainerTextos>
      <Imagem src={ilustracao}></Imagem>
    </ContainerView>
  );
};

export default Profissional;
