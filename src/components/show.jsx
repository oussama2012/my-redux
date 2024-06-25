
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
export default function Show() {


    const { id } = useParams();

    const select = useSelector((state) => state);

    const user = select.find((user) => user.id == id);

    return (
        <div>
            <h1>{user.id}</h1>
            <h1>{user.name}</h1>
            <h1>{user.age}</h1>
        </div>
    );
}