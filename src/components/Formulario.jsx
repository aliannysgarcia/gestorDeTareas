import React, { useEffect, useState } from 'react'

const Formulario = ({agregarTarea, tareaAEditar, editarTarea}) => { 
    const formInicial = {
        id: null,
        fecha: '',
        tarea: ''
    }

    const [form, setForm] = useState(formInicial)

    useEffect(() => {
      tareaAEditar ? setForm(tareaAEditar) : setForm(formInicial)
    }, [tareaAEditar])
    
    const handleChange = e => { // para manejar cambios en el form
        console.log(e.target.name)
        console.log(e.target.value)

        const datoIngresado = {
            ...form,
            [e.target.name]: e.target.value
        }
        
        setForm(datoIngresado)
    }
    const handleSubmit = e => { //maneja el envio del formulario
        e.preventDefault() //evita el comportamiento predeterminado
        console.log('se presiono el boton agregar')
        
        if (form.id === null){
            agregarTarea(form)
        } else {
            editarTarea(form)
        }
        setForm(formInicial);
    }

    return (
        <>
        <h1 className='mb-3 d-flex justify-content-center'>Gestor de Tareas</h1>
        <form className="row g-3 d-flex justify-content-center" onSubmit={handleSubmit}>
            <div className="col-auto">
                <label htmlFor="tarea" className="visually-hidden">Tarea</label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="tarea" name="tarea" 
                    onChange={handleChange} 
                    value={form.tarea} 
                    placeholder="Ingrese la Tarea" required/>
            </div>
            <div className="col-auto">
                <button type="submit" className="btn btn-success mb-2">Agregar Tarea</button>
            </div>
            <hr />
        </form>
        </>
    )
}

export default Formulario