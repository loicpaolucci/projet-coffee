import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import Header from './components/Header';
import CreateCofee from './components/CofeeCrud/CreateCofee';

const App = () => {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h2>HELLO MENU</h2>} />
          <Route path="/login" element={< LoginForm />} />
          <Route path="/register" element={< RegisterForm />} />
          <Route path="/sell-cofee" element={< CreateCofee />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
