import './App.css';
import Navbar from './Components/NavBar/Navbar';

import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";
import Footer from './Components/Footer/footer';
import Layout from './Components/Layout';
import { Route, Routes } from 'react-router-dom';
import RequireAuth from './protected-routes/RequireAuth';
import Home from './Pages/Home/Home';

function App() {
  return (
    <div className="App">
      <Navbar/>

      <Routes>
      <Route path="/" element={<Layout/>}>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route element={<RequireAuth/>}>
          <Route path="/home" element={<Home/>}/>
          
        </Route>
      </Route>
      </Routes>
    </div>
  );
}

export default App;
