import React, { useState, useEffect } from 'react';
import classes from './order.module.css';

const PlacedOrders = () => {
  const [userOrders, setUserOrders] = useState([]);

  useEffect(() => {
    // Simulate fetching user orders from an API or database.
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      // Replace this with an actual API call to fetch user orders.
      const response = await fetch('/api/user-orders'); // Replace with your API endpoint.
      if (response.ok) {
        const ordersData = await response.json();
        setUserOrders(ordersData);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={classes.placedOrders}>
      <h1 className={classes.title}>Placed Orders</h1>
      <div className={classes.boxContainer}>
        {userOrders.length > 0 ? (
          userOrders.map((order) => (
            <div className={classes.box} key={order.id}>
              <p>Placed on: <span>{order.placed_on}</span></p>
              <p>Name: <span>{order.name}</span></p>
              <p>Number: <span>{order.number}</span></p>
              <p>Email: <span>{order.email}</span></p>
              <p>Address: <span>{order.address}</span></p>
              <p>Payment Method: <span>{order.method}</span></p>
              <p>Your Orders: <span>{order.total_products}</span></p>
              <p>Total Price: <span>${order.total_price}/-</span></p>
              <p>
                Payment Status:{' '}
                <span
                  style={{
                    color: order.payment_status === 'pending' ? 'red' : 'green',
                  }}
                >
                  {order.payment_status}
                </span>
              </p>
            </div>
          ))
        ) : (
          <p className={classes.empty}>No orders placed yet!</p>
        )}
      </div>
    </div>
  );
};

export default PlacedOrders;