import { useState, useEffect } from 'react';

import { Link, Spinner } from 'components';
import { Layout } from 'components/users';
import { userService } from 'services';
import { route } from 'next/dist/server/router';
import Router from 'next/router';

export default Index;

function Index() {
    const [users, setUsers] = useState(null);

    function logout() {
        userService.logout();
    }

    useEffect(() => {
        userService.getAll().then(x => setUsers(x));
    }, []);

    function deleteUser(id) {
        setUsers(users.map(x => {
            if (x.id === id) { x.isDeleting = true; }
            return x;
        }));
        userService.delete(id).then(() => {
            setUsers(users => users.filter(x => x.id !== id));
            logout();
            Router.push('/account/register');
        });
    }

    return (
        <Layout>
            <h1>Profile</h1>
            {/* <Link href="/users/add" className="btn btn-sm btn-success mb-2">Add User</Link> */}
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th style={{ width: '30%' }}>Username</th>
                        <th style={{ width: '30%' }}>Full-name</th>
                        <th style={{ width: '30%' }}>Address1</th>
                        <th style={{ width: '10%' }}>Address2</th>
                        <th style={{ width: '10%' }}>City</th>
                        <th style={{ width: '10%' }}>State</th>
                        <th style={{ width: '10%' }}>Zip</th>
                        <th style={{ width: '10%' }}>&nbsp;</th>
                        <th style={{ width: '10%' }}></th>
                    </tr>
                </thead>
                <tbody>
                    {users && users.map(user =>
                        <tr key={user.id}>
                            <td>{user.username}</td>
                            <td>{user.fullname}</td>
                            <td>{user.Address1}</td>
                            <td>{user.Address2}</td>
                            <td>{user.City}</td>
                            <td>{user.State}</td>
                            <td>{user.Zip}</td>
                            <td style={{ whiteSpace: 'nowrap' }}>
                                <Link href={`/users/edit/${user.id}`} className="btn btn-sm btn-primary mr-1">Edit</Link>
                                <button onClick={() => deleteUser(user.id)} className="btn btn-sm btn-danger btn-delete-user" disabled={user.isDeleting}>
                                    {user.isDeleting 
                                        ? <span className="spinner-border spinner-border-sm"></span>
                                        : <span>Delete</span>
                                    }
                                </button>
                            </td>
                        </tr>
                    )}
                    {!users &&
                        <tr>
                            <td colSpan="4">
                                <Spinner />
                            </td>
                        </tr>
                    }
                    {users && !users.length &&
                        <tr>
                            <td colSpan="4" className="text-center">
                                <div className="p-2">No Users To Display</div>
                            </td>
                        </tr>
                    }
                </tbody>
            </table>
        </Layout>
    );
}
