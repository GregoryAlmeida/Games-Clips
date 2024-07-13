import React from 'react';
import '../Page.css';
import driftthiago from '/src/components/home/pages/ETS2/video/driftthiago.mp4';
import contramao from '/src/components/home/pages/ETS2/video/velocidadenacontramaothiago.mp4';

export default function Ets2() {
  const clips = [
    {
      id: crypto.randomUUID(),
      title: 'Drift do thiago',
      url: driftthiago,
      desc: 'Thiago dá um drift na contra mão e quase morre',
    },
    {
      id: crypto.randomUUID(),
      title: 'Velocidade na contra mão - thiago',
      url: contramao,
      desc: 'Risada do hero + velocidade do thiago na contra mão',
    },
  ];

  return (
    <div className="page-clips">
      <h1>Clips de Euro Truck Simulator 2</h1>

      <section>
        {clips.map(({ id, title, url, desc }) => (
          <div key={id}>
            <h1>{title}</h1>
            <video src={url} controls />
            <p>{desc}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
