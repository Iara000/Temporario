import React from 'react';
import CardHome from '../components/Card/CardHome';
import CardHomeOpcoes from '../components/Card/CardHomeOpcoes';
import CardHomeDiversos from '../components/Card/CardHomeDiversos';
import './Home.css';

const Home = () => {
    return (
      <div className="conteiner_home">
      <CardHome />
      <CardHomeOpcoes />
      <CardHomeDiversos />
      </div>
    );
};

export default Home;