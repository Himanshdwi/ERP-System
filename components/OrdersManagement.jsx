import React from 'react';
import ordersData from '../data/orders';

const OrdersManagement = () => {
    return (
        <div>
            <h1>Orders Management</h1>
            {/* List of orders */}
            <table>
                <thead>
                    <tr>
                        <th>Order Number</th>
                        <th>Customer Name</th>
                        <th>Date</th>
                        <th>Total Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {ordersData.map(order => (
                        <tr key={order.id}>
                            <td>{order.orderNumber}</td>
                            <td>{order.customerName}</td>
                            <td>{order.date}</td>
                            <td>{order.totalAmount}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default OrdersManagement;