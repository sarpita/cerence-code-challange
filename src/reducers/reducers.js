export const initialState = {users:[],selectedUser:{},showFlyout:false,isShowAddUser:false,isShowbanner:false,bannerMsg:''};
export default function userReducer(state = initialState, action) {   
    switch (action.type) {       
        case "LOAD_USERS_SUCCESS": {           
            return {    
                ...state, users: action.users,                       
            }
        } 
        case "SHOW_DETAILS":{
            return {
                ...state,selectedUser: action.user
            }
        }
        case "SHOW_FLYOUT":{
            return {
                ...state, showFlyout:true
            }
        }  
        case "CLOSE_FLYOUT":{
            return {
                ...state,showFlyout:false
            }
        } 
        case "ADD_USERS_SUCCESS":{
            const users = state.users;
            users.push(action.user);
            return {
                ...state,users: users
            }
        }
        case "SHOW_ADD_USER":{
            return {
                ...state,isShowAddUser:true
            }
        } 
        case "HIDE_ADD_USER":{
            return {
                ...state,isShowAddUser:false
            }
        } 
        case "SHOW_MSG":{
            return {
                ...state,isShowbanner:true,bannerMsg:action.msg
            }
        } 
        case "HIDE_MSG":{
            return {
                ...state,isShowbanner:false
            }
        } 
        case "DELETE_USER_SUCCESS":{
            const users = state.users;
            const updatedUsers = users.filter(user =>action.user.id !== user.id);
            return {
                ...state,users: updatedUsers
            }
        }      
        default: {           
            return state;       
        }
    }
}
