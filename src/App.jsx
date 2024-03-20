import './index.css'
import Home from './pages/Home.jsx';
import Products from './pages/Products.jsx';
import Contact from './pages/Contact.jsx';
import PageNotFound from './pages/PageNotFound.jsx';
import GridExample from './pages/GridExample.jsx';

import { Routes, Route } from 'react-router-dom';
function App() {
  return (
     <Routes>
       {/* Use Home component for the root path */}
       <Route index element={<Home />} /> 
       <Route path="products" element={<Products />} />
       <Route path="contact" element={<Contact />} />
       <Route path="grid" element={<GridExample/>}/>
       <Route path="*" element={<PageNotFound />} />
     </Routes>
  );
}

export default App;