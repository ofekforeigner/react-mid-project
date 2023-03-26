import axios from "axios";

const usersUrl = 'https://jsonplaceholder.typicode.com/users';
const todosUrl = 'https://jsonplaceholder.typicode.com/todos';
const postsUrl = 'https://jsonplaceholder.typicode.com/posts';


const getAllUsers = async () => {
    const { data: allUsers } = await axios.get(`${usersUrl}`);
    return allUsers
};

const getAllTodos = async () => {
    const { data: allTodos } = await axios.get(`${todosUrl}`);
    return allTodos;
};

const getAllPosts = async () => {
    const { data: allTodos } = await axios.get(`${postsUrl}`);
    return allTodos;
};

const getUserTodosById = async (id) => {
    const { data: allTodosByUser } = await axios.get(`${todosUrl}?userId=${id}&_limit=3`);
    return allTodosByUser;
}

const getUserPostsById = async (id) => {
    const { data: allPostsByUser } = await axios.get(`${postsUrl}?userId=${id}&_limit=3`);
    return allPostsByUser;
}

const addNewUser = async (name, email) => {
    const allUsers = await getAllUsers();
    const lastItemId = +allUsers[allUsers.length - 1].id;
    const obj = {
        id: lastItemId + 1,
        name,
        email,
        address: {
            street: '',
            city: '',
            zipcode: ''
        }

    }
    allUsers.push(obj)
    return allUsers;
}

const addTodoToUser = async (uid, title) => {
    const { data: allTodosByUser } = await axios.get(`${todosUrl}?userId=${uid}`);
    const allTodos = await getAllTodos();
    const lastItemId = +allTodos[allTodos.length - 1].id;
    const obj = {
        userId: +uid,
        id: lastItemId + 1,
        title,
        completed: false
    }
    allTodosByUser.push(obj)

    return allTodosByUser;
}

const addPostToUser = async (uid, title, body) => {
    const { data: allPostsByUser } = await axios.get(`${todosUrl}?userId=${uid}`);
    const allPosts = await getAllPosts();
    const lastItemId = +allPosts[allPosts.length - 1].id;
    const obj = {
        userId: +uid,
        id: lastItemId + 1,
        title,
        body
    }
    allPostsByUser.push(obj)

    return allPostsByUser;
}

export { getUserTodosById, getAllUsers, getUserPostsById, addNewUser, addTodoToUser, addPostToUser, getAllTodos, getAllPosts };
