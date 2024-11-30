import lojaImage from "../../assets/loja.png";
import { StyledAbout } from "./SobreStyle";

export default function About() { 
    return (
        <StyledAbout>
            <section>
                <img
                    src={lojaImage}
                    alt="Fachada em preto e branco de uma das primeiras lojas Starbucks."
                />
                <div className="contentWrapper">
                    <h2>PREPARAÇÃO</h2>
                    <h3>Níveis de Torra</h3>
                    <p>
                        Qual a torra que prefere? Starbucks® Torra Clara, Torra Média ou Torra Escura?
                        Estas são as torras que fazem parte dos níveis de torra Starbucks®.
                    </p>
                    <button className="learnMoreButton">SAIBA MAIS</button>
                </div>
            </section>
        </StyledAbout>
    );
}
