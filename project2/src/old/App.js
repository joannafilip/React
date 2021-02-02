// import logo from './logo.svg';
// import { tail } from "ramda";
import "./App.scss";
import Element from "./Element";
import Element2 from "./Element2";
function App() {
  const  elements= [{text : "H", color : "bg-red-100"},{text : "H", color : 'bg-red-100'},{text : "H", color : 'bg-red-100'},{text : "H", color : 'bg-red-100'},{text : "H", color : 'bg-red-100'},{text : "H", color : 'bg-red-100'},{text : "H", color : 'bg-red-100'}];
  const elementsarray = elements.map((elem) => (<Element text={elem.text} color ={elem.color}/>));
  // for(const text of texts)
  // {
  //   arr.push(<div>{text}</div>);
  // }

  return (
      <div className="flex flex-wrap">
        
        <Element2 text="H"/>
        <Element2 text=""/>
        <Element2 text=""/>
        <Element2 text=""/>
        <Element2 text=""/>
        <Element2 text="He"/>
        {elementsarray}
      </div>
   
  );
}

export default App;
