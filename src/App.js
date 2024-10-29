import Navbar from './components/Navbar';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Create from './pages/Create';
import Blogs from './pages/Blogs';


function App ()
{
  return (
    <>
      <Router>
        <Navbar />
        <Routes>

          <Route exact path="/" element={<Home />} />


          <Route path="/create" element={<Create />} />


          <Route path="/blogs" element={<Blogs />} />
        </Routes>

      </Router>
    </>
  );
}

export default App;
