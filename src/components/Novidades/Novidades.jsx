import cafe from "../../assets/Cafe.png";
import { StyledNovidades } from "./NovidadesStyle";

function Novidades() {
    return (
        <StyledNovidades>
            <section>
                <div className="contentWrapper">
                    <h3>PREPARAÇÃO</h3>
                    <h2>Níveis de Torra</h2>
                    <p>
                        Qual a torra que prefere? Starbucks® Torra Clara, Torra Média ou Torra Escura? Estas são
                        as torras que fazem parte dos níveis de torra Starbucks®.
                    </p>
                    <button className="learnMoreButton">SAIBA MAIS</button>
                </div>
                <img
                    src={cafe}
                    alt="Uma imagem em zoom com uma colagem mostrando 3 tipos de torra de café: suave, equilibrada e forte."
                    className="coffeeImage" 
                />
            </section>
        </StyledNovidades>
    );
}

export default Novidades;
