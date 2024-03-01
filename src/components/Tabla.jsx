import Tareas from './Tareas'

const Tabla = ({tareas, eliminarTarea, setTareaAEditar}) => {

    return (
        <div className='text-center d-flex justify-content-center'>
                {/* <div className='display-2 text-center'>Listado de Tareas</div> */}
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Fecha y Hora</th>
                            <th scope="col">Tarea</th>
                            <th scope="col">Opciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tareas && tareas.map((tarea, id) => (
                              <Tareas tarea={tarea} key={id} eliminarTarea={eliminarTarea} setTareaAEditar={setTareaAEditar}/>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        

    )
}

export default Tabla