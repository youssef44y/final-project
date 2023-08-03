import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { increment } from './redux/slices/userSlice';
import NavB from './components/NavB';
import { Route, Routes } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';


function App() {
  const {count} = useSelector(state => state.user)
  const dispatch = useDispatch()

  return (
    <div className="App">
      <header className="App-header">
      <NavB/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
      </header>
    </div>
  );
}

export default App;
