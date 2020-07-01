import React from 'react';
import {connect} from 'react-redux';
import {postUser} from '../actions/actions';

function AddUser({props,onformSubmit}) {
    return ( 
        <form onSubmit={(e)=>{onformSubmit(e)}}>
                <div><p className="flyout-title">Add User</p></div>
                <div>
                    <div className="form-row"><label>Name</label><input type="text" name="name"/></div>
                    <div className="form-row"><label>Email</label><input type="text" name="email"/></div>
                    <div className="form-row"><label>Phone</label><input type="text" name="phone"/></div>
                    <div className="form-row"><label>Website</label><input type="text" name="website"/></div>
                </div>
                <input className="button-primary" type="submit" value="Submit"/>
        </form>
    );   
}
function mapStateToProps(state){
    return {
        props:''
    }
}
function mapDispatchToProps(dispatch){
    return {
        onformSubmit:(e)=> {e.preventDefault();dispatch(postUser({name:e.target.elements[0].value, email: e.target.elements[1].value,phone: e.target.elements[2].value,website: e.target.elements[3].value}))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AddUser);
