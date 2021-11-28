import React from 'react';
import { Link } from 'react-router-dom';
import CardHome from '../components/Card/CardHome';
import CardHomeOpcoes from '../components/Card/CardHomeOpcoes';
import CardHomeDiversos from '../components/Card/CardHomeDiversos';
import Curiosidades from '../components/Card/Curiosidades';
import './Home.css';

const Home = () => {
    return (
      <div class="conteiner_home">
      <CardHome />
      <CardHomeOpcoes />
      <CardHomeDiversos />
      </div>
    );
};

export default Home;