import logo from './logo.svg';
import './App.css';
import { Home } from './Component/Home';
import { UserDetail } from './Component/UserDetail';
import {Routes, Route} from "react-router-dom"
import { Navbar } from './Component/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/user' element={<UserDetail/>}/>
      </Routes>
    </div>
  );
}

export default App;
