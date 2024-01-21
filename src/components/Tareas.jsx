import React from 'react'

const Tareas = ({tarea}) => {

    return (
        <tr>
            <th scope="row">{tarea.fecha}</th>
            <td>{tarea.tarea}</td>
            <td>
                <input className="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input"/>
            </td>
            <td>
                <button className='btn btn-warning me-1'>Editar</button>
                <button className='btn btn-danger'>Eliminar</button>
            </td>
        </tr>
        
    )
}

export default Tareas