import React, { useState } from 'react'
import Formulario from './Formulario'
import Tabla from './Tabla'
import BaseDeDatos from '../data/tareas'
import Swal from 'sweetalert2'

const GestionarTareas = () => {

  const [tareas, setTareas] = useState(BaseDeDatos)

  const agregarTarea = (nuevaTarea) => {

    const tareaConFecha = {
      ...nuevaTarea,
      id: Date.now(),
      fecha: new Date(),
    };

    const nuevoEstado = [...tareas, tareaConFecha]
    setTareas(nuevoEstado)
  }
  const eliminarTarea = id => {
    Swal.fire({
      title: "¿Estás seguro que quieres borrar esta tarea?",
      text: "No podrás volver atrás",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Eliminar"
    }).then((result) => {
      if (result.isConfirmed) {
        const nuevoEstado = tareas.filter(tarea => tarea.id !== id)
        // console.log(nuevoEstado)
        setTareas(nuevoEstado)

        Swal.fire({
          title: "Tarea eliminada!",
          text: "La tarea fue borrada.",
          icon: "success"
        });
      } else {
        Swal.fire({
          title: "No lo borró!",
          text: "La tarea no fue borrada.",
          icon: "success"
      })}
    });

    const nuevoEstado = tareas.filter(tarea => tarea.id !== id)
    // console.log(nuevoEstado)
    setTareas(nuevoEstado)

  }

  return (
    <div className='container mt-5'>
      <Formulario agregarTarea={agregarTarea} />
      <Tabla tareas={tareas} eliminarTarea={eliminarTarea} />
    </div>
  )
}

export default GestionarTareas