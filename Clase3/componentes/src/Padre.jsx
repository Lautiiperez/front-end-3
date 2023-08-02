import "./App.css";
import Hijo from "./Hijo";

function Padre() {
    return(
        <div className="Padre">
        <Hijo nombre="Juan"/>
        <Hijo/>
        <Hijo/>
        </div>
    );
}
export default Padre;