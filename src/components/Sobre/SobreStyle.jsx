import styled from "styled-components";

export const StyledAbout = styled.main` // Nome atualizado para refletir o padrão
  section {
    display: flex;
    align-items: center;
    justify-content: space-around;

    height: 85vh;
  }

  img.storeImage { // Classe adicionada para maior especificidade
    height: 50vh;
  }

  div.contentWrapper { // Classe renomeada para maior clareza
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: flex-start;

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

    button.learnMoreButton { // Renomeei a classe do botão para ser mais descritiva
      font-family: Inter;
      font-size: 1.5rem;
      color: #ffffff;
      background-color: #037143;
      border-radius: 30px;
      border: none;
      width: 15vw;
      height: 5vh;

      &:hover {
        cursor: pointer;
        background-color: #195324;
      }
    }
  }
`;
