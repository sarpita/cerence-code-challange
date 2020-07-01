   export default class UsersApi {   
    static getUsers() {       
        const url = 'https://jsonplaceholder.typicode.com/users';
        return fetch(url, { method: 'GET' }).then((response)=> response.json());   
    }
    static postUser(data){
        const url = 'https://jsonplaceholder.typicode.com/users';
        return fetch(url, { method: 'POST',body: JSON.stringify(data) }).then((response)=> response.json()); 
    }
    static deleteUser(data){
        const url = 'https://jsonplaceholder.typicode.com/users';
        return fetch(url, { method: 'DELETE',body: JSON.stringify(data) }).then((response)=> response.json()); 
    }
}
