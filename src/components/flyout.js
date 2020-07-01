import React from 'react';
import {connect} from 'react-redux';
import {closeFlyout} from '../actions/actions';

 function Flyout({props,close}){
 return (
     <div className="flyout-wrapper">
         <div className="flyout-bg"></div>
    <div className="flyout">
        
            <div className="close-btn" onClick={(e)=> close(e)}>X</div>
            <div className="flyout-body">{props.children}</div>
    </div>
    </div>
    )
}
function mapStateToProps(state,ownProps){
    return {
        props:ownProps
    }
}
function mapDispatchToProps(dispatch){
    return {
        close:(e)=> dispatch(closeFlyout())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Flyout);