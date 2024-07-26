import { useEffect, useState } from "react";
import * as userService from "../service/users";
import { useNavigate, useParams } from "react-router-dom";

function FormUsers() {
    const [name, setName] = useState("");
    const [age, setAge] = useState(18);
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const navigate = useNavigate();
    const {id} = useParams();
    const isAddMode = !id;

    const save = () => {
        const addUser = async () => {
            await userService.saveUser(name, age,email, address, id, isAddMode);
            return navigate("/users");
        }
        addUser();
    }

    useEffect(()=>{
        if (!isAddMode) {
            const getUser = async () => {
                const user = await userService.getUserById(id);
                if (user) {
                    setAge(user.age);
                    setName(user.name);
                    setEmail(user.email);
                    setAddress(user.address);
                }
            }
            getUser();
        }
    }, [])

    return (
        <>
            <input type="hidden" value={id} />
            <input type="text" placeholder="Input your name" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="number" placeholder="Input your age" value={age} onChange={(e) => setAge(e.target.value)} />
            <input type="email" placeholder="Input your email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="text" placeholder="Input your address" value={address} onChange={(e) => setAddress(e.target.value)} /
            <button onClick={save}>Save</button>
        </>
    );
}

export default FormUsers;
