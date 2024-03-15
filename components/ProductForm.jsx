import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ProductForm = ({ products, setProducts, productId, setEditingProductId, updateProduct, setAddingProduct }) => {
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');
    const [stockQuantity, setStockQuantity] = useState('');
    const history = useNavigate();

    useEffect(() => {
        // If productId is provided, pre-fill the form with the product data
        if (productId) {
            const product = products.find(product => product.id === parseInt(productId));
            if (product) {
                setName(product.name);
                setCategory(product.category);
                setPrice(product.price);
                setStockQuantity(product.stockQuantity);
            }
        }
    }, [productId, products]);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (productId) {
            // Edit existing product
            const updatedProduct = products.map(product => {
                if (product.id === parseInt(productId)) {
                    return { ...product, name, category, price, stockQuantity };
                }
                return product;
            });
            updateProduct(updatedProduct);
        } else {
            // Add new product
            console.log("sdfas")
            const newProduct = {
                id: Date.now(), // for storing unique ids
                name,
                category,
                price,
                stockQuantity
            };
            setProducts([...products, newProduct]);
        }
        setEditingProductId(null);
        setAddingProduct(false)
        history('/products');
    };

    const handleCloseForm = () => {
        setAddingProduct(false)
        setEditingProductId(null)
    }

    return (
        <div>
            <h2>{productId ? 'Edit Product' : 'Add Product'}</h2>
            
            {/* Form to add/edit product */}
            <div>
                <div style={{margin: "10px"}}>
                    <span>Name:</span>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div style={{margin: "10px"}}>
                    <span>Category:</span>
                    <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} required />
                </div>
                <div style={{margin: "10px"}}>
                    <span>Price:</span>
                    <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />
                </div>
                <div style={{margin: "10px"}}>
                    <span>Stock Quantity:</span>
                    <input type="number" value={stockQuantity} onChange={(e) => setStockQuantity(e.target.value)} required />
                </div>
                <button type="submit" onClick={handleFormSubmit} style={{marginTop: "10px"}}>{productId ? 'Update Product' : 'Add Product'}</button>
                <button onClick={handleCloseForm} style={{marginTop: "10px"}}>Close</button>
            </div>
        </div>
    );
};

export default ProductForm;