import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Crud = () => {
    const [users, setUsers] = useState([]);
    const [newName, setNewName] = useState('');
    const [newAge, setNewAge] = useState('');
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchUsers = async () => {
            const response = await axios.get('http://localhost:8000/api/users');
            setUsers(response.data);
        };

        fetchUsers();
    }, []);

    const handleAdd = async () => {
        const newUser = { name: newName, age: newAge };
        const response = await axios.post('http://localhost:8000/api/users', newUser);
        setUsers([...users, response.data]);
    };

    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:8000/api/users/${id}`);
        setUsers(users.filter(user => user.id !== id));
    };

    const handleEdit = async (id) => {
        const updatedName = prompt('Edit Name');
        const updatedAge = prompt('Edit Age');
        const updatedUser = { name: updatedName, age: updatedAge };

        const response = await axios.put(`http://localhost:8000/api/users/${id}`, updatedUser);
        setUsers(users.map(user => (user.id === id ? response.data : user)));
    };

    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div style={{ padding: '20px' }}>
            <h1>User Management</h1>

            <div>
                <input type="text" placeholder="Name" value={newName} onChange={(e) => setNewName(e.target.value)} />
                <input type="number" placeholder="Age" value={newAge} onChange={(e) => setNewAge(e.target.value)} />
                <button onClick={handleAdd}>Add User</button>
            </div>

            <div>
                <input type="text" placeholder="Search by Name" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
            </div>

            <h2>Users List</h2>
            <ul>
                {filteredUsers.map(user => (
                    <li key={user.id}>
                        {user.id} {user.name} ({user.age} years old)
                        <button onClick={() => handleEdit(user.id)}>Edit</button>
                        <button onClick={() => handleDelete(user.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Crud;
