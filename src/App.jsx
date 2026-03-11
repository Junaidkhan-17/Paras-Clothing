import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import SiteNavbar from './components/SiteNavbar'
import SiteFooter from './components/SiteFooter'
import Home from './pages/Home'
import Product from './pages/Product'
import About from './pages/About'
import Garments from './pages/Garments'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <SiteNavbar />
        <main className="page-area">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/garments" element={<Garments />} />
            <Route path="/product" element={<Product />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <SiteFooter />
      </div>
    </BrowserRouter>
  )
}

export default App
