import React from 'react'
import Tareas from './Tareas'

const Tabla = () => {

    const arrayTareas = [
        {
            tarea: 'Lavar los platos'
        },
        {
            tarea: 'Salir a pasear'
        },
        {
            tarea: 'Correr'
        }
    ]
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
                            arrayTareas.map((tarea, id) => (
                                <Tareas tarea={tarea} key={id} />
                            ))
                        }
                    </tbody>
                </table>
            </div>
        

    )
}

export default Tabla