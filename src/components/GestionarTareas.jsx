import React, { useEffect, useState } from 'react'
import Formulario from './Formulario'
import Tabla from './Tabla'
import Swal from 'sweetalert2'
import moment from 'moment'

const GestionarTareas = () => {

  const [tareas, setTareas] = useState(null)
  const [tareaAEditar, setTareaAEditar] = useState(null)
  const url = import.meta.env.VITE_TAREAS

  useEffect(() => {
    obtenerTodasLasTareas()
  }, [])

  const obtenerTodasLasTareas = async () => {
    try {
      const res = await fetch(url)
      if (!res.ok) {
        throw new Error('Hubo un error', res.status, res.statusText)
      }
      const productosObtenidos = await res.json()
      console.log(productosObtenidos)
      setTareas(productosObtenidos)

    } catch (error) {
      console.log('[obtenerTodasLasTareas]', error)
    }
  }

  const agregarTarea = async (nuevaTarea) => {
    try {
      const fechaHora = moment().format('DD-MM-YYYY HH:mm');
      const nuevaTareaConFecha = {
        ...nuevaTarea,
        id: Date.now().toString(),
        fecha: fechaHora
      };

      const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(nuevaTareaConFecha)
      }

      const res = await fetch(url, options)
      if (!res.ok) {
        throw new Error('Hubo un error', res.status, res.statusText)
      }
      const tareaAgregada = await res.json()
      console.log(tareaAgregada)

      const nuevoEstado = [...tareas, tareaAgregada]
      setTareas(nuevoEstado)


    } catch (error) {
      console.log('[agregarTarea]', error)
    }
  }

  const eliminarTarea = (id) => {
    try {
      Swal.fire({
        title: "¿Estás seguro que quieres borrar esta tarea?",
        text: "No podrás volver atrás",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Eliminar"
      }).then(async (result) => {
        if (result.isConfirmed) {
          const options = {
            method: 'DELETE'
          }
          const urlDelete = url + id;
            console.log("URL para eliminar: ", urlDelete); // http://localhost:8080/productos/id

          const res = await fetch(urlDelete, options)
          if (!res.ok) {
            throw new Error(`No se pudo borrar el producto ${res.status} ${res.statusText}`)
          }
          const tareaEliminada = await res.json() // { }

          // console.log(tareaEliminada)
          const nuevoEstadoTarea = tareas.filter(tarea => tarea.id !== id)
          // console.log(nuevoEstado)
          setTareas(nuevoEstadoTarea)

          Swal.fire({
            title: "Tarea eliminada!",
            text: "La tarea se eliminó correctamente.",
            icon: "success"
          });
        }
      });
    } catch (error) {
      console.log('[eliminarTarea]', error)
    }
  }

  const editarTarea = async (tareaAEditar) => {
    try {
      const options = {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(tareaAEditar)
      }
      const urlUpdate = url + tareaAEditar.id;
      const res = await fetch(urlUpdate, options)
      
      if(!res.ok) {
        throw new Error('no se pudo actualizar la tarea', res.status)
      }
      const tareaEditada = await res.json()
      console.log(tareaEditada)

      const nuevoEstado = tareas.map(tarea => tarea.id === tareaEditada.id ? tareaEditada : tarea)
      setTareas(nuevoEstado)
    } catch (error) {
      console.error('[editarTarea]', error)
    }
  }

  return (
    <>
      <Formulario agregarTarea={agregarTarea} tareaAEditar={tareaAEditar} editarTarea={editarTarea} />
      <Tabla tareas={tareas} eliminarTarea={eliminarTarea} setTareaAEditar={setTareaAEditar} />
    </>
  )
}

export default GestionarTareas