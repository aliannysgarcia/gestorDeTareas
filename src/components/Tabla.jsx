import React from 'react'
import Tareas from './Tareas'

const Tabla = ({tareas, eliminarTarea}) => {

    return (
        <div className='text-center d-flex justify-content-center'>
                {/* <div className='display-2 text-center'>Listado de Tareas</div> */}
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Fecha</th>
                            <th scope="col">Tarea</th>
                            <th scope="col">Ejecutada</th>
                            <th scope="col">Opciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tareas.map((tarea, idx) => (
                                <Tareas tarea={tarea} key={idx} eliminarTarea={eliminarTarea}/>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        

    )
}

export default Tabla