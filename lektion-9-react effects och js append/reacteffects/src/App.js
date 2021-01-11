import './App.css';
import React, { useState, useEffect } from 'react'
import AddForm from './components/AppProductForm'
import ProductList from './components/ProductList'
import axios from 'axios'

function App() {

  const [products, setProducts] = useState([])

  useEffect(() => {
    
    axios.get('https://win20-funcapp.azurewebsites.net/api/GetProducts')
      .then(res => setProducts(res.data))
  }, [])


  return (
    <div className="container">
      <div className="d-flex justify-content-center mt-5">
        <div>
          <div>
            <AddForm products={products} setProducts={setProducts} />   
          </div>
          <div className="border">
            <ProductList products={products}  />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;