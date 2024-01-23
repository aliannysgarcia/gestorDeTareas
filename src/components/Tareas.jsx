import React from 'react'

const Tareas = ({tarea, eliminarTarea}) => {

    const handleEliminar = id => {
        console.log('se presiono el boton eliminar con el id:', id)
        eliminarTarea(id)
    }

    return (
        <tr>
            <th scope="row">{tarea.fecha ? tarea.fecha.toLocaleString() : ''}</th>
            <td>{tarea.tarea}</td>
            <td>
                <input className="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input"/>
            </td>
            <td>
                <button className='btn btn-warning me-1'>Editar</button>
                <button className='btn btn-danger' onClick={()=>handleEliminar(tarea.id)}>Eliminar</button>
            </td>
        </tr>
        
    )
}

export default Tareas