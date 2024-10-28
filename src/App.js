import Navbar from './components/Navbar';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';
import Create from '../pages/Create';


function App ()
{
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" element={<Home />} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
