import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Plans from '../Plans/Plans';
import Buy from '../Buy/Buy';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/sign-up' element={<Register />} />
        <Route path='/subscriptions' element={<Plans />} />
        <Route path='/subscriptions/1' element={<Buy />} />
        {/* <Route path='/home' element={<Login />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
