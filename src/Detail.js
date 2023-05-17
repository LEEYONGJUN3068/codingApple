import data from './data.js';
import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Routes, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios'

function Detail(props) {

    let [count, setCount] = useState(0);
    let [alert, setAlert] = useState(true);

    useEffect(()=>{
      setTimeout(()=>{setAlert(false)}, 2000)
    }, [count])

    let [prd] = useState(data);
    let {id} = useParams();
    console.log({id});
     
    return(
      <Container>
        <Row md={3}>
          {alert == true ? <div className='alert alert-warning'>2초 이내 구매 시 할인</div> : null}
            {prd.map((it) => (
                <Col>
                  <>
                    <img src='https://www.oliveunion.shop/web/product/medium/202303/0c9d1e80745ce906f59aa898d6f61e59.jpg' width="100%" alt={it.title} />
                    <h4>{it.title}</h4>
                    <h6>{it.content}</h6>
                    <h6>{it.price}</h6>
                    <button onClick={() => { setCount(count + 1) }}>버튼</button>
                    {count}
                  </>
                </Col>
              ))}
        </Row>
        <button onClick={()=>{
          axios.get('https://codingapple1.github.io/shop/data2.json')
          .then((data)=>{ 
            console.log(data.data); 
          })
        }}>더보기</button>
      </Container>
    )
}

export default Detail;