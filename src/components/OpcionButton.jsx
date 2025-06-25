import { useState, useEffect } from "react";
import Logueo from './Logueo.jsx'
import Registrar from './Registrar.jsx'

export default function CambiarBoton(){
    const [activo, setActivo] = useState(null);


    useEffect(() =>{
        const guardarEstado = localStorage.getItem('vistaActiva')
        if(guardarEstado === 'logueo' || guardarEstado === 'registrar'){
            setActivo(guardarEstado)
        } else {
            setActivo('logueo')
        }

    }, []);

    const cambiarVista = (vista) =>{
        setActivo(vista);
        localStorage.setItem('vistaActiva', vista);
    };

    if(!activo) return null;

    return(
        <div className="flex flex-col w-full  text-gray-400 font-semibold" >
            <div className="flex bg-gray-400/10 gap-3 rounded-2xl mt-4 ">
                <button
                onClick={() => cambiarVista('logueo')}
                className={`cursor-pointer w-full  py-3 ${ activo === 'logueo' ? 'bg-white  text-black m-1 rounded-2xl': ''}`}
                >
                    Sing in
                </button>
                <button
                onClick={() => cambiarVista('registrar')}  
                className={`cursor-pointer  w-full py-3 ${ activo === 'registrar' ? 'bg-white text-black m-1 rounded-2xl': ''}`}
                >
                    Sing up
                </button>
            </div>
            <div>
                {activo === 'logueo' && <Logueo  /> }
                {activo === 'registrar' && <Registrar  /> }
            </div>
        </div>
    );
}