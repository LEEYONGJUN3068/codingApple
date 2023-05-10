import data from './data.js';
import { useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useParams } from 'react-router-dom';

function Detail() {
    
    let [prd] = useState(data);
    let {id} = useParams();
    console.log({id});
     
    return(
      <Container>
        <Row md={3}>
          {
            prd.map((it) => (
              <Col>
                <>
                  <img src='https://www.oliveunion.shop/web/product/medium/202303/0c9d1e80745ce906f59aa898d6f61e59.jpg' width="100%" alt={it.title}></img>
                  <h4>{it.title}</h4>
                  <h6>{it.content}</h6>
                  <h6>{it.price}</h6>
                </>
              </Col>
            )) 
          }     
        </Row>
      </Container>
    )
}

export default Detail;