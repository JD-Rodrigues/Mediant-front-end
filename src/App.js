
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './components/Home';
import Login from './components/Login';

function App() {
  return (
         <Routes>
           <Route path="/" element={ <Home /> } />
           <Route path="/login" element={ <Login /> } />
           <Route path="/footer" element={<Footer /> }/>
         </Routes>
  );
}

export default App;