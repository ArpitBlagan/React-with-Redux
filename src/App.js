import React from 'react';
import "./App.css"
import Header from './container/header';
import ProductDetails from './container/productDetails';
import ProductList from './container/productList';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
 
function App(){
    
    return (
        <div className="App">
        <Router>
        <Header/>
        <Routes>
        <Route path="/" element={<ProductList/>}/>
        <Route path="/product/:productId" element={<ProductDetails/>}/>
        <Route>404 Not Found</Route>
        </Routes>
        </Router>
        </div>
    );
}
export default App;