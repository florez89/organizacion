import "./Equipo.css"
import Colaborador from "../Colaborador"
import hexToRgba from 'hex-to-rgba';
const Equipo = (props) => {
    //La fórmula siguiente es una destructuración
    const {colorPrimario, colorSecundario, titulo, id} = props.datos
    const {colaboradores, eliminarColaborador, actualizarColor, like} = props
    const obj = {
        backgroundColor: hexToRgba(colorPrimario, 0.6)
    }

    // console.log(colaboradores.lenght > 0)
    
    const estiloTitulo = {borderColor: colorPrimario}

    return <>
        {
            colaboradores.length > 0 &&
            <section className="equipo" style={obj}>
                <input 
                    type="color"
                    className="input-color"
                    value={hexToRgba(colorPrimario, 0.6)}
                    onChange={(evento) => {
                        actualizarColor(evento.target.value, id)
                    }}
                />
                <h3 style={estiloTitulo}>{titulo}</h3>
                <div className="colaboradores">
                    {
                        colaboradores.map( (colaborador,index) => <Colaborador 
                        datos={colaborador} 
                        key={index} 
                        colorPrimario={colorPrimario}
                        eliminarColaborador={eliminarColaborador}
                        like={like}
                        />)
                    }
                </div>
            
            </section>
        }
    </>
}

export default Equipo