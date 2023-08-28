import "./Style.css";

function Producto(props){
    return (
        <div className="Producto">
            <h1>Nombre del Producto: {props.nombre}</h1>
            <h3>Precio: {props.precio}</h3>
        </div>
    )
}
export default Producto;