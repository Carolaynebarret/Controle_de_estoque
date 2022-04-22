import './App.css';
import 'antd/dist/antd.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Products from './pages/Products/Products';
import Sales from './pages/Sales/Sales';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="vendas" element={<Sales />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
