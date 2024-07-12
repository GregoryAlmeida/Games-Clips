import React from 'react';
import '../Page.css';

export default function Ets2() {
  const clips = [
    {
      id: crypto.randomUUID(),
      title: 'Drift do thiago',
      url: './src/components/home/pages/ETS2/video/driftthiago.mp4',
      desc: 'Thiago dá um drift na contra mão e quase morre',
    },
    {
      id: crypto.randomUUID(),
      title: 'Velocidade na contra mão - thiago',
      url: '',
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
