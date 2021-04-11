import './App.css';
import {generatePallete} from './colorHelpers';
import Pallete from './Pallete';
import seedColors from './seedColors';

function App() {
  return (
    <div>
      <Pallete pallete={generatePallete(seedColors[4])}/>
    </div>
  );
}

export default App;
