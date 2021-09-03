import './App.css';
import Header from './components/Header';
import Login from './components/Login'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Switch>
         
          <Route path="/" component={Login}>
            
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
