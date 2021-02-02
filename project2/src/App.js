
import "./App.scss";
import FormControl from "./FormControl";
import Btn from "./Btn";
function App() {

  return (
      <div class="form-group">
        <FormControl text="Which talent would you most like to have?"/>
        <FormControl text="Where would you most like to live?"/>
        <FormControl text="What is your favorite occupation?"/>
        <FormControl text="Who are your favorite writers?"/>
        <Btn btn="envoyer"/>
      </div>
   
  );
}

export default App;
