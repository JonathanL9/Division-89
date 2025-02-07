import './App.css';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import { useState} from 'react';

import Home from './components/Home';
import Products from './components/Products';
import About from './components/About';
import LogIn from './components/Login';
import Admin from './components/Admin';
import Footer from './components/Footer';
import Header from './components/header';
import Analysis2 from './components/Analysis2';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
 
  const handleLogin = async (email, password) => { 
    try { const response = await axios.post('http://localhost:5000/loginState', { email, password }); 
    if (response.data.success) { 
      setIsLoggedIn(true);  } 
      else { 
       setIsLoggedIn(false)} } 
        catch (error) { 
          } };

  return (
    <>
    <Router>
  
        <Header isLoggedIn={isLoggedIn}></Header>   
        <Routes>
          <Route path="/" element={<Home></Home>}/>
          <Route path="/products" element={<Products></Products>} />
          <Route path="/login" element={<LogIn></LogIn>}/>
          <Route path="/admin" element={<Admin></Admin>}/>
          <Route path="/about" element={<About></About>}/>
          <Route path="/home" element={<Home></Home>}/>
          <Route path="/analysis" element={<Analysis2></Analysis2>}/>
            </Routes> 
            <Footer></Footer>
       
        </Router>
    </>
  );
}

export default App;
