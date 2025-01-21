

import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './component/login/Login';
import Signup from './component/Signup';
import Users from './component/user/Users';


// AOS.init();

function App() {
  
  
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/signin' element={<Signup/>} />
          <Route path='/users' element={<Users/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
