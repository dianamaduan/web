import React from 'react';
import './table.css';
import Row from './row'

function ProductList(props) {

  const list = props.products.map(item => 
    ( <Row key={item.id} item={item} deleteProduct={() => props.deleteProduct(item.id)} 
     changeEditMode = {() => props.changeEditMode(item.id)} updateProduct={() => props.updateProduct(item.id)} editProduct={(e) => props.editProduct(e,item.id)}/> ))
 
  return (
    <div className="table">
       {list}
    </div>
  );
}

export default ProductList;
