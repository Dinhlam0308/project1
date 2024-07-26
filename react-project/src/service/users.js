import { db } from "./dexie";

const saveUser = async (name, age, email, address, id, isAddMode) => {
    if (isAddMode) {
        await db.user.add({ name: name, age: age,email:email, address:address });
    } else {
        await db.user.update(parseInt(id), { name: name, age: age,email:email, address:address });
    }
}

const getAllUsers = async () => {
    return await db.user.toArray();
}

const deleteUser = async (id) => {
    await db.user.delete(parseInt(id));
    return await db.user.toArray();
}

const getUserById = async (id) => {
    return await db.user.get(parseInt(id));
}

export { saveUser, getAllUsers, getUserById, deleteUser };
