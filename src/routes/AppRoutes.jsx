import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';
import Home from '../pages/Home';
// import PostDetail from '../pages/PostDetail';
// import About from '../pages/About';

const AppRoutes = () => (
  <Router>
    {/* <Routes> */}
      <Route path="/" element={<Home />} />
      {/* <Route path="/post/:id" element={<PostDetail />} /> */}
      {/* <Route path="/about" element={<About />} />
    {/* </Routes> */}
  </Router>
);

export default AppRoutes;
