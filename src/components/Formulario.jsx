import React from 'react'

const Formulario = () => {

    return (
        <form className="row g-3 d-flex justify-content-center">
            <div className="col-auto">
                <label htmlFor="tarea" className="visually-hidden">Tarea</label>
                <input type="text" className="form-control" id="tarea" placeholder="Ingrese la Tarea"/>
            </div>
            <div className="col-auto">
                <button type="submit" className="btn btn-success mb-2">Agregar Tarea</button>
            </div>
            <hr />
        </form>
    )
}

export default Formulario