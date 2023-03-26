const initialValue = {
    users: [],
    todos: [],
    posts: [],
};


const appReducer = (state = initialValue, action) => {
    switch (action.type) {
        case "LOAD_USERS":
            return { ...state, users: action.payload }

        case "ADD_USER":
            return { ...state, users: [...state.users, action.payload] }

        case "UPDATE_USER":
            let usersArr = [...state.users];
            let index = usersArr.findIndex(x => x.id === action.payload.id);
            if (index >= 0) {
                usersArr[index] = action.payload
            }

            return { ...state, users: usersArr }

        case "DELETE_USER":

            let usersArr2 = [...state.users];
            let index2 = usersArr2.findIndex(x => x.id === action.payload);
            if (index2 >= 0) {
                usersArr2.splice(index2, 1)
            }

            return { ...state, users: usersArr2 }




        case "LOAD_TODOS":
            return { ...state, todos: action.payload }

        case "ADD_TODO":
            return { ...state, todos: [...state.todos, action.payload] }

        case "MARK_COMPLETED":
            let todosArr = [...state.todos];
            let index3 = todosArr.findIndex(x => x.id === action.payload.id);
            if (index3 >= 0) {
                todosArr[index3] = action.payload
            }
            return { ...state, todos: todosArr }





        case "LOAD_POSTS":
            return { ...state, posts: action.payload }

        case "ADD_POST":
            return { ...state, posts: [...state.posts, action.payload] }

        default:
            return state
    };
}

export default appReducer;
