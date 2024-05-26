import './index.css';
import {Routes, Route, } from 'react-router-dom'
import { Home } from './pages/Home/Home.jsx';
import { Cart } from './pages/Cart/Cart.jsx';
import Header from './components/header/Header.tsx';
import Footer from './components/footer/Footer.tsx';
import { AppContext } from './Context/Cart.jsx';

function App() {
    return (
        <AppContext>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='cart' element={<Cart />} />
            </Routes>
            <Footer />
        </AppContext>
    );
}

export default App;
