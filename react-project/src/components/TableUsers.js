import { useEffect, useState } from "react";
import * as userService from "../service/users";
import { Link } from "react-router-dom";

function TableUsers() {
    const [users, setUsers] = useState([]);

    useEffect(()=> {
        const getAllUsers = async () => {
            const result = await userService.getAllUsers();
            setUsers(result);
        }
        getAllUsers();
    }, []);

    const deleteUser = async(id) => {
        await userService.deleteUser(id);
        const updatedUsers = users.filter(user => user.id !== id);
        setUsers(updatedUsers);
    }

    return (
        <>
            <button><Link to={"/user/form"}>Add new User</Link></button>
            <table style={{width:700}} border={1}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.age}</td>
                            <td>{user.email}</td>
                            <td>{user.address}</td>
                            <td>
                                <Link to={"/user/form/"+user.id}>Edit</Link>
                                ||
                                <button onClick={() => deleteUser(user.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default TableUsers;
