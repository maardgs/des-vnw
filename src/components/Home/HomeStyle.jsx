import styled from "styled-components";

export const StyledHome = styled.main`
  height: 85vh;

  #adSection {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: Poppins;
    padding: 10vh 5vw;
    height: 60vh;

    @media (max-width: 768px) {
      flex-direction: column;
      height: auto;
    }
  }

  h3 {
    font-family: Inter;
    font-weight: 400;
  }

  h2 {
    font-weight: 400;
    font-size: 3.6rem;

    .highlighted {
      color: #037143;
      display: inline;
    }
  }

  p {
    font-size: 1.5rem;
    margin: 1rem 0;
  }

  #adContent {
    width: 50%;
  }

  #circleWrapper {
    border-radius: 80%;
    width: 40vw;
    height: 40vw;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 1;
    


    img#mainCup {
      height: 90%;
    }

    @media (max-width: 768px) {
      width: 80vw;
      height: 80vw;
      margin-top: 2rem;
    }
  }

  #optionsSection {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5vh 0;

    button.sampleButton {
      background-color: transparent;
      border: none;
      margin: 0 1%;

      img {
        height: 12vh;
        transition: transform 0.2s;

        &:hover {
          cursor: pointer;
          transform: rotate(10deg) translateY(-10px);
        }
      }
    }
  }

  #learnMoreButton {
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
`;
