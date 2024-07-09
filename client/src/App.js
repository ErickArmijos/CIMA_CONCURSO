import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterComponent from './Components/RegisterComponent';

import { AuthProvider } from './Context/authContext.js';
import './App.css';
import LabsComponent from "./Components/LabsComponent.js";
import RegistrarLab from "./Components/RegistrarLab.js";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<RegisterComponent/>} />
          <Route path='/laboratorios' element={<LabsComponent/>} />
          <Route path='/reservas' element={<RegistrarLab/>} />
        </Routes>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
