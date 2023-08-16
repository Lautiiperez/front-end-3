import React from "react";




const Card = ({pacientes}) => {
    return <div>
        
    <h2 className="titulo">Pacientes</h2>
    {pacientes.map((paciente,index)=>(
        <div key={index} className="card">
                <p>El paciente {paciente.nombre} utiliza la medicacion: {paciente.medicamento}</p>
        </div>
    ))}

</div>
};


export default Card;