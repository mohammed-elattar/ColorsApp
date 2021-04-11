import './App.css';
import {generatePallete} from './colorHelpers';
import Pallete from './Pallete';
import seedColors from './seedColors';

function App() {
  console.log(generatePallete(seedColors[4]));
  return (
    <div>
      <Pallete {...seedColors[4]}/>
    </div>
  );
}

export default App;
