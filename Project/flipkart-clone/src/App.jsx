import { useState } from "react";

import './App.css'

import Navbar from './components/Navbar'
import CategoryBar from './components/CategoryBar'
import Hero from './components/Hero'
import ProductSection from './components/ProductSection'
import Footer from './components/Footer'

import { sportsData, electronicsData } from './data/products'

function App() {

  const [cartCount, setCartCount] = useState(0);

  function addToCart() {
    setCartCount(cartCount + 1);
  }

  return (
    <>
      <Navbar cartCount={cartCount} />

      <CategoryBar />

      <Hero />

      <ProductSection
        title="Get Set for Sports"
        items={sportsData}
        addToCart={addToCart}
      />

      <ProductSection
        title="Best of Electronics"
        items={electronicsData}
        addToCart={addToCart}
      />

      <Footer />
    </>
  )
}

export default App