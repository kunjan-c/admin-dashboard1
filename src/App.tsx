
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import { lazy,Suspense } from 'react';
import Loader from './components/Loader';
// import "./styes/app.scss";
const Dashboard = lazy(()=> import("./pages/dashboard"));
const Products = lazy(()=> import("./pages/Products"));
const Transactions = lazy(()=> import("./pages/Transactions"))
const Customers = lazy(()=> import("./pages/Customers"))
function App() {
  return (
    <BrowserRouter>
   <Suspense fallback={<Loader></Loader>}>
    <Routes>
      <Route path="/admin/dashboard" element={<Dashboard/>}/>
    </Routes>
    <Routes>
      <Route path="/admin/products" element={<Products/>}/>
    </Routes>
    <Routes>
      <Route path="/admin/customers" element={<Customers/>}/>
    </Routes>
    <Routes>
      <Route path="/admin/transactions" element={<Transactions/>}/>
    </Routes>


     {/* charts */}

    </Suspense>
    </BrowserRouter>
  )
}

export default App