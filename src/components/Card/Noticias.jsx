import React from 'react'
import './Noticias.css'

export default props =>
        <div className="Noticias">
            <div className="Titulo">
                {props.titulo}
            </div>
            <div className="Dados">
                {props.children}
            </div>
        </div>