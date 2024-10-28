import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';
import Home from '../pages/Home';
// import PostDetail from '../pages/PostDetail';
import Create from '../pages/Create';

const AppRoutes = () => (
  <Router>
    {/* <Routes> */}
      <Route path="/" element={<Home />} />
      {/* <Route path="/post/:id" element={<PostDetail />} /> */}
      <Route path="/create" element={<Create />} />
      <Route path="/create" element={<Create />} />
    {/* </Routes> */}
  </Router>
);

export default AppRoutes;
