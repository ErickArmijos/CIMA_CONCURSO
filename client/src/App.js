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
          <Route path='/register' element={<RegisterComponent/>} />
<<<<<<< HEAD
          <Route path='/labsinfo' element={<LabsComponent/>} />
          <Route path='/registrarlab' element={<RegistrarLab/>} />

=======
          <Route path='/laboratorios' element={<LabsComponent/>} />
>>>>>>> c64a21fa038a4f3f468a482e945a3dd7b012c7f8
        </Routes>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
