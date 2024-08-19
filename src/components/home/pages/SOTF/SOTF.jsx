import { React, useState } from 'react';
import '../Page.css';
import thiagotiros from '/src/components/home/pages/SOTF/video/thiagotiros.mp4';
import chupacuatrazdobaiano from '/src/components/home/pages/SOTF/video/chupacuatrazdobaiano.mp4';
olhosesbugalhados;
import olhosesbugalhados from '/src/components/home/pages/SOTF/video/olhosesbugalhados.mp4';

export default function SOTF() {
  const [modal, setModal] = useState(false);

  const clips = [
    {
      id: crypto.randomUUID(),
      title: 'Thiago enchendo o bixo de bala',
      url: thiagotiros,
      desc: 'Thiago pega gosto por atirar em indefesos no meio do confronto.',
    },
    {
      id: crypto.randomUUID(),
      title: 'Chupacu correndo atraz do Baiano - Thiago',
      url: chupacuatrazdobaiano,
      desc: 'Chupacu correndo atraz do Baiano querendo esbagaçar o preciso dele',
    },
    {
      id: crypto.randomUUID(),
      title: 'O cara com o olho esbugalhado - Thiago',
      url: olhosesbugalhados,
      desc: '(⊙ˍ⊙)',
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
      <h1>Clips de Sons of The Forest</h1>

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
