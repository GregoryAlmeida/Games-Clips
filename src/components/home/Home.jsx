import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import DS3LOGO from '/src/components/home/img/ds3-img.jpg';
import ETS2LOGO from '/src/components/home/img/ets2-img.jpg';

export default function Home() {
  return (
    <nav className="nav-board">
      <Link className="div-ds3" to="/ds3">
        <div>
          <h1>Dark Souls III</h1>
          <img src={DS3LOGO} alt="" />
          <h3>Clique para acessar os Clips</h3>
        </div>
      </Link>

      <Link className="div-ets2" to="/ets2">
        <div>
          <h1>Euro Truck Simulator 2</h1>
          <img src={ETS2LOGO} alt="" />
          <h3>Clique para acessar os Clips</h3>
        </div>
      </Link>
    </nav>
  );
}
