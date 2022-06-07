import { BrowserRouter, Routes, Route } from 'react-router-dom';
import InfosContext from '../Contexts/InfosContext';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Plans from '../Plans/Plans';
import { useState } from 'react';
import Home from '../Home/Home';
import Buy from '../Buy/Buy';


function App() {

  const [token, setToken] = useState('')
  const [idPlan, setIdPlan] = useState('')
  const [infos, setInfos] = useState('')


  return (
    <BrowserRouter>
      <InfosContext.Provider value={{ token, setToken, idPlan, setIdPlan, infos, setInfos }}>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/sign-up' element={<Register />} />
          <Route path='/subscriptions' element={<Plans />} />
          <Route path='/subscriptions/:id' element={<Buy />} />
          <Route path='/home' element={<Home />} />
        </Routes>
      </InfosContext.Provider>
    </BrowserRouter>
  );
}

export default App;
