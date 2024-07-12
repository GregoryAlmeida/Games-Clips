import React from 'react';
import '../Page.css';
import elevadorthiago from '/src/components/home/pages/DS3/video/elevadorthiago.mp4';

export default function Ds3() {
  const clips = [
    {
      id: crypto.randomUUID(),
      title: 'Elevador - Thiago',
      url: elevadorthiago,
      desc: 'Clip do elevador visão do Thiago.',
    },
    {
      id: crypto.randomUUID(),
      title: 'Elevador - Thiago',
      url: '',
      desc: 'Clip do elevador visão do Thiago.',
    },
  ];

  return (
    <div className="page-clips">
      <h1>Clips de Dark Souls 3</h1>

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
