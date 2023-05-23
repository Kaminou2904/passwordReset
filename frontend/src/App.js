import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from './Pages/Login/Login';
import Reset from './Pages/Reset/Reset';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/reset' element={<Reset/>}/>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
