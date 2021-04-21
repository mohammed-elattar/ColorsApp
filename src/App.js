import {Route, Switch} from 'react-router-dom';
import './App.css';
import {generatePallete} from './colorHelpers';
import Pallete from './Pallete';
import PalleteList from './PalleteList';
import seedColors from './seedColors';
import SingleColorPalette from './SingleColorPalette';

function App() {
  const findPallete = (id) => seedColors.find(pallete => pallete.id === id );
  return (
    <Switch>
      <Route exact path='/' render={(routeParams) => <PalleteList palletes={seedColors} {...routeParams}/>} />
      <Route exact path='/palette/:id' render={routeParams => <Pallete pallete={generatePallete(findPallete(routeParams.match.params.id))}/>} />
      <Route exact path='/palette/:paletteId/:colorId' render={(routeParams) =><SingleColorPalette palette={generatePallete(findPallete(routeParams.match.params.paletteId))} colorId={routeParams.match.params.colorId}/>} />
    </Switch>
  );
}

export default App;
