import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";


export default function Update() {


    const dispatch = useDispatch();
    const navgate = useNavigate();

    const { id } = useParams();


    const [name, setName] = useState();
    const [age, setAge] = useState();
    const handelUpdate = (e) => {
        e.preventDefault();


        dispatch({ type: "UPDATE_USER", payload: { name: name, age: age, idUser: id } })
        navgate("/");
    };
    return (
        <form>
            <input type="text" onChange={(e) => setName(e.target.value)} />
            <input type="number" onChange={(e) => setAge(e.target.value)} />
            <button className="b" onClick={handelUpdate}  >Update</button>

        </form>
    );
}