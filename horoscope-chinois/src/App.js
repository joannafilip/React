import './App.css';
import { useState } from 'react';
import Element from './Element';
import Modal from './Modal';
import Bd from './Bd';

function App() {
  const bd = Bd.map((element) => (
    <Element
      key={element.nom}
      image={element.image}
      description={element.description}
      modulo={element.modulo}
    />
  ));

  const [year, setYear] = useState('');
  function handleChange(event) {
    setYear(event.target.value);
  }

  const [signe, setSigne] = useState(null);
  const [vis, setVis] = useState(false);
  const [desc, setDesc] = useState(true);
  const [x, y] = useState(false);
  function handleSubmit() {
    setVis(true);
    const yearModulo = Number(year) % 12;
    setSigne(Bd.find((element) => yearModulo === element.modulo));
  }

  return (
    <div>
      <div>
        Enter your birthdate: <input
          className="text-center font-bold"
          type="number"
          id="year"
          name="year"
          value={year}
          onChange={handleChange}
        />
        <button type="submit" onClick={handleSubmit}>confirm</button>
      </div>
      <div className="flex flex-wrap">{bd}</div>
      <Modal
        visible={vis}
        visibleBtn={x}
        // viz={x}
        hide={() => setVis(false) && y(true)}
        more={() => setDesc(false) && y(false)}
        less={() => setDesc(true) && y(false)}

      >
        <div>
          {signe && (
          <div>
            <h1>{signe.nom}</h1>
            <div>
              {desc ? signe.description.substr(0, 100) : signe.description}
            </div>
            <img src={`/images/${signe.image}`} alt="" />
          </div>
          )}
        </div>
      </Modal>
    </div>
  );
}

export default App;
