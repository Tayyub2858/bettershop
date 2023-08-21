
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AllPurchase from './Compnents/components/Allpurchases/AllPurchase';
import Dashboard from './Compnents/components/Dashboard/Dashboard';
import IDdetails from './Compnents/components/Allpurchases/IDdetails/IDdetails';



function App() {
  return (
   <>
<BrowserRouter>
<Routes>
  <Route path='/' element={<Dashboard/>}/>
  <Route path='/allpurchases' element={<AllPurchase/>} />
  <Route path='/details/:id' element={<IDdetails/> }/>
</Routes>
</BrowserRouter>
   </>
  );
}

export default App;
