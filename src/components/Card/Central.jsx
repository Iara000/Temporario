import React from 'react'
import './Central.css'

export default props =>
        <div className="CardCentro">
            <div className="Txt">
                {props.text}
            </div>
            <div className="Img">
                {props.children}
            </div>
        </div>