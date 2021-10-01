import { BrowserRouter ,Switch ,Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar></Navbar>
        <Switch>
          <Route exact path='/'>
            <Shop></Shop>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
