
import {BrowserRouter as Router , Route, Routes} from 'react-router-dom'
import './App.css';
import Register from './Components/Auth/Register';
import Login from './Components/Auth/Login';
import Dashboard from './Components/Pages/Dashboard';

const App = () => {
  return <Router>
    <Routes>
        <Route path='/' element={<Register/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
      </Routes>
    </Router>;
};

export default App
