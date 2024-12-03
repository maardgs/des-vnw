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
    width: 80%;
  }

 #circleWrapper {
    position: relative; 
    width: 80vw; 
    height: 40vw;
    top: 30vh;
    left: 20vw;
}

#backgroundCircle {
    position: absolute; 
    width: 100%; 
    height: 100%; 
    border-radius: 80%; 
    z-index: -1; 
    clip-path: polygon(0 0, 80% 0, 100% 80%, 0 80%);
    overflow: hidden;

}

#mainCup {
    position: absolute; 
    top: 22%; 
    left: 30%; 
    transform: translate(-50%, -50%); 
    height: 80%; 
    z-index: 2; 
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
