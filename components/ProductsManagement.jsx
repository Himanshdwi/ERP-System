import React, { useState } from 'react';
import ProductForm from './ProductForm';
import productsData from '../data/products';
import './styles.css'

const ProductsManagement = () => {
    const [editingProductId, setEditingProductId] = useState(null);
    const [addingProduct, setAddingProduct] = useState(false);
    const [ products, setProducts ] = useState(productsData);

    const handleDelete = (productId) => {
        setProducts(products.filter(product => product.id !== productId));
    };

    const updateProduct = (updatedProduct) => {
        const updatedProducts = products.map(product =>
            product.id === updatedProduct.id ? updatedProduct : product
        );
        setProducts(updatedProducts);
        setEditingProductId(null);
    };

    const handleAddProduct = () => {
        console.log("sdfsd")
        setAddingProduct(true)
    }

    return (
        <div style={{padding: "15px"}}> 
            <h1>Products Management</h1>
            <button onClick={handleAddProduct}>Add Product</button>
            {/* List of products */}
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Stock Quantity</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => (
                        <tr key={product.id}>
                            <td>{product.name}</td>
                            <td>{product.category}</td>
                            <td>{product.price}</td>
                            <td>{product.stockQuantity}</td>
                            <td>
                                <button onClick={() => setEditingProductId(product.id)}>Edit</button>
                                <button onClick={() => handleDelete(product.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {(addingProduct || editingProductId) && (
                <ProductForm
                    products={products}
                    setProducts={setProducts}
                    productId={editingProductId}
                    setEditingProductId={setEditingProductId}
                    updateProduct={updateProduct}
                    setAddingProduct={setAddingProduct}
                />
            )}
        </div>
    );
};

export default ProductsManagement;