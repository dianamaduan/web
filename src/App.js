import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/counter' 
import ProductList from './components/product-list'
import ProductAddForm from './components/product-add-form'

function App() {
  const [productsList, setProductsList] = useState([
    {
      id: 1,
      name: "IPhone 11",
      price: 325000,
      origin: 'USA',
      isinEditMode: false
    },
    {
      id: 2,
      name: "Ipad Pro",
      price: 420990,
      origin: 'USA',
      isinEditMode: false
    },
    {
      id: 3,
      name: "Playstation 4",
      price: 190500,
      origin: 'Japan',
      isinEditMode: false
    },
    {
      id: 4,
      name: "Samsung Galaxy ZFlip",
      price: 662990,
      origin: 'Korea',
      isinEditMode: false
    },
    {
      id: 5,
      name: "Samsung Galaxy Fold",
      price: 762990,
      origin: 'Korea',
      isinEditMode: false
    },
    {
      id: 6,
      name: "Iphone Pro",
      price: 462990,
      origin: 'USA',
      isinEditMode: false
    },
  ])

  const addNewProduct = product => {
    setProductsList([...productsList, product])
  }
  const deleteProduct = pid => {
    setProductsList(productsList.filter(item => { return item.id !== pid }))
  }

  const changeEditMode = id => {
    setProductsList(productsList.map(item => {
        if (item.id === id) return { ...item, isinEditMode: !item.isinEditMode};
        return item;
      })
    );
  };
 
  const editProduct = (e,id) => {
    setProductsList(productsList.map(item => {
      if (item.id === id) return {...item,[e.target.name]: e.target.value};
      return item;
    })
  )
  }
  const updateProduct = id => {
    setProductsList(productsList.map(item => {
      if (item.id === id) return {...item,isinEditMode: !item.isinEditMode};
      return item;
    })
  )
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Counter/>
      <ProductAddForm  addNewProduct={addNewProduct}/>
      <ProductList products={productsList} updateProduct={updateProduct} editProduct={editProduct} deleteProduct={deleteProduct} changeEditMode={changeEditMode}/>
    </div>
  );
}

export default App;
