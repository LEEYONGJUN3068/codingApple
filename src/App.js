//import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './App.css';
import { Routes, Route, Link, Outlet } from 'react-router-dom';
import Detail from './Detail.js';
import PrdDetail from './PrdDetail.js';
import MainBanner from './MainBanner.js';
import Company from './Company.js';
import Event from './Event.js';
import styled from 'styled-components';
import { useParams } from "react-router-dom";

let YellowBtn = styled.button`
  background : yellow;
  color : black;
  padding : 10px;
`

function App() {

  return (
    <div className="App">

      <Navbar bg="dark" variant="dark">
        <Container>
          <Link to="/" className='logo'>올리브유니온</Link>
          <Nav className="me-auto">
            <Link to="/detail">제품</Link>
            <Link to="/company">회사소개</Link>
            <Link to="/event">이벤트</Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={ <MainBanner></MainBanner> }/>
        <Route path="/detail" element={ <Detail></Detail> }>
          <Route path="/detail/:id" element={ <PrdDetail></PrdDetail> }/>
        </Route>
        <Route path="/company" element={ <Company></Company> }/>
        <Route path='/event' element={ <Event></Event> }>
          <Route path="one" element={"123"}></Route>
          <Route path="two" element={"4567"}></Route>
        </Route>
      </Routes>123

    </div>
  );
}

export default App;
