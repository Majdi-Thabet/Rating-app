import React, { Component } from 'react'
import Products from './Products';
import { Button, Container } from 'react-bootstrap';
import './App.css';
import Rating from './Rating';

function App() {
  const isValid = true;
  return (
    <Container>

   
    <div className='App'>
      <h1> My first react app</h1>
      <div>
        
        <Products/>
        
        
        
        {/*
        <Rating rating="1"/>
  *
        <Rating rating="2"/>
        <Rating rating="3"/>
        <Rating rating="4"/>
  */}
      </div>
        
  
    </div>
    </Container>
  );
}

export default App;
