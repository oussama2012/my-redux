import logo from './logo.svg';
import './App.css';
import Home from './components/home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import List from './components/list';
import Update from './components/Update';
import Show from './components/show';
function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<List />} />
        <Route path="/update/:id" element={<Update />} />
        <Route path="/show/:id" element={<Show />} />

      </Routes>

    </BrowserRouter>


  );
}

export default App;
