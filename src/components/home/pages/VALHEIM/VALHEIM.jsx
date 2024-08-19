import { React, useState } from 'react';
import '../Page.css';
import giganteamassandobaiano from '/src/components/home/pages/VALHEIM/video/giganteamassandobaiano.mp4';
import problemacomportal from '/src/components/home/pages/VALHEIM/video/problemacomportal.mp4';
import baianodespencando from '/src/components/home/pages/VALHEIM/video/baianodespencando.mp4';

export default function SOTF() {
  const [modal, setModal] = useState(false);

  const clips = [
    {
      id: crypto.randomUUID(),
      title: 'Gigante amassando Baiano - Thiago',
      url: giganteamassandobaiano,
      desc: 'Baiano chamou gigante pra x1 e tomou amasso sem dó',
    },
    {
      id: crypto.randomUUID(),
      title: 'Greg puto com baiano por causa de portal - Thiago',
      url: problemacomportal,
      desc: 'Baiano esquece o nome do portal e quase que nao consegue conectar essa porra',
    },
    {
      id: crypto.randomUUID(),
      title: 'Baiano despencando - Thiago',
      url: baianodespencando,
      desc: 'Baiano escorregou e caiu da torre, morreu mas passa bem',
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
