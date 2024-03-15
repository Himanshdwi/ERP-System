import React from 'react';
import { useNavigate } from 'react-router-dom';
import productsData from '../data/products';
import ordersData from '../data/orders';

const Dashboard = () => {
    const history = useNavigate();

    const navigateTo = (path) => {
        history(path);
    };

    return (
        <div>
            <h1>Dashboard</h1>
            <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                {/* Display key metrics */}
                <div>
                    <p>Total number of products: {productsData.length}</p>
                    <p>Total number of orders: {ordersData.length}</p>

                    {/* Navigation links */}
                    <button onClick={() => navigateTo('/products')}>Products Management</button>
                    <button onClick={() => navigateTo('/orders')}>Orders Management</button>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;