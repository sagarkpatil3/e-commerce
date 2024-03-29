import { Routes, Route } from 'react-router-dom';
import Directory from './components/directory/directory.component';
import Navbar from './routes/navbar/navbar.component';
import Home from './routes/home/home.component';

const App = () => {


  return (
    <Routes>
      <Route path='/' element={<Navbar />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
