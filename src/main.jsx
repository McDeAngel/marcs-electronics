import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { CartProvider } from './context/CartContext'
import { WishlistProvider } from './context/WishlistContext'
import { ThemeProvider } from './context/ThemeContext'
import { RecentlyViewedProvider } from './context/RecentlyViewedContext'
import { ComparisonProvider } from './context/ComparisonContext'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import '@fortawesome/fontawesome-free/css/all.min.css'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <CartProvider>
        <WishlistProvider>
          <RecentlyViewedProvider>
            <ComparisonProvider>
              <App />
            </ComparisonProvider>
          </RecentlyViewedProvider>
        </WishlistProvider>
      </CartProvider>
    </ThemeProvider>
  </StrictMode>,
)