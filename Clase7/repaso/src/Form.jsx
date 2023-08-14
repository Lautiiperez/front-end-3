import { useState } from 'react'

function Form({onAddPatient}){

    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(nombre && apellido){
            onAddPatient({nombre,apellido});
            setNombre("");
            setApellido("");
        }
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Ingrese su Nombre" value={nombre} onChangeCapture={(e)=>setNombre(e.target.value)} />

            <input type="text" placeholder="Ingrese su Apellido" value={apellido} onChangeCapture={(e)=>setApellido(e.target.value)} />
            <button type="Submit">Agregar Paciente</button>

        </form>

)


}

export default Form;