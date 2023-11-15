import styled from "styled-components";

export const ContainerRedesSociais = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 32px;
`;

export const ContainerBotoesNavegacao = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 40px;
`;

export const ContainerFooter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

export const Texto = styled.p`
  color: #515151;
  font-family: Nunito, sans-serif;
  font-size: 12px;
  font-weight: 400;
  font-style: normal;
  line-height: normal;
  text-align: left;
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

export const Divisor = styled.hr`
  width: 80em;
  border-left: 1px solid #b0e0d3;
`;
