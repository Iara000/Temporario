import React from 'react';

import {Card}  from 'react-bootstrap'
 

 export default (props )=>
 <>
<Card style={{ width: '450px', height: '300px', padding: '0px', margin: '50px 50px'}}>
  <Card.Img  src='../images/economi 1.png'  style={{ width: '450px' }}></Card.Img>
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
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