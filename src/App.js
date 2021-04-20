import {Route, Switch} from 'react-router-dom';
import './App.css';
import {generatePallete} from './colorHelpers';
import Pallete from './Pallete';
import PalleteList from './PalleteList';
import seedColors from './seedColors';

function App() {
  const findPallete = (id) => seedColors.find(pallete => pallete.id === id );
  return (
    <Switch>
      <Route exact path='/' render={() => <PalleteList palletes={seedColors} />} />
      <Route exact path='/pallete/:id' render={routeParams => <Pallete pallete={generatePallete(findPallete(routeParams.match.params.id))}/>} />
    </Switch>
  );
}

export default App;
