import { useState } from 'react'

function Form({onAddPatient}){

    const [nombre, setNombre] = useState("");
    const [medicamento, setMedicamento] = useState("");
    

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(nombre.length >= 3 && medicamento.length >=6 ){
            onAddPatient({nombre,medicamento});
            setNombre("");
            setApellido("");
        }else {
            onAddPatient("error")
        }
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Ingrese su Nombre" value={nombre} onChangeCapture={(e)=>setNombre(e.target.value)} />

            <input type="text" placeholder="Ingrese su Medicamento" value={medicamento} onChangeCapture={(e)=>setMedicamento(e.target.value)} />
           
            <button type="Submit">Agregar Paciente</button>

        </form>

)


}

export default Form;