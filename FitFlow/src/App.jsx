import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './Layout';

import { Home } from './Pages/Home';
import { User } from './Pages/User';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route element={<Layout/>}>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/user/info/" element={<User/>}></Route>
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
