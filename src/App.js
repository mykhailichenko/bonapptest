import {Routes, Route} from 'react-router-dom';

import MenuPage from './pages/menu';
import CartPage from './pages/cart';

import Index from './components/Layout';

function App() {
  return (
    <Routes>
        <Route path='/' element={<Index />}>
            <Route index element={<MenuPage />} />
            <Route path='/cart' element={<CartPage />} />
            <Route path='*' element={<MenuPage />} />
        </Route>
    </Routes>
  );
}

export default App;
