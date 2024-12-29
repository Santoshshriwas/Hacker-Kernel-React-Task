import React, { useEffect, useState } from 'react';


export const Product = () => {
  const [data, setData] = useState({
    ProductName: "",
    Price: ""
  });
  const [product, setProduct] = useState([]);

  const Value = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value
    });
    console.log(data);
  };
  console.log(product);

  const AddProduct = (e) => {
    e.preventDefault();
    const isDuplicate = product.some(product => product.ProductName === data.ProductName);
    if (isDuplicate) {
      alert('Product with this name already exists!');
      return;
    }

    const newProduct = {
      id: new Date().getTime(),
      ...data
    };

    const upProducts = [...product, newProduct];
    setProduct(upProducts);
    localStorage.setItem('products', JSON.stringify(upProducts));

    setData({
      ProductName: "",
      Price: ""
    });
  };

  useEffect(() => {
    const storedProducts = localStorage.getItem('products');
    if (storedProducts) {
      setProduct(JSON.parse(storedProducts));
    }
  }, []);

  return (
    <>
    <div className='productinput'>

      <form onSubmit={AddProduct}>
      <h2>Add Product</h2>
        <input
          type="text"
          name="ProductName"
          value={data.ProductName}
          onChange={Value}
          placeholder="Product Name"
        /><br/>
        <input
          type="text"
          name="Price"
          value={data.Price}
          onChange={Value}
          placeholder="Price"
        /><br/>
        <button type="submit">Add product</button>
      </form>
      </div>
    </>
  );
};



