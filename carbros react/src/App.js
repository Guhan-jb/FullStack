import './App.css';
import Login from './Pages/Login'
import { Routes,Route } from 'react-router-dom';
import Appbar from './Components/AppBar';
import Home from './Pages/home';
import Allcars from './Pages/AllCars';
import Result from './Pages/results';


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Appbar />}>
        <Route index element={<Home />}/>
        <Route path="/AllCars" element={<Allcars />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/result" element={<Result />}/>
      </Route>
    </Routes>
    </>
  );
}

export default App;