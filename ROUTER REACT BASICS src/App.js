import { Route, Switch, Redirect } from 'react-router-dom';
import MainHeader from './components/MainHeader';
import Greetings from './pages/Greetings';
import ProgramDetail from './pages/ProgramDetail';
import Reprograms from './pages/Reprograms';

function App() {
  return (
    <div>
      <MainHeader />
      <main>
          <h2>Keep the 🔥🔥🔥 burning!</h2>
          {/* //switch will make only one route visible */}
        <Switch>
        <Route path="/" exact>
        {/* easy way to redirect from the main page */}
        <Redirect to="/Greetings/new-mage" />
        </Route>
          <Route path='/GREETINGS'>
            <Greetings />
          </Route>
          <Route exact path='/Programs'>
            <Reprograms />
          </Route>
          {/* specific route with usuParams in nested component */}
          <Route path='/Programs/:productId'>
            <ProgramDetail />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
