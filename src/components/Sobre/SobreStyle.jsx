import styled from "styled-components";

export const StyledAbout = styled.main`
  section {
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 85vh;

    @media (max-width: 768px) {
      flex-direction: column;
      height: auto;
    }
  }

  img.aboutStoreImage { 
    height: 50vh;

    @media (max-width: 768px) {
      height: auto;
      width: 90%;
    }
  }

  div.contentWrapper { 
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: flex-start;
    width: 40%;
    height: 40%;
    font-family: Poppins;

    @media (max-width: 768px) {
      width: 90%;
    }

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
      border: none;
      width: 15vw;
      height: 5vh;

      &:hover {
        cursor: pointer;
        background-color: #195324;
      }

      @media (max-width: 768px) {
        width: 70%;
      }
    }
  }
`;
