import './App.css';
import NavBar from './components/NavBar';
import {Router} from '@reach/router';
import Budget from './Pages/Budget';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
        <NavBar />
      <div>
        <Router>
          <Home path="/"/>
          <Budget path="/budget"/>
        </Router>
      </div>
    </div>
  );
}

export default App;
