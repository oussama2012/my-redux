import React, { useState } from 'react';

const Crud = () => {
    const [users, setUsers] = useState([]);
    const [newName, setNewName] = useState('');
    const [newAge, setNewAge] = useState('');

    const handleAdd = () => {

        setUsers([...users, { id: Date.now(), name: newName, age: newAge }]);
    };

    const handleDelete = (id) => {
        setUsers(users.filter(user => user.id != id));
    };

    const handleEdit = (id) => {
        
        const newName = prompt('Edit Name');
        const newAge = prompt('Edit Age');

        setUsers(users.map(user =>
            user.id === id ? { ...user, name: newName, age: newAge } : user
        ));

    };

    return (
        <div style={{ padding: '20px' }}>
            <h1>User Management</h1>

            <div>
                <input type="text" placeholder="Name" value={newName} onChange={(e) => setNewName(e.target.value)}/>
                <input type="number" placeholder="Age" value={newAge} onChange={(e) => setNewAge(e.target.value)}/>
                <button onClick={handleAdd}>Add User</button>
            </div>

            <h2>Users List</h2>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        {user.id}
                        {user.name} 
                        ({user.age} years old)
                        <button onClick={() => handleEdit(user.id)}>Edit</button>
                        <button onClick={() => handleDelete(user.id)}>Delete</button>
                    </li>
                ))}
            </ul>
            
        </div>
    );
};

export default Crud;