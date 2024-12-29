import React, { useEffect, useState } from 'react'
import "../CSS/Display.Product.css"
export const Display = () => {
  const [data,setData]= useState([]);
  useEffect(()=>{
const Store = localStorage.getItem('products')
if(Store){
  setData(JSON.parse(Store))
}
  },[])

  const displayProduct= data.map((key,i)=>{
    return(
      <>
        <ul  className='display-table-row'>
          <li>{i+1}</li>
          <li>{key.ProductName}</li>
          <li>{key.Price}</li>
        </ul>
      </>
    )
  })
  return (
    <>
 
      <h1 className='display'>Display Product</h1>
     <table className='display-table'>
      <ul className='display-table-row'>
        <li>S.No</li>
        <li>Product Name</li>
        <li>Product Price</li>
      </ul>
      {displayProduct}
     </table>
    </>
  )
}

