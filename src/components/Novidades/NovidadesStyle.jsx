import styled from "styled-components";

export const StyledNovidades = styled.main` 
  section {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 85vh;
    background-color: #1e3932;
  }

  img.coffeeImage { 
    height: 40vh;
  }

  div.contentWrapper {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: flex-start; 
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

    button.learnMoreButton { 
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
