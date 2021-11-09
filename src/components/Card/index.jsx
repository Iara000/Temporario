import React from 'react';
import Card  from 'react-bootstrap/Card';
import './Card.css'

function cards() {
   return(

<Card style={{ width: '350px', height: '300px', padding: '0' }}>
  <Card.Img  variant="top" src='../images/economi 1.png' style={{width: '350px', padding: '0'}} />
  <Card.Body>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
</Card>
   )
}

export default cards
{/*export default props =>
        <div className="Card">
            <div className="Conteudo">
                {props.img}
            </div>
            <div className="Footer">
                {props.children}
            </div>
</div>*/}
