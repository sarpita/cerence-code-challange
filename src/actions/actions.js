import UsersApi from '../api/api';

export function loadUsersSuccess(users) {
    return {type: "LOAD_USERS_SUCCESS", users};
}
export function postUsersSuccess(user) {
    return {type: "ADD_USERS_SUCCESS", user};
}
export function deleteUserSuccess(user) {
    return {type: "DELETE_USER_SUCCESS", user};
}
export function showFlyout(){
        return {type:"SHOW_FLYOUT"};
}

export function showMsg(msg){
    return function(dispatch){
        dispatch({type:"SHOW_MSG",msg});
        setTimeout(()=>{
            dispatch({type:"HIDE_MSG"});
        },5000)
    }
}
export function showDetails(user){
    return function(dispatch){
        dispatch(showFlyout());
        dispatch({type:"HIDE_ADD_USER"});
        dispatch({type:"SHOW_DETAILS",user})
    }
}
export function showAddUser(user){
    return function(dispatch){
        dispatch(showFlyout());
        dispatch({type:"SHOW_ADD_USER",user})
    }
}

export function closeFlyout(){
    return {type:"CLOSE_FLYOUT"}
}

export function loadUsers(){
    return function(dispatch){
        return UsersApi.getUsers().then((users)=>{
            dispatch(loadUsersSuccess(users));
        }).catch((error)=>{
            throw(error)
        })
    }
}
export function postUser(user){
    return function(dispatch){
        dispatch(postUsersSuccess(user))
        return UsersApi.postUser().then((user)=>{
            dispatch(closeFlyout());
            dispatch(showMsg("User Created successfully!"));
        }).catch((error)=>{
            throw(error)
        })
    }
}
export function deleteUser(user){
    return function(dispatch){
        dispatch(deleteUserSuccess(user))
        return UsersApi.deleteUser().then((user)=>{    
            console.log(user);     
        }).catch((error)=>{
            throw(error)
        })
    }
}