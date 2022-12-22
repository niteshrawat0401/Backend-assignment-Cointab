import logo from './logo.svg';
import './App.css';
import { Home } from './Component/Home';
import { UserDetail } from './Component/UserDetail';
import {Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/user' element={<UserDetail/>}/>
      </Routes>
    </div>
  );
}

export default App;
