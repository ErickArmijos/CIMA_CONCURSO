import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterComponent from './Components/RegisterComponent';

import { AuthProvider } from './Context/authContext.js';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/register' element={<RegisterComponent/>} />
        </Routes>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
