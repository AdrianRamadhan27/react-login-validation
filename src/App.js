import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import Home from './pages/Home';


function App() {
  return (
    <Router>
    <div className="App bg-gray-800">
      <nav className="bg-slate-600">
        <ul className="justify-between flex">
          <Link to="/">
          <li className="text-lg m-5 text-white hover:text-violet-950">Home</li>
          </Link>
          <Link to="/login">
          <li className="text-lg m-5 text-white hover:text-violet-950">Login</li>
          </Link>
        </ul>
      </nav>
    

    <Routes>
      <Route path="/" element={<Home />}/>

      <Route path="/login" element={<LoginPage />}/>
    </Routes>
    </div>
    </Router>
  );
}

export default App;
