import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import Header from './components/Header';
import CreateCofee from './components/CofeeCrud/CreateCofee';
import IndexCofees from './components/CofeeCrud/IndexCofees';
import AppStore from './stores/Redux/AppStore';
import { Provider } from 'react-redux'
import './components/Navbar/style.css';
import Home from './pages/Home'
import Product from './components/Product'
import Arabica from './components/Product/arabica';
import Robusta from './components/Product/robusta';
import Autres from './components/Product/autre';
import Contact from './components/Contact';
import Profile from './components/Profile';


const App = () => {
  return (
    <div className="App">
      <Provider store={AppStore}>
        
        <BrowserRouter>
        <Header />
          <Routes>
            <Route path="/" element={<h2>HELLO MENU</h2>} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={< LoginForm />} />
            <Route path="/register" element={< RegisterForm />} />
            <Route path="/sell-cofee" element={< CreateCofee />} />
            <Route path="/index-cofee" element={< IndexCofees />} />
            <Route path="/product" element={< Product />} />
            <Route path="/product/arabica" element={<Arabica/>} />  
            <Route path="/product/robusta" element={<Robusta/>} /> 
            <Route path="/product/autre" element={<Autres/>} /> 
            <Route path="/contact" element={<Contact/>} /> 
            <Route path="/profile" element={< Profile  />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
