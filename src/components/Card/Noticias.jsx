import React from 'react'
import { Card } from 'react-bootstrap'

export default props =>
<>
<Card style={{width: ' 350px', height: ' 215px', padding: ' 0' }}>
  <Card.Body>
    <Card.Title>{props.titulo}</Card.Title>
    <Card.Text>
     {props.children}
    </Card.Text>
  </Card.Body>
</Card>
</>
