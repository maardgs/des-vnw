import styled from "styled-components";

export const StyledNovidades = styled.main` // Nome atualizado para refletir a importação correta do estilo
  section {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 85vh;
    background-color: #1e3932;
  }

  img.coffeeImage { // Adicionei uma classe para diferenciar o estilo da imagem
    height: 40vh;
  }

  div.contentWrapper { // Renomeei a div principal para refletir seu propósito
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: flex-start; // Especificidade na direção do alinhamento
    color: #ffffff;
    width: 40%;
    height: 40%;
    font-family: Poppins;

    h2 {
      font-family: Inter;
      font-size: 1.5rem;
    }

    h3 {
      font-size: 4rem;
    }

    p {
      font-size: 1.5rem;
    }

    button.learnMoreButton { // Renomeado para descrever a função do botão
      font-family: Inter;
      font-size: 1.5rem;
      color: #ffffff;
      background-color: #037143;
      border-radius: 30px;
      border: none; // Simplificado
      width: 15vw;
      height: 5vh;

      &:hover {
        cursor: pointer;
        background-color: #195324;
      }
    }
  }
`;
