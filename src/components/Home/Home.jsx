import { useState } from "react";
import { StyledHome } from "./HomeStyle";

import orangeSmall from "../../assets/OrangeSmall.png";
import orangeBig from "../../assets/OrangeBig.png";
import redSmall from "../../assets/RedSmall.png";
import redBig from "../../assets/RedBig.png";
import yellowSmall from "../../assets/YellowSmall.png";
import yellowBig from "../../assets/YellowBig.png";

function Home() {
    const [currentCup, setCurrentCup] = useState(orangeBig);
    const [backgroundColor, setBackgroundColor] = useState('#037143');

    const showOrangeCup = () => {
        setCurrentCup(orangeBig);
        setBackgroundColor("#037143");
    };

    const showRedCup = () => {
        setCurrentCup(redBig);
        setBackgroundColor("#97090C");
    };

    const showYellowCup = () => {
        setCurrentCup(yellowBig);
        setBackgroundColor("#DECD13");
    };

    return (
        <StyledHome>
            <section id="adSection">
                <div id="adContent">
                    <h3>Mais que café</h3>
                    <h2>
                        Isso é <span className="highlighted">Starbucks</span>
                    </h2>
                    <p>
                        A Starbucks oferece uma variedade de cafés de alta qualidade. Alguns dos cafés mais
                        populares incluem o Caffè Americano, o Cappuccino, o Latte Macchiato e o Espresso. Além
                        disso, a Starbucks oferece bebidas quentes e frias, doces diferenciados e sanduíches.
                    </p>
                    <button id="learnMoreButton">SAIBA MAIS</button>
                </div>
                <div id="circleWrapper"> 
                    <div id="backgroundCircle" style={{ backgroundColor }}></div>
                    <img id="mainCup" src={currentCup} alt="Um copo grande mostrando uma deliciosa bebida gelada" /></div>
            </section>
            <section id="optionsSection">
                <button className="sampleButton" onClick={showOrangeCup}>
                    <img src={orangeSmall} alt="Miniatura de um copo na cor laranja" />
                </button>
                <button className="sampleButton" onClick={showRedCup}>
                    <img src={redSmall} alt="Miniatura de um copo na cor vermelha" />
                </button>
                <button className="sampleButton" onClick={showYellowCup}>
                    <img src={yellowSmall} alt="Miniatura de um copo na cor amarela" />
                </button>
            </section>
        </StyledHome>
    );
}

export default Home;
