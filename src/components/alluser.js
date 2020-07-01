import React from 'react';
import {connect} from 'react-redux';
import {showDetails,deleteUser} from '../actions/actions';

function AllUsers({props,showDetails,deleteUser}) {
    return ( 
        <table>               
            <thead>                   
                <tr>                      
                    <th>Name</th>                       
                    <th>Email</th>                                           
                    <th>Phone</th>                      
                    <th></th>
                </tr>                                 
                    {props.users.map(user =><tr key={user.id} onClick={()=>showDetails(user)}>
                        <td>{user.name}</td>                       
                        <td>{user.email}</td>                                           
                        <td>{user.phone}</td>                        
                        <td onClick={(e)=>deleteUser(e,user)}><span className="delete-link-btn">Delete</span></td>                 
                    </tr> )}                        
            </thead>
        </table>  
    );   
}
function mapStateToProps(state){
    return  {props:{users: state.users}
    }
}
function mapDispatchToProps(dispatch){
    return {
        showDetails:(user)=> dispatch(showDetails(user)),
        deleteUser: (e,user)=> {e.stopPropagation(); dispatch(deleteUser(user))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AllUsers);
