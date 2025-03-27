import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct, searchProduct, sortProduct } from "../redux/productSlice";
import "./Product.css"; 

const Product = () => {
  const dispatch = useDispatch();
  const { filteredProducts, loading, error } = useSelector((state) => state.product);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    dispatch(searchProduct(e.target.value));
  };

  const handleSort = (e) => {
    dispatch(sortProduct(e.target.value));
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <input
        type="text"
        placeholder="Search products..."
        value={searchQuery}
        onChange={handleSearch}
        className="search-input"
      />   
      <select onChange={handleSort} className="sort-dropdown">
        <option value="">Sort By</option>
        <option value="title">Name</option>
        <option value="price">Price</option>
      </select>
      <div className="product-container">
        {filteredProducts.map((ele) => (
          <div key={ele.id} className="product-card">
            <img src={ele.img} alt={ele.title} />
            <h2>{ele.title}</h2>
            <p>${ele.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
