import styled from "styled-components";

export const StyledHome = styled.main` // Nome atualizado para refletir a importação correta do estilo
  main {
    height: 85vh;
  }

  section {
    display: flex;
    justify-content: space-between;
  }

  #adSection { // Renomeado para refletir o propósito do conteúdo de anúncio
    font-family: Poppins;
    font-size: 3.4rem;
    padding: 10vh 0 10vh 5vw;
    height: 60vh;
  }

  h3 {
    font-family: Inter;
    font-weight: 400;
  }

  h2 {
    font-weight: 400;
    font-size: 3.6rem;

    h1 {
      color: #037143;
      display: inline;
    }
  }

  #adContent { // Renomeado para "adContent" (antes "enunciado") para dar clareza ao papel da div
    width: 800px;
  }

  p {
    font-size: 1.5rem;
  }

  #circleWrapper { // Renomeado para indicar que é um wrapper de círculo
    border-radius: 1000px;
    width: 1200px;
    height: 1200px;

    position: relative;
    left: 500px;
    top: 200px;
    z-index: -1;

    img {
      height: 50vh;
    }
  }

  #optionsSection { // Nome atualizado para indicar que controla as opções de visualização
    display: flex;
    justify-content: center;
    height: 10vh;
    margin: 5vh 0;
  }

  button.sampleButton { // Nome da classe atualizado para um padrão mais claro
    background-color: transparent; // Alterado para melhorar legibilidade
    border: none;
    margin: 0 1%;

    img {
      height: 12vh;

      &:hover {
        cursor: pointer;
        transform: rotate(10deg) translateY(-10px);
        transition: transform 0.2s;
      }
    }
  }

  button#learnMore { // Renomeado para descrever claramente o botão de "SAIBA MAIS"
    font-family: Inter;
    font-size: 1.5rem;
    color: #ffffff;
    background-color: #037143;
    border-radius: 30px;
    border-style: none;
    width: 15vw;
    height: 5vh;

    &:hover {
      cursor: pointer;
      background-color: #195324;
    }
  }
`;
