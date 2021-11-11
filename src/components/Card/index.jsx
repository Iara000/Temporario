import React from 'react';
import './Card.css'

export default props =>
        <div className="Card">
            <div className="Conteudo" variant= 'top' width= '350px' padding= '0'>
                {props.img}
            </div>
            <div className="Footer" style={{padding: '20px 0px'}}>
                {props.children}
            </div>
</div>
