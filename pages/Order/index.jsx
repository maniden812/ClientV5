import { useState, useEffect } from 'react';

import { Link, Spinner } from 'components';
import { Layout } from 'components/users';
import { userService } from 'services';
import { route } from 'next/dist/server/router';
import Router from 'next/router';

export default Order;

function Order() {
    // const [users, setUsers] = useState(null);
    const [user] = useState(JSON.parse(localStorage.getItem('user')));

    return (
        <Layout>
            <h1>Order</h1>
            <Link href={`/Order/edit/${user.id}`} className="btn btn-sm btn-primary mr-1">PlaceOrder</Link>
            {/* <Link href="/users/add" className="btn btn-sm btn-success mb-2">Add User</Link> */}
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th style={{ width: '30%' }}>Gallons</th>
                        <th style={{ width: '30%' }}>State</th>
                        <th style={{ width: '20%' }}>Date</th>
                        <th style={{ width: '10%' }}>Price per Gallon</th>
                        <th style={{ width: '20%' }}>Total</th>
                        {/* <th style={{ width: '10%' }}>&nbsp;</th> */}
                        {/* <th style={{ width: '10%' }}></th> */}
                    </tr>
                </thead>
                <tbody>
                    {user.sales && user.sales.map(user =>
                        <tr key={user.sales.Gallons}>
                            <td>{user.sales.State}</td>
                            <td>{user.sales.Date}</td>
                            <td>{user.sales.UnitPrice}</td>
                            <td>{user.sales.Total}</td>
                        </tr>
                    )}
                    
                </tbody>
            </table>
        </Layout>
    );
}
