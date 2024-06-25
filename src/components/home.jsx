import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Home() {

    const users = useSelector((state) => state);
    const dispatch = useDispatch();

    const [id, setId] = useState(3);
    const [name, setName] = useState();
    const [age, setAge] = useState();

    function handleClick() {
        dispatch({ type: "ADD_USER", payload: { name: name, age: age, id: id } });
        setId(id + 1);
    }
    return (

        <>
            <form onSubmit={(e) => e.preventDefault()} >
                <input type="text" onChange={(e) => setName(e.target.value)} />
                <input type="number" onChange={(e) => setAge(e.target.value)} />
                <button onClick={handleClick}>Add</button>
            </form>

            <table className="table" style={{ justifyContent: "center" }}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user) => {
                            return (
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.age}</td>
                                    <td>

                                        <Link to={`/show/${user.id}`} > View</Link>

                                        <Link to={`/update/${user.id}`}> Edit</Link>

                                        <button onClick={() => dispatch({ type: "DELETE_USER", payload: user.id })} >Delete</button>
                                    </td>

                                </tr>
                            )
                        })
                    }
                </tbody>

            </table>
        </>
    )


}