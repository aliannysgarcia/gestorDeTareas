
const Tareas = ({tarea, eliminarTarea, setTareaAEditar}) => {
    
    const handleEliminar = id => {
        console.log('se presiono el botón eliminar con el id:', id)
        eliminarTarea(id)
    }
    const handleEditar = tarea => {
        console.log(tarea)
        setTareaAEditar(tarea)
    }

    return (
        <tr>
            <th scope="row">{tarea.fecha}</th>
            <td>{tarea.tarea}</td>
            <td>
                <button className='btn btn-warning me-1'onClick={()=>handleEditar(tarea)}>Editar</button>
                <button className='btn btn-danger' onClick={()=>handleEliminar(tarea.id)}>Eliminar</button>
            </td>
        </tr>
    )
}

export default Tareas