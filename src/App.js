import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from '../src/Pages/Home/Home';
import AdminPanel from './Pages/AdminPanel/AdminPanel';
import Header from './Pages/Header/Header';
function App() {
  return (
    <div className="App">
      <Header></Header>
     <Routes>
      <Route path="/"element={<Home></Home>}></Route>
      <Route path="/AdminPanel"element={<AdminPanel></AdminPanel>}></Route>
     </Routes>
    </div>
  );
}

export default App;
