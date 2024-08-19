import React, { useState } from 'react';
import '../Page.css';
import elevadorthiago from '/src/components/home/pages/DS3/video/elevadorthiago.mp4';
import thiagomimic from '/src/components/home/pages/DS3/video/thiagomimic.mp4';

export default function Ds3() {
  const [modal, setModal] = useState(false);

  const clips = [
    {
      id: crypto.randomUUID(),
      title: 'Elevador - Thiago',
      url: elevadorthiago,
      desc: 'Clip do elevador visão do Thiago.',
    },
    {
      id: crypto.randomUUID(),
      title: 'Thiago morrendo pra um mimic',
      url: thiagomimic,
      desc: 'Mimic fez nham nham na bunda do thiago',
    },
  ];

  const handleClick = (title, url, desc) => {
    setModal({
      title: title,
      url: url,
      desc: desc,
    });
  };

  return (
    <div className="page-clips">
      <h1>Clips de Dark Souls 3</h1>

      <section>
        {clips.map(({ id, title, url, desc }) => (
          <div key={id} onClick={() => handleClick(title, url, desc)}>
            <h1>{title}</h1>
            <video src={url} />
            <p>{desc}</p>
          </div>
        ))}
        {modal && (
          <span className="modal">
            <h1>{modal.title}</h1>
            <video
              src={modal.url}
              controls
              onLoadStart={({ target }) => (target.volume = 0.2)}
            />
            <p>{modal.desc}</p>
            <button onClick={() => setModal(false)}>Fechar</button>
          </span>
        )}
      </section>
    </div>
  );
}
