import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../Login/Login';
import Register from '../Register/Register';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/sign-up' element={<Register />} />
        {/* <Route path='/subscriptions' element={<Login />} />
        <Route path='/subscriptions/ID_DO_PLANO' element={<Login />} />
        <Route path='/home' element={<Login />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
