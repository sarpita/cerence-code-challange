import React from 'react';
import {connect} from 'react-redux';

function ShowDetails({props}) {
    return ( 
            <div>
                <div><p className="flyout-title">User Details</p></div>
                <div>
                    <div className="details_row"><label>Name</label><label>{props.selectedUser.name}</label></div>
                    <div className="details_row"><label>Email</label><label>{props.selectedUser.email}</label></div>
                    <div className="details_row"><label>Address</label><label>{props.selectedUser.address.street} -{props.selectedUser.address.city}</label></div>
                    <div className="details_row"><label>Phone</label><label>{props.selectedUser.phone}</label></div>
                    <div className="details_row"><label>Website</label><label>{props.selectedUser.website}</label></div>
                    <div className="details_row"><label>Company</label><label>{props.selectedUser.company.name}</label></div>
                </div>
            </div>
    );   
}
function mapStateToProps(state){
    return  {props:{selectedUser:state.selectedUser}
    }
}

export default connect(mapStateToProps)(ShowDetails);
