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

    @media (min-width: 600px) and (max-width: 1024px) {
      padding: 8vh 4vw;
      height: 50vh;
      flex-direction: row;
      text-align: center;
    }

    @media (max-width: 768px) {
      flex-direction: column;
      height: auto;
      text-align: center;
    }
    
  }

  h3 {
    font-family: Inter;
    font-weight: 400;
  }

  h2 {
    font-weight: 400;
    font-size: 3.6rem;

    @media (min-width: 600px) and (max-width: 1024px) {
      font-size: 3rem; 
    }

    .highlighted {
      color: #037143;
      display: inline;
    }
  }

  p {
    font-size: 1.5rem;
    margin: 1rem 0;

    @media (min-width: 600px) and (max-width: 1024px) {
      font-size: 1.3rem; 
    }
  }

  #adContent {
    width: 80%;
    text-align: center;

    @media (min-width: 600px) and (max-width: 1024px) {
      width: 90%;
    }
  }

  #circleWrapper {
    position: relative;
    width: 80vw;
    height: 40vw;
    top: 30vh;
    left: 20vw;
    
    @media (min-width: 600px) and (max-width: 1024px) {
          width: 70vw;
          height: 35vw;
          top: 25vh;
          left: 15vw;
    
    @media (max-width: 600px) {
      width: 100vw;
      height: auto;
      top: 140vh;
      left: 0;
    }

    }
  }

  #backgroundCircle {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 80%;
    z-index: -1;
    clip-path: polygon(0 0, 80% 0, 100% 80%, 0 80%);
    overflow: hidden;

    @media (min-width: 600px) and (max-width: 1024px) {
      border-radius: 50%;
      clip-path: polygon(0 0, 80% 0, 100% 80%, 0 80%);
      overflow: hidden;
    }

    @media (max-width: 600px) {
      clip-path: none;
      border-radius: 0;
      width: 100%;
      height: auto;
    }
 }

  #mainCup {
    position: absolute;
    top: 22%;
    left: 30%;
    transform: translate(-50%, -50%);
    height: 80%;
    z-index: 2;

    @media (min-width: 600px) and (max-width: 1024px) {
      top: 20%;
      height: 70%;
    }    
    @media (max-width: 768px) {
      left: 50%;
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

        @media (min-width: 600px) and (max-width: 1024px) {
          height: 10vh;
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
    margin: 2rem auto;
    display: block;
    text-align: center;

    &:hover {
      cursor: pointer;
      background-color: #195324;
    }
    @media (min-width: 600px) and (max-width: 1024px) {
          width: 40%;
          font-size: 1.2rem;
    }
    @media (max-width: 600px) {
      width: 70%;
      font-size: 1rem;
      height: auto;
      padding: 0.5rem 0;
    }

    
  }
`;
