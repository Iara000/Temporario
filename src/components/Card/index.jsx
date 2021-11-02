import React from 'react'
import './Card.css'

export default props =>
        <div className="Card">
            <div className="Conteudo">
                {props.img}
            </div>
            <div className="Footer">
                {props.children}
            </div>
        </div>
