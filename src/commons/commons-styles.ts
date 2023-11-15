import styled from "styled-components";

export const ContainerBotoesNavegacao = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 40px;
  margin-right: 5em;
`;

export const ContainerView = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 2em;
  justify-content: space-around;
`;

export const ContainerTextos = styled.div`
  display: flex;
  flex-direction: column;
  width: 35em;
`;

export const Botao = styled.button<{ $bold?: boolean }>`
  color: #1f1f1f;
  font-family: Nunito, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: ${(props) => (props.$bold ? "700" : "400")};
  line-height: normal;
  border: none;
  background-color: transparent;

  &:hover {
    color: #727272;
  }
`;

export const Titulo = styled.h1`
  color: #1f1f1f;
  font-family: Nunito, sans-serif;
  font-size: 48px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-align: left;
`;

export const Texto = styled.h2`
  color: #515151;
  font-family: Nunito, sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: left;
`;

export const Imagem = styled.img`
  width: 33em;
`;
