
import { Routes, Route } from 'react-router-dom';
import AboutUsPage from './components/AboutUsPage';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';

function App() {
  return (
         <Routes>
           <Route path="/" element={ <Home /> } />
           <Route path="/about-us" element={ <AboutUsPage /> } />
           <Route path="/login" element={ <Login /> } />
           <Route path="/signup" element={ <SignUp /> } />
         </Routes>
  );
}

export default App;