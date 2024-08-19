import React, { useState } from 'react';
import './Home.css';
import { Link, useActionData } from 'react-router-dom';
import DS3LOGO from '/src/components/home/img/ds3-img.jpg';
import ETS2LOGO from '/src/components/home/img/ets2-img.jpg';
import SOTFLOGO from '/src/components/home/img/SOTF.jfif';
import VALHEIMLOGO from '/src/components/home/img/valheim-img.jpg';

export default function Home() {
  const games = [
    {
      id: 'ds3',
      title: 'Dark Souls III',
      url: DS3LOGO,
      desc: 'Clique para acessar os Clips',
    },
    {
      id: 'ets2',
      title: 'Euro Truck Simulator 2',
      url: ETS2LOGO,
      desc: 'Clique para acessar os Clips',
    },
    {
      id: 'sotf',
      title: 'Sons of The Forest',
      url: SOTFLOGO,
      desc: 'Clique para acessar os Clips',
    },
    {
      id: 'valheim',
      title: 'VALHEIM',
      url: VALHEIMLOGO,
      desc: 'Clique para acessar os Clips',
    },
  ];

  return (
    <nav className="nav-board">
      {games.map(({ id, title, url, desc }) => (
        <Link className="link-games" key={id} to={`/${id}`}>
          <div>
            <h1>{title}</h1>
            <img src={url} alt="" />
            <h3>{desc}</h3>
          </div>
        </Link>
      ))}
    </nav>
  );
}
