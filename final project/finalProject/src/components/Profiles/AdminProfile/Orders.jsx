import React, { useEffect, useState } from 'react';
import Usefatch from '../../Profiles/getOrders'; // Adjust the path if needed
import styleUpdateTrees from './UpdateTrees.module.css';

export default function Orders() {
    const [orders, setOrders] = useState([]); 
    const [users, setUsers] = useState({}); // State to store users data
    const [loading, setLoading] = useState(true); // Add loading state
    const fetchedOrders = Usefatch(); 

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch("http://localhost:4000/user/getUsers"); // Adjust the endpoint as necessary
                const data = await response.json();
                console.log("Fetched Users:", data); // Log fetched users

                const usersMap = data.reduce((acc, user) => {
                    acc[user._id] = user.name; // Make sure to use the correct property (name or username)
                    return acc;
                }, {});
                setUsers(usersMap);
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        };

        const fetchData = async () => {
            await fetchUsers();
            setOrders(fetchedOrders); // Fetch orders after users
            setLoading(false); // Set loading to false after data is fetched
        };

        fetchData();
    }, [fetchedOrders]); 

    useEffect(() => {
        console.log("Fetched Orders:", orders); // Log fetched orders
    }, [orders]);

    if (loading) {
        return <div>Loading...</div>; // Show a loading indicator while fetching data
    }

    return (
        <div className={styleUpdateTrees.updatePage}>
            <h1>All Orders</h1>

            <table className={styleUpdateTrees.trees}>
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Status</th>
                        <th>Total Price</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order) => (
                        <tr key={order._id}>
                            <td>{users[order.userId] || 'Unknown User'}</td>
                            <td>{order.status}</td>
                            <td>{order.total_price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
