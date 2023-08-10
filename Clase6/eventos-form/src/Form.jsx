import { useState } from 'react'

function Form() {
    const [nombre, setNombre]=useState("");

    function handleNombre(e) {
        setNombre(e.target.value)
    }

    function registrar(e) {
        e.preventDefault();
        console.log("Usuario Registrado");
        console.log(nombre);
    }
    
    return(
        <div>
            <h2>Registracion</h2>
            <form onSubmit={registrar}>
                <div>
                    <input type="text" placeholder='Ingrese su Nombre' onChange={handleNombre} />
                </div>

                <div>
                    <input type="submit" value="Registrarse" />
                </div>
            </form>

        </div>
    )

}

export default Form;