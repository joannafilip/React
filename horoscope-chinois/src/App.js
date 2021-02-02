import './App.css';
import { useState } from 'react';
import Element from './Element';
import Modal from './Modal';
import Bd from './Bd';

function App() {
  const bd = Bd.map((element) => (
    <Element
      nom={element.nom}
      image={element.image}
      description={element.description}
      modulo={element.modulo}
    />
  ));

  // récupérer l'input
  const [year, setYear] = useState('');
  function handleChange(event) {
    setYear(event.target.value);
  }

  const [signe, setSigne] = useState([]);
  const [vis, setVis] = useState(false);

  function handleSubmit() {
    setVis(true);
    const yearModulo = Number(year) % 12;
    Bd.map((element) => (
      yearModulo === element.modulo ? setSigne(
        [<div>{element.nom}</div>, <div>{Math.trunc(element.description.lenght > 150, element.description) }</div>,
          <img src={`/images/${element.image}`} alt="" />,
        ],
      ) : false
    ));
  }

  return (
    <div>

      <div>
        <input
          className="text-center font-bold"
          type="number"
          id="year"
          name="year"
          value={year}
          onChange={handleChange}
        />
        <button type="submit" onClick={handleSubmit}>Valider</button>
      </div>
      <div className="flex flex-wrap">{bd}</div>
      <Modal visible={vis}>
        <div>
          <div>{signe}</div>
        </div>
      </Modal>
    </div>
  );
}

export default App;
