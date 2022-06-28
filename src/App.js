import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Header from './components/header';
import Banner from './components/banner';
import Form from './components/form'
import './App.css';
import './assets/scss/style.scss';



function App() {
  return (
    <>
    <Header />
    <Banner />
    <Form />
    </>    
      );
}

export default App;