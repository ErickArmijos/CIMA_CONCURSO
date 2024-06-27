import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterComponent from './Components/RegisterComponent';

import { AuthProvider } from './Context/authContext.js';
import './App.css';
import LabsComponent from "./Components/LabsComponent.js";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/register' element={<RegisterComponent/>} />
          <Route path='/labsinfo' element={<LabsComponent/>} />
        </Routes>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
