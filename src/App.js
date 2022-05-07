import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './home';
import Collection from './collection';
import Error from './erro';
import Application from './application';
function App() {
  return (
    <>
      <Routes>
        <Route path="/School" element={<Home />} />
        <Route path="/collection" element={<Collection/>} />
        <Route path="*" element={<Error />} />
        <Route path="/Appliction" element={<Application />} />
      </Routes>
    </>

  );
}

export default App;
