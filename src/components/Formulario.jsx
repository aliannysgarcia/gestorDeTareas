import React, { useState } from 'react'

const Formulario = ({agregarTarea}) => {

    const formInicial = {
        fecha: '',
        tarea: ''
    }

    const [form, setForm] = useState(formInicial)

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
        console.log('se presiono el boton')
        agregarTarea(form)
        setForm(formInicial);
    }

    return (
        <form className="row g-3 d-flex justify-content-center" onSubmit={handleSubmit}>
            <div className="col-auto">
                <label htmlFor="tarea" className="visually-hidden">Tarea</label>
                <input type="text" className="form-control" id="tarea" name="tarea" onChange={handleChange} value={form.tarea} placeholder="Ingrese la Tarea" />
            </div>
            <div className="col-auto">
                <button type="submit" className="btn btn-success mb-2">Agregar Tarea</button>
            </div>
            <hr />
        </form>
    )
}

export default Formulario