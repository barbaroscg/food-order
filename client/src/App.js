import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Cartpage from './pages/Cartpage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Route path="/" exact component={Homepage} />
        <Route path="/cart" exact component={Cartpage} />
      </BrowserRouter>
    </div>
  );
}

export default App;
