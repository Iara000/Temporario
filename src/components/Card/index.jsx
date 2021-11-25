import React from 'react';
import {Card}  from 'react-bootstrap'
 

 export default (props )=>
 <>
<Card style={{ width: '450px', height: '300px', padding: '0px', display: 'flex'}}>
  <div style={{ width: '100%', padding: '0' }}>{props.img}</div>
  <Card.Body style={{ width: '100%' }}>
    <Card.Text >
      {props.children}
    </Card.Text>
  </Card.Body>
</Card>
</>


{/*export default props =>
<div className="Card">
<div className="Conteudo" variant= 'top' width= '350px' padding= '0'>
    {props.img}
</div>
<div className="Footer" style={{padding: '20px 0px'}}>
    {props.children}
</div>
</div>*/}