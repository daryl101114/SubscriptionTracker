import './App.css';
import Header from './components/Header';
import Login from './components/Login'
import Home from './components/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
        <Route path="/login" component={Login}/>
          <Route path="/" component={Home}/>
          
          
          {/* <Route path="/home" component={Home}/> */}
          
      </Switch>
      </Router>
    </div>
  );
}

export default App;
