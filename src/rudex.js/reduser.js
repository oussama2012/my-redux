const initianState = [
    {
        id: 1,
        name: "John",
        age: 30
    },
    {
        id: 2,
        name: "Jane",
        age: 25
    },
]

const UsersReduser = (state = initianState, action) => {
    switch (action.type) {


        case "ADD_USER":
            return [...state, action.payload];


        case "DELETE_USER":

            return state.filter((user) => user.id != action.payload);


        case "UPDATE_USER":

            return state.map((item) => {
                if (item.id == action.payload.idUser) {
                    return { ...item, name: action.payload.name, age: action.payload.age, }
                } else {
                    return item
                }
            })

        default:
            return state;
    }
}
export default UsersReduser