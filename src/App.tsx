import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { Layout } from '@/components/layout/Layout'
import Home from '@/pages/Home'
import About from '@/pages/About'
import Collections from '@/pages/Collections'
import CollectionCategory from '@/pages/CollectionCategory'
import ProductPage from '@/pages/ProductPage'
import Shop from '@/pages/Shop'
import Lookbook from '@/pages/Lookbook'
import FabricLibrary from '@/pages/FabricLibrary'
import Services from '@/pages/Services'
import Bespoke from '@/pages/Bespoke'
import Journal from '@/pages/Journal'
import Contact from '@/pages/Contact'

function AnimatedRoutes() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/collections/:slug" element={<CollectionCategory />} />
          <Route path="/product/:slug" element={<ProductPage />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/lookbook" element={<Lookbook />} />
          <Route path="/fabrics" element={<FabricLibrary />} />
          <Route path="/services" element={<Services />} />
          <Route path="/bespoke" element={<Bespoke />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </AnimatePresence>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  )
}

export default App