import { Routes,Route,useNavigate } from 'react-router-dom';
import './App.css';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Login from './pages/Login';
import Product from './pages/Product';
import ProductList from './pages/ProductList';
import Register from './pages/Register';
import Blog from './components/Blog';

function App() {
  const user=true;
  const navigation=useNavigate()
  //console.log(navigation)
  return (
    <div className="App">
      <>
      <Routes>
<Route  exact path='/' element={<Home/>}/>
<Route  path='/products/:category' element={<ProductList/>}/>
<Route   path='/product/:id' element={<Product/>} />     
<Route   path='/cart' element={<Cart/>} />
<Route   path='/login' element={<Login/>}>
</Route>

<Route  exact path='/register' element={<Register/>}> 
 </Route>  
     <Route exact path='/blog' element={<Blog/>}/> 
      
      </Routes>
      </>
      {/* <ProductList/> */}
   {/* <Home/> */}
   {/* <Product/> */}
   {/* <Register/> */}
   {/* <Login/> */}

   {/* <Cart/> */}
    </div>
  );
}

export default App;
