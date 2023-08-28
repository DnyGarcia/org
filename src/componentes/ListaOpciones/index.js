import "./ListaOpciones.css"
//Método map -> arreglo.map(() => {
//                  return <option></option>
//              })
const ListaOpciones = (props) => {

   

    const manejarCambio =(e) => {
        console.log("cmbio", e.target.value)
        props.actualizarEquipo(e.target.value)
    }

    return <div className="lista-opciones">
        <label>Equipos</label>
        <select value={props.valor} onChange={manejarCambio}>
            <option value="" disabled defaultValue="" hidden>Seleccionar equipo</option>
           {props.equipos.map((equipo, index) => <option key={index} value={equipo}>{equipo}</option>) }
        </select>
        </div>
}

export default ListaOpciones;

/*  <label>Equipos</label>
    <select>
        { equipos.map((equipo, index) => {
        return <option key={index}>{equipo}</option>
        }) }
    </select>
*/